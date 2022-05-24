export const SupportedChainId = {
    MAINNET: 1,
    ROPSTEN: 3,
    RINKEBY: 4,
    GOERLI: 5,
    KOVAN: 42,
    LOCAL: 31337,
}

export const ALL_SUPPORTED_CHAIN_IDS = [
    SupportedChainId.MAINNET,
    SupportedChainId.ROPSTEN,
    SupportedChainId.RINKEBY,
    SupportedChainId.GOERLI,
    SupportedChainId.KOVAN,
    SupportedChainId.LOCAL,
]

export const POLLING_INTERVAL = 12000

export const MAINNET_URLS = [
    "https://mainnet.infura.io/v3/b111d8f387c847039541e29435e06cd2",
    "https://mainnet.infura.io/v3/dbcaff273dce408fbd5b9c97c30b4c40",
    "https://mainnet.infura.io/v3/e8c25d34148c49169600a7e5dc0e2ac4",
    "https://mainnet.infura.io/v3/8e52599a4fd1494cae9ae25122f3b54e",
    "https://mainnet.infura.io/v3/6d07c9b168114102921f5ab6808ef17f",
]

export const RPC_URLS = {
    [SupportedChainId.MAINNET]:
        MAINNET_URLS[Math.floor(Math.random() * MAINNET_URLS.length)],
    [SupportedChainId.ROPSTEN]:
        "https://ropsten.infura.io/v3/b9c9c8f8b9f64f0c9d3e9f0f8e9c8dab",
    [SupportedChainId.RINKEBY]:
        "https://rinkeby.infura.io/v3/b9c9c8f8b9f64f0c9d3e9f0f8e9c8dab",
    [SupportedChainId.GOERLI]:
        "https://goerli.infura.io/v3/b9c9c8f8b9f64f0c9d3e9f0f8e9c8dab",
    [SupportedChainId.KOVAN]:
        "https://kovan.infura.io/v3/b111d8f387c847039541e29435e06cd2",
    [SupportedChainId.LOCAL]: "http://localhost:8545",
}
