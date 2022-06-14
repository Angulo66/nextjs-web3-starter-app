import Image from "next/image";
import { atom, useAtom } from "jotai";
import { openTokensAtom } from "../components/TokenListModal";

const swap = {
  token: "DAI",
  tokenAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  tokenName: "Dai Stablecoin",
  amount: "88,204.85",
  price: "88,206.20",
  logoURI:
    "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
  balance: "90k",
};

export default function SwapInput() {
  let [isOpen, setIsOpen] = useAtom(openTokensAtom);
  return (
    <div className="bg-gray-100  rounded-2xl mt-1">
      <div className="flex mt-5 container mx-auto px-4">
        <h1 className="text-xs text-gray-400 hover:text-slate-800 cursor-pointer pl-2 pt-2 grow flex">
          <a
            href={`https://etherscan.io/token/${swap.tokenAddress}`}
            target="blank"
          >
            You sell
          </a>
        </h1>
        <h1 className="text-xs text-gray-400 pl-2 pt-2 flex-none  ">
          <span className="mr-2">Balance: {swap.balance}</span>
          <button className="rounded-full bg-white border-2 border-gray-200 cursor-pointer -mb-3 hover:scale-[1.01] h-6 w-10 active:scale-[.98] active:duration-75 transition-all">
            Max
          </button>
        </h1>
      </div>
      <div className="flex mt-4  mr-6  pl-5">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform rounded-xl  font-semibold text-lg border-2 border-gray-100 hover:bg-gray-50"
        >
          <Image
            src={swap.logoURI}
            alt={swap.tokenAddress}
            width={24}
            height={24}
          />
          <span>{swap.token}</span>
        </button>
        <div className="pl-[6rem]">
          <div className="mt-1 rounded-md shadow-sm">
            <input
              type="number"
              id="amount"
              className="block pl-2 rounded-md focus:outline-0 h-7 max-h-[1.9rem] w-full text-gray-600 placeholder-gray-600"
              placeholder="0.00"
            />
          </div>
        </div>
      </div>
      <div className="flex mt-5 container mx-auto px-4">
        <div className="text-xs text-gray-400 grow h-14 flex hover:text-slate-800 cursor-pointer ">
          <a
            href={`https://etherscan.io/token/${swap.tokenAddress}`}
            target="blank"
          >
            {swap.tokenName}
          </a>
        </div>
        <div className="text-xs text-gray-400 flex-none    h-14 ">
          ~${swap.price}
        </div>
      </div>
    </div>
  );
}
