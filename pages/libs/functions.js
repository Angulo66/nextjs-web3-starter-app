import { pairsQuery, pairsByIdQuery, pairsWithETHQuery } from './queries';
import { abi as CHAINLINKABI } from '../contracts/chainlinkPriceFeedUsdABI.json';

const uniswapUrl = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2";
const balancerUrl = "https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2";

export const getPoolById = async (id) => {
    try {
        const response = await fetch(uniswapUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                query: pairsByIdQuery(id),
            }),
        });
        const data = await response.json();
        //console.log({ data });
        return data.data.pairs;
    } catch (error) {
        console.error(error);
    }
}

export const getPoolWithETH = async (address) => {
    try {
        const response = await fetch(uniswapUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                query: pairsWithETHQuery(address),
            }),
        });
        const data = await response.json();
        const result1 = data.data.result1;
        const result2 = data.data.result2;
        if (result1.length > 0) {
            return result1[0];
        } else if (result2.length > 0) {
            return result2[0];
        }
    } catch (error) {
        console.error("getPoolWithETH", error);
    }
}

export const getPoolsByTokenAdresses = async (tokenIn, tokenOut, count = 10) => {
    console.log({ tokenIn }, { tokenOut });
    console.log("count", count);
    //const count = 10;
    require('isomorphic-fetch')
    try {
        const response = await fetch(uniswapUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                query: pairsQuery(count, tokenIn, tokenOut),
            }),
        });
        const data = await response.json();
        console.log({ data });
        // if (data.data.pairs0.length === 0 && data.data.pairs1.length === 0) {
        //     console.log("trying with balancer")
        //     const response = await fetch(balancerUrl, {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Accept": "application/json",
        //         },
        //         body: JSON.stringify({
        //             query: pairsQuery(count, tokenIn, tokenOut),
        //         }),
        //     });
        //     const data = await response.json();
        //     console.log(data.data.pairs0)
        //     return data.data.pairs0;
        // }
        return data;
    } catch (error) {
        console.error(tokenIn, tokenOut, error);
    }
}

function getReserves(pool, tokenIn) {
    let reserveIn = pool.reserve0;
    let reserveOut = pool.reserve1;

    const validateReserve = String(tokenIn).toLowerCase() === String(pool.token1.id).toLowerCase();

    const _reserves =
        validateReserve
            ? [reserveIn, reserveOut]
            : [reserveOut, reserveIn];

    reserveIn = _reserves[0];
    reserveOut = _reserves[1];
    console.log("???", reserveIn, reserveOut);
    return [reserveIn, reserveOut, validateReserve];
}

export const getSwapDetailsWithPool = async (start, end, amount, params, t1) => {
    try {
        const { poolIds, tokenNames, tokenPaths, tokenInAddress } = params;

        const poolData = await getPoolById(poolIds[start]);

        if (start >= end) {
            let t2 = performance.now();
            console.warn("Call to doSwap took " + (t2 - t1) + " milliseconds.");
            console.log("Your Amount Out", amount);
            return amount;
        }

        const temp = poolData[0];

        const usdPrice0 = await getPrice(tokenNames[start], tokenInAddress, temp);
        const usdPriceInput = await getPrice(tokenNames[0], tokenInAddress, temp);
        console.log("price for input token", usdPriceInput);

        const usdPriceAmount = Number(usdPrice0) * Number(amount);

        const reserves = getReserves(temp, tokenPaths[start + 1]);

        const priceForOneTokenOut = reserves[1] / reserves[0];
        const amountOut = getAmountOut(amount, reserves[0], reserves[1]);

        const difference = Number(amountOut) - (Number(priceForOneTokenOut) * Number(amount));
        const percentageDifference = difference / (Number(priceForOneTokenOut) * Number(amount));
        const percentage = percentageDifference * 100;

        const usdPrice0Percentage = (percentage / 100) * Number(usdPriceAmount);

        console.log(`%c You sell ${reserves[2] ? temp.token0.symbol : temp.token1.symbol} : ${amount} ~$${usdPriceAmount}`, "color: #00ff00");
        console.log(`%c You buy ${reserves[2] ? temp.token1.symbol : temp.token0.symbol} : ${amountOut} ~$${usdPriceAmount + usdPrice0Percentage} (${percentage.toFixed(2)})`, "color: #00ff00");

        getSwapDetailsWithPool(start + 1, end, amountOut, params, t1);
    } catch (error) {
        console.error(error);
    }
}

