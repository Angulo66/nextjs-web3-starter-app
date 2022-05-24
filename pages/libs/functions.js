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