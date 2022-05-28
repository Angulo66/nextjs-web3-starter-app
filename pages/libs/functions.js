import { pairsQuery, pairsByIdQuery } from './queries';

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
        console.log({ data });
        return data.data.pairs;
    } catch (error) {
        console.error(error);
    }
}

export const getPoolsByTokenAdresses = async (tokenIn, tokenOut) => {
    console.log({ tokenIn }, { tokenOut });
    const count = 10;
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
        if (data.data.pairs0.length === 0 && data.data.pairs1.length === 0) {
            console.log("trying with balancer")
            const response = await fetch(balancerUrl, {
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
            console.log(data.data.pairs0)
            return data.data.pairs0;
        }
        return data;
    } catch (error) {
        console.error(tokenIn, tokenOut, error);
    }
}

export const getSwapDetailsWithPool = async (pool, amount, tokenId, tokenOut) => {
    //console.log({ pool })
    try {
        //console.log(pool, amount, tokenId, tokenOut);
        //const pool1 = pool.data.pairs0[0];
        //const pool2 = pool.data.pairs1[0];
        //const temp = pool1 ? pool1 : pool2;
        const temp = pool[0];
        //console.log("temp pool", temp)
        const usdPrice0 = await getPrice(tokenId);
        const usdPriceAmount = Number(usdPrice0) * Number(amount);

        let reserveIn = temp.reserve0//.toString();
        let reserveOut = temp.reserve1//.toString();

        const validateReserve = String(tokenOut).toLowerCase() === String(temp.token1.id).toLowerCase()

        const _reserves =
            validateReserve
                ? [reserveIn, reserveOut]
                : [reserveOut, reserveIn];

        reserveIn = _reserves[0];
        reserveOut = _reserves[1];

        const priceForOneTokenOut = reserveOut / reserveIn;
        const amountOut = getAmountOut(amount, reserveIn, reserveOut);

        const difference = Number(amountOut) - (Number(priceForOneTokenOut) * Number(amount));
        const percentageDifference = difference / (Number(priceForOneTokenOut) * Number(amount));
        const percentage = percentageDifference * 100;

        const usdPrice0Percentage = (percentage / 100) * Number(usdPriceAmount);

        console.log(`You sell ${validateReserve ? temp.token0.symbol : temp.token1.symbol} : ${amount} ~$${usdPriceAmount}`)
        console.log(`You buy ${validateReserve ? temp.token1.symbol : temp.token0.symbol} : ${amountOut} ~$${usdPriceAmount + usdPrice0Percentage} (${percentage.toFixed(2)})`);
        return amountOut;
    } catch (error) {
        console.error(error);
    }
}

// function to get usd price of token using coingecko
export const getPrice = async (symbol) => {
    try {
        const axios = require('axios');
        const usdVS = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol.toLowerCase()}&vs_currencies=usd`);
        return parseFloat(usdVS.data[symbol.toLowerCase()].usd);
    } catch (error) {
        console.warn(`Can't get price for ${symbol}, returning 0`);
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

const tokens = 'ETH WPE WBTC PIXEL YFU STR USDT USDC DAI M2 BHNY LIFT'.split(' ');

const pairs = [
    ['ETH', 'WPE'],
    ['ETH', 'WBTC'],
    ['WPE', 'WBTC'],
    ['WPE', 'PIXEL'],
    ['WPE', 'YFU'],
    ['WPE', 'STR'],
    ['ETH', 'USDT'],
    ['ETH', 'USDC'],
    ['ETH', 'DAI'],
    ['WPE', 'M2'],
    ['WPE', 'BHNY'],
    ['WPE', 'LIFT'],
];

// create structure where keys in pairs can be mapped to token data
const tokenData = {
    ETH: {
        symbol: 'ETH',
        decimals: 18,
        address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    },
    WPE: {
        symbol: 'WPE',
        decimals: 18,
        address: '0xd075e95423c5c4ba1e122cae0f4cdfa19b82881b',
    },
    WBTC: {
        symbol: 'WBTC',
        decimals: 8,
        address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    },
    STR: {
        symbol: 'STR',
        decimals: 18,
        address: '0x11c1a6b3ed6bb362954b29d3183cfa97a0c806aa',
    }
};

//const adjecencyList = {};

// the graph
const adjecencyList = new Map();

const addNode = (node) => {
    // if (!graph.has(node)) {
    //     graph.set(node, []);
    // }
    adjecencyList.set(node, []);
}

const addEdge = (origin, destination) => {
    //console.log("origin", origin);
    //console.log("destination", destination);

    adjecencyList.get(origin).push(destination);
    adjecencyList.get(destination).push(origin);
}

export const dijkstra = async (graph, start, end) => {
    //const { dijkstra } = require('dijkstrajs');
    //const path = dijkstra(graph, start, end);
    //return path;
    console.log("creating graph")
    tokens.forEach(addNode);
    pairs.forEach(pair => addEdge(...pair));

    console.log({ adjecencyList })
    console.log("running bfs")
    bfs('ETH', 'STR');
    console.log("running dfs")
    dfs('ETH', 'STR');
}

//BFS Breadth First Search
export const bfs = async (start, end) => {

    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
        const token = queue.shift(); // mutate array, remove first item and returns it
        const pairs = adjecencyList.get(token);

        for (const pair of pairs) {

            if (pair === end) {
                console.log(`route to ${end} from ${start} found`)
                //return;
            }

            if (!visited.has(pair)) {
                visited.add(pair);
                queue.push(pair);
                console.log(pair);
            }
        }
    }
}

// DFS Depth First Search
export const dfs = (start, end, visited = new Set()) => {
    visited.add(start);
    const pairs = adjecencyList.get(start);

    for (const pair of pairs) {

        if (pair === end) {
            console.log(`route to ${end} found through ${start}`)
            // get object where end is in tokenData array
            //const tokenInfo = Object.values(tokenData).find(token => token.symbol === end);
            //console.log({ tokenInfo })
        }

        if (!visited.has(pair)) {
            dfs(pair, end, visited);
        }
    }
}