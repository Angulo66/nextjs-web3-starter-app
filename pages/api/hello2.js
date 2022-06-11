// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPoolsByTokenAdresses, getSwapDetailsWithPool, getPoolById } from "../libs/functions"

const test0 = {
    name: "ETH>WPE",
    tokenId: "ethereum",
    tokenInAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    tokenOutAddress: '0xd075e95423c5c4ba1e122cae0f4cdfa19b82881b',
    amount: 2,
    poolIds: [
        "0x75f89ffbe5c25161cbc7e97c988c9f391eaefaf9" // ETH>WPE
    ],
    tokenPaths: [
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", // ETH
        "0xd075e95423c5c4ba1e122cae0f4cdfa19b82881b", // WPE
    ],
    tokenNames: [
        "ethereum",
    ]
}

const test1 = {
    name: "STR>WPE",
    tokenId: "starwire",
    tokenInAddress: '0x11c1a6b3ed6bb362954b29d3183cfa97a0c806aa',
    tokenOutAddress: '0xd075e95423c5c4ba1e122cae0f4cdfa19b82881b',
    amount: 10000,
    poolIds: [
        "0x8eaa970be66d4de446453aea538173382c2cace8" // WPE>STR
    ],
    tokenPaths: [
        "0x11c1a6b3ed6bb362954b29d3183cfa97a0c806aa", // STR
        "0xd075e95423c5c4ba1e122cae0f4cdfa19b82881b", // WPE
    ],
    tokenNames: [
        "starwire",
    ]
}

const test2 = {
    name: "ETH>STR",
    tokenId: "ethereum",
    tokenInAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    tokenOutAddress: '0x11c1a6b3ed6bb362954b29d3183cfa97a0c806aa',
    amount: .5,
    poolIds: [
        "0xbb2b8038a1640196fbe3e38816f3e67cba72d940", // ETH>WBTC
        "0x0731ee4cf7376a1bd5a78199ac9bedc8213def24", // WBTC>WPE
        "0x8eaa970be66d4de446453aea538173382c2cace8" // WPE>STR
    ],
    tokenPaths: [
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", //ETH
        "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599", // WBTC   
        "0xd075e95423c5c4ba1e122cae0f4cdfa19b82881b", // WPE
        "0x11c1a6b3ed6bb362954b29d3183cfa97a0c806aa" // STR
    ],
    tokenNames: [
        "ethereum",
        "wrapped-bitcoin",
        "opes-wrapped-pe",
    ]
}

const test3 = {
    name: "DAI>ETH",
    tokenId: "dai",
    tokenInAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
    tokenOutAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    amount: 200,
    poolIds: [
        "0xfc0dd985f6de9c2322ebd97c3422b0857c4d78c7",
        "0x648450d9c30b73e2229303026107a1f7eb639f6c"
    ],
    tokenPaths: [
        "0x6b175474e89094c44da98b954eedeac495271d0f",
        "0x1337def16f9b486faed0293eb623dc8395dfe46a",
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
    ],
    tokenNames: [
        "dai",
    ]
}

const test4 = {
    name: "WPE>ETH",
    tokenId: "ethereum",
    tokenOutAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    tokenInAddress: '0xd075e95423c5c4ba1e122cae0f4cdfa19b82881b',
    amount: 2,
    poolIds: [
        "0x75f89ffbe5c25161cbc7e97c988c9f391eaefaf9" // ETH>WPE
    ],
    tokenPaths: [
        "0xd075e95423c5c4ba1e122cae0f4cdfa19b82881b", // WPE
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
    ],
    tokenNames: [
        "opes-wrapped-pe",
    ]
}


export default async function handler(req, res) {
    const test = test4;
    let t1 = performance.now();
    console.warn("Swap for pairs with hops test:::");
    test.tokenPaths.slice(1);
    const start = 0, end = test.poolIds.length, amount = test.amount;

    getSwapDetailsWithPool(start, end, amount, test, t1);

    res.status(200).json({ result: `Done!` });
}