const PRICE_FEEDS_USD = [["ethereum", '0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419'], ["wrapped-bitcoin", "0xf4030086522a5beea4988f8ca5b36dbc97bee88c"]
    , ["LINK", "0x2c1d072e956affc0d435cb7ac38ef18d24d9127c"], ["DAI", "0xaed0c38402a5d19df6e4c03f4e2dced6e29c1ee9"]
    , ["USDT", "0x3e7d1eab13ad0104d2750b8863b489d65364e32d"], ["USDC", "0x8fffffd4afb6115b954bd326cbe7b4ba576818f6"]
    , ["AAVE", "0x547a514d5e3769680ce22b2361c10ea13619e8a9"], ["UNI", "0x553303d460ee0afb37edff9be42922d8ff63220e"]
    , ["DOT", "0x1c07afb8e2b827c5a4739c6d59ae3a5035f28734"], ["MATIC", "0x7bac85a8a13a4bcd8abb3eb7d6b4d632c5a57676"]
    , ["COMP", "0xdbd020caef83efd542f4de03e3cf0c28a4428bd5"], ["YFI", "0xa027702dbb89fbd58938e4324ac03b58d812b0e1"]
    , ["SNX", "0xdc3ea94cd0ac27d9a86c180091e7f78c683d3699"]];

const JSON_RPC_PROVIDER = 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';

export async function withChainlink(address) {
    try {
        const ethers = require('ethers');
        const provider = new ethers.providers.JsonRpcProvider(JSON_RPC_PROVIDER);

        const priceFeedContract = new ethers.Contract(address, CHAINLINKABI, provider);
        const price = await priceFeedContract.functions.latestAnswer();
        console.log("usingChainlink", price / 10 ** 8);
        return price / 10 ** 8;
    } catch (error) {
        console.warn(`withChainlink Can't get price for ${address}, returning 0`);
        return 0;
    }
}

export async function withCoingecko(symbol) {
    const axios = require('axios');
    const usdVS = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol.toLowerCase()}&vs_currencies=usd`);
    console.warn("usingCoingecko", usdVS.data[symbol.toLowerCase()].usd);
    return parseFloat(usdVS.data[symbol.toLowerCase()].usd);
}

export async function getEthPrice() {
    const ethPrice = await withChainlink("0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419");
    console.log({ ethPrice });
    return ethPrice;
}

export async function withPoolLiquidity(biggerToken, tokenIn, ethPool, pool) {
    try {
        console.log({ biggerToken }, { tokenIn })
        const ethPrice = await getEthPrice();

        let biggerTokenPrice = 0;
        if (ethPool.reserve0 > ethPool.reserve1) {
            biggerTokenPrice = ethPrice * ethPool.token0Price
            console.log("bigger token price", ethPrice * ethPool.token0Price);
        } else {
            biggerTokenPrice = ethPrice * ethPool.token1Price
            console.log("bigger token price", ethPrice * ethPool.token1Price);
        }

        if (biggerToken === tokenIn) return biggerTokenPrice;

        let tokenInPrice = 0;
        if (pool.reserve0 > pool.reserve1) {
            tokenInPrice = biggerTokenPrice * pool.token1Price
            console.log("output token price", biggerTokenPrice * pool.token1Price);
        } else {
            tokenInPrice = biggerTokenPrice * pool.token0Price
            console.log("output token price", biggerTokenPrice * pool.token0Price);
        }

        return tokenInPrice;
        // //let { reserveIn, reserveOut, validateReserve } = getReserves(ethPool, tokenIn);
        // const bigReserve = await getReserves(ethPool, tokenIn);
        // //console.log({ reserveIn }, { reserveOut }, { validateReserve });

        // const priceForOneTokenOut = bigReserve[1] / bigReserve[0];
        // const biggerTokenPrice = Number(priceForOneTokenOut) * Number(ethPrice);
        // console.log({ biggerTokenPrice });
        // console.log({ priceForOneTokenOut });

        // const smallReserve = getReserves(pool, biggerToken);
        // //console.log({ _reserveIn }, { _reserveOut }, { _validateReserve });
        // const priceForOneTokenIn = smallReserve[1] / smallReserve[0];
        // console.log({ priceForOneTokenIn });
        // const smallerTokenPrice = Number(priceForOneTokenIn) * Number(biggerTokenPrice);
        // console.log({ smallerTokenPrice });
        return 0;


        // let reserveBiggerToken = biggerToken === ethPool.token1.id ? ethPool.token1Price : ethPool.token0Price;
        // let biggerTokenPrice = reserveBiggerToken * ethPrice;

        // console.log({ biggerTokenPrice });

        // if (String(biggerToken).toLowerCase() === String(tokenOut).toLowerCase()) return Number(biggerTokenPrice);

        // const outputReserve = tokenOut === pool.token1.id ? pool.token1Price : pool.token0Price;
        // console.log({ outputReserve });
        // const tokenOutPrice = outputReserve * biggerTokenPrice;

        // console.log("withPoolLiquidity", { tokenOutPrice });
        // return Number(tokenOutPrice);
    } catch (error) {
        console.warn(`withPoolLiquidity error, returning 0`, error);
        return 0;
    }
}

// function to get usd price of token using coingecko
export const getPrice = async (symbol, tokenIn, pool) => {
    try {
        let chainlink = { status: false, address: 0 };
        PRICE_FEEDS_USD.forEach(async (item) => { if (item[0].toLowerCase().includes(String(symbol).toLowerCase())) { chainlink.status = true; chainlink.address = item[1]; } });
        if (chainlink.status) {
            return await withChainlink(chainlink.address);
        } else {
            let biggerToken = pool.token0.id;
            if (pool.reserve1 < pool.reserve0) biggerToken = pool.token1.id; // biggertoken is token with less reserve

            let result = await getPoolWithETH(biggerToken);
            if (result) {
                return await withPoolLiquidity(biggerToken, tokenIn, result, pool);
            } else {
                return await withCoingecko(symbol);
            }
        }
    } catch (error) {
        console.warn(`getPrice can't get price for ${symbol}, returning 0`);
        return 0;
    }
}

