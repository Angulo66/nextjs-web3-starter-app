const swap = [
  {
    exchange: "1Inch",
    token: "WETH",
    tokenAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    tokenName: "Wrapped Ether",
    amount: "58.85342322",
    price: "86,206.20",
    txCost: "0.01263",
    txPrice: "9.36",
    priceImpact: "47.25",
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
  },
  {
    exchange: "Uniswap",
    token: "WETH",
    tokenAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    tokenName: "Wrapped Ether",
    amount: "58.85342322",
    price: "86,206.20",
    txCost: "0.01263",
    txPrice: "9.36",
    priceImpact: "47.25",
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
  },
];

function Output({ data }) {
  return (
    <div className="mt-5 container mx-auto px-4">
      <div className="border-2 rounded-2xl h-25 mb-2 border-sky-600">
        {/* <div className="bg-green-600 text-white text-xs pl-2 rounded-tl-lg rounded-br-lg rounded-tr-lg w-32 -mt-2 -ml-0.5 p-1">
          Save $106,190,229.10
        </div> */}
        <div className="flex mt-2 container mx-auto px-4 ">
          <div className="text-lg grow h-14 flex hover:text-slate-800 cursor-pointer">
            {data.exchange}
          </div>
          <div className="text-lg flex-none h-14 cursor-pointer">
            {data.amount}
          </div>
        </div>
        <div className="container px-4 -mb-5 -mt-5">
          <div className="text-xs text-gray-400 grow h-14 flex cursor-pointer">
            Tx cost: {data.txCost} Ξ (~{data.txPrice}) ~${data.price}{" "}
            <span className="text-red-600">(-{data.priceImpact}%)</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SwapOutput() {
  return (
    <div className="rounded-2xl mt-1 border-2">
      <h1 className="text-base text-gray-400 hover:text-slate-800 cursor-pointer pl-4 pt-2">
        You buy
      </h1>
      <div className="flex mt-5  mr-6  pl-5">
        <button className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform rounded-xl  font-semibold text-lg border-2 border-gray-100 hover:bg-gray-50">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
              fill="#EA4335"
            />
            <path
              d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
              fill="#34A853"
            />
            <path
              d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
              fill="#4A90E2"
            />
            <path
              d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
              fill="#FBBC05"
            />
          </svg>
          <span>{swap[0].token}</span>
        </button>
      </div>
      {swap.map((item) => (
        <Output key={item.exchange} data={item} />
      ))}
    </div>
  );
}
