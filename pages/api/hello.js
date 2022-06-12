// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPoolsByTokenAdresses, getSwapDetailsWithPool } from "../libs/functions"


const pairs = [
  // {
  //   name: 'ETH>STR',
  //   tokenId: "ethereum",
  //   tokenInAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  //   tokenOutAddress: '0x11c1a6b3ed6bb362954b29d3183cfa97a0c806aa',
  //   amount: 2,
  // },
  {
    name: 'ETH>WPE',
    tokenId: "ethereum",
    tokenInAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    tokenOutAddress: '0xd075e95423c5c4ba1e122cae0f4cdfa19b82881b',
    amount: 5,
  },
  // {
  //   name: 'STR>WPE',
  //   tokenId: "starwire",
  //   tokenInAddress: '0x11c1a6b3ed6bb362954b29d3183cfa97a0c806aa',
  //   tokenOutAddress: '0xd075e95423c5c4ba1e122cae0f4cdfa19b82881b',
  //   amount: 10000,
  // },
  // {
  //   name: 'LIFT>WPE', // coingecko wrong price
  //   tokenId: "lift",
  //   tokenInAddress: '0x47bd5114c12421fbc8b15711ce834afdedea05d9',
  //   tokenOutAddress: '0xd075e95423c5c4ba1e122cae0f4cdfa19b82881b',
  //   amount: 10000,
  // },
  // {
  //   name: 'YFU>WPE', // coingecko wrong price
  //   tokenId: "yfu-finance",
  //   tokenInAddress: '0xa279dab6ec190ee4efce7da72896eb58ad533262',
  //   tokenOutAddress: '0xd075e95423c5c4ba1e122cae0f4cdfa19b82881b',
  //   amount: 10000,
  // },
  // {
  //   name: 'PIXEL>WPE', // coingecko wrong price
  //   tokenId: "iupixel",
  //   tokenInAddress: '0x89045d0af6a12782ec6f701ee6698beaf17d0ea2',
  //   tokenOutAddress: '0xd075e95423c5c4ba1e122cae0f4cdfa19b82881b',
  //   amount: 10000,
  // },
  // {
  //   name: 'USDC>ETH',
  //   tokenId: "usd-coin",
  //   tokenInAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  //   tokenOutAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  //   amount: 2000,
  // },
  // {
  //   name: 'WBTC>ETH',
  //   tokenId: "bitcoin",
  //   tokenInAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
  //   tokenOutAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  //   amount: 1,
  // },
  // {
  //   name: 'ETH>WBTC',
  //   tokenId: "bitcoin",
  //   tokenInAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  //   tokenOutAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
  //   amount: 30,
  // }
]

export default async function handler(req, res) {
  console.warn("Swap for direct pairs test:::")
  //let results = [];
  for (let i = 0; i < pairs.length; i++) {
    console.warn(`Output for ${pairs[i].name}`);
    const pool = await getPoolsByTokenAdresses(pairs[i].tokenInAddress, pairs[i].tokenOutAddress);
    const response = await getSwapDetailsWithPool(pool, pairs[i].amount, pairs[i].tokenId, pairs[i].tokenOutAddress);
    //results.push(response);
  }
  res.status(200).json({ results: "Hello World!" });
}