export const getAmountOut = (amountIn, reserveIn, reserveOut) => {
    const amountInWithFee = Number(amountIn) * 997;
    const numerator = Number(amountInWithFee) * Number(reserveOut);
    const denominator = Number(reserveIn) * 1000 + Number(amountInWithFee);
    return numerator / denominator;
}


// see https://dailydefi.org/articles/price-impact-and-how-to-calculate/ for more info
const getConstantProduct = (reserve0, reserve1, amount) => {
    const constantProduct = Number(reserve0) * Number(reserve1);
    const new_amount_in = Number(reserve0) + Number(amount);
    const new_amount_out = constantProduct / new_amount_in;

    const amount_out_receive = Number(reserve1) - Number(new_amount_out);
    const amount_paid_for_token = Number(amount) / Number(amount_out_receive);

    // const difference = Number(amount_paid_for_token) - Number(priceForOneTokenIn);
    // const percentageDifference = difference / Number(priceForOneTokenIn);
    // const percentage = percentageDifference * 100;
    // const priceImpact = percentage * Number(amount);
}


/**
 * 
 * @param {Number} priority - 1: high, 2: medium, 3: low
 * @returns {string} Gas price in gwei
 */
export const fetchGasPrice = async (priority) => {
    require('isomorphic-fetch')
    const proxy = await fetch(
        `https://ethgasstation.info/api/ethgasAPI.json?api-key=3f07e80ab9c6bdd0ca11a37358fc8f1a291551dd701f8eccdaf6eb8e59be`
    )
    if (proxy.status >= 400) {
        throw new Error("Bad response from server");
    }
    const res = await proxy.json()

    if (priority === 1) {
        return res.fast / 10
    } else if (priority === 2) {
        return res.average / 10
    } else if (priority === 3) {
        return res.safeLow / 10
    } else {
        return res.average / 10
    }
}

/**
 * 
 * @param {*} token 
 * @param {*} spender 
 * @param {*} amount 
 * @param {*} account 
 * @returns 
 */
export const approveToken = async (token, spender, amount, account) => {
    const allowance = await token.methods.allowance(account, spender).call()
    const approve = await token.methods.approve(spender, amount)
    const tx = await approve.send({ from: account })
    return tx
}

/**
 * 
 * @param {*} account 
 * @param {*} tokenAddress 
 * @returns 
 */
export const getTokenBalanceValue = async (account, tokenAddress) => {
    let tokenContract = new web3.eth.Contract(ERC20ABI, tokenAddress);

    let decimals = await tokenContract.methods.decimals().call();

    let balance = await tokenContract.methods.balanceOf(account).call();

    if (Number(decimals) === 18) {
        return web3.utils.fromWei(balance, "ether");
    } else {
        let number = `1${Array(parseFloat(decimals)).fill(0).join("")}`;

        return value / number;
    }
};

/**
 * 
 * @param {*} account 
 * @returns
 */
export const getEthBalance = async (account) => {
    let balance = await web3.eth.getBalance(account);
    return web3.utils.fromWei(balance, "ether");
}