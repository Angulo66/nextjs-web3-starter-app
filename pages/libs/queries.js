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

export const pairsByIdQuery = (id) => {
  return `{
    pairs (
      where: { 
        id: "${id}"
      },
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
      reserveETH
      reserveUSD
      token0Price
      token1Price
    }
}`;
};

export const pairsWithETHQuery = (id) => {
  return `{
    result1: pairs(first: 1, where: {
      token0: "${id}"
      , token1: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
    }
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
      reserveETH
      reserveUSD
      volumeUSD
      token0Price
      token1Price
    },
    result2: pairs(first: 1, where: {
      token0: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      token1: "${id}"
    },
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
      reserveETH
      reserveUSD
      volumeUSD
      token0Price
      token1Price
    }
  }`;
}