// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPoolsByTokenAdresses, getSwapDetailsWithPool } from "../libs/functions"

const pairs = [
    {
        name: 'ETH>PIXEL',
        tokenId: "ethereum",
        tokenInAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        tokenOutAddress: '0xd075e95423c5c4ba1e122cae0f4cdfa19b82881b',
        amount: 3,
    },
]

export default async function handler(req, res) {
    console.warn("Swap for pairs with hops test:::")
    //let results = [];
    for (let i = 0; i < pairs.length; i++) {
        console.warn(`Output for ${pairs[i].name}`);
        const pool = await getPoolsByTokenAdresses(pairs[i].tokenInAddress, pairs[i].tokenOutAddress);
        //const response = await getSwapDetailsWithPool(pool, pairs[i].amount, pairs[i].tokenId, pairs[i].tokenOutAddress);
        //results.push(response);
    }
    res.status(200).json({ results: "Hello World!" });
}