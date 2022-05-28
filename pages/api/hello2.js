// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPoolsByTokenAdresses, getSwapDetailsWithPool, getPoolById, dijkstra, testFunction } from "../libs/functions"

const params = {
    name: "ETH>STR",
    tokenId: "ethereum",
    tokenInAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    tokenOutAddress: '0x11c1a6b3ed6bb362954b29d3183cfa97a0c806aa',
    amount: 5,
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

export default async function handler(req, res) {
    console.warn("Swap for pairs with hops test:::")
    let results = [];
    let amountIn = params.amount;

    dijkstra();


    // for (let i = 0; i < params.poolIds.length; i++) {
    //     //return;
    //     //console.warn(`Output for ${pairs[i].name}`);
    //     //const pool = await getPoolsByTokenAdresses(pairs[i].tokenInAddress, pairs[i].tokenOutAddress);
    //     const pool = await getPoolById(params.poolIds[i]);
    //     console.log(`hop ${i + 1}`);
    //     const response = await getSwapDetailsWithPool(pool, amountIn, params.tokenNames[i], params.tokenPaths[i + 1]);
    //     amountIn = response;
    //     //console.log(`output ${i + 1}`, response);
    //     results.push(response);
    // }
    //console.log({ results });
    res.status(200).json({ results: "Hello World!" });
}