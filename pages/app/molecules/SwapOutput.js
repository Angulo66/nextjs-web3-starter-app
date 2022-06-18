import { atom, useAtom } from "jotai";
import { openTokensAtom } from "../components/TokenListModal";
import Image from "next/image";

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
  let [isOpen, setIsOpen] = useAtom(openTokensAtom);
  return (
    <div className="rounded-2xl mt-1 border-2">
      <h1 className="text-base text-gray-400 hover:text-slate-800 cursor-pointer pl-4 pt-2">
        <a
          href={`https://etherscan.io/token/${swap[0].tokenAddress}`}
          target="blank"
        >
          You buy
        </a>
      </h1>
      <div className="flex mt-5  mr-6  pl-5">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform rounded-xl  font-semibold text-lg border-2 border-gray-100 hover:bg-gray-50"
        >
          <Image
            src={swap[0].logoURI}
            alt={swap.tokenAddress}
            width={24}
            height={24}
          />
          <span>{swap[0].token}</span>
        </button>
      </div>
      {swap.map((item) => (
        <Output key={item.exchange} data={item} />
      ))}
    </div>
  );
}
