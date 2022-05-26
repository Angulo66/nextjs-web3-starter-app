export const pairsQuery = (count, token, tokenOut) => {
    return `{
      pairs0: pairs (
        first: ${count},
        where: { 
          token0: "${token}"
          ${tokenOut ? `token1: "${tokenOut}"` : ""}
        },
        orderBy: reserveETH,
        orderDirection: desc
      ) {
        id
        token0 {
          id
          decimals
          symbol
        }
        token1 {
          id
          decimals
          symbol
        }
        reserve0
        reserve1
        totalSupply
      }
      pairs1: pairs (
        first: ${count},
        where: { 
          token1: "${token}"
          ${tokenOut ? `token0: "${tokenOut}"` : ""}
        },
        orderBy: reserveETH,
        orderDirection: desc
      ) {
        id
        token0 {
          id
          decimals
          symbol
        }
        token1 {
          id
          decimals
          symbol
        }
        reserve0
        reserve1
        totalSupply
      }
  }`;
};