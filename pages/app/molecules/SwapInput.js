import Image from "next/image";

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
  return (
    <div className="bg-gray-100  rounded-2xl mt-1">
      <div className="flex mt-5 container mx-auto px-4">
        <h1 className="text-xs text-gray-400 hover:text-slate-800 cursor-pointer pl-2 pt-2">
          <a
            href={`https://etherscan.io/token/${swap.tokenAddress}`}
            target="blank"
          >
            You sell
          </a>
        </h1>
        <h1 className="text-xs text-gray-400 pl-2 pt-2">
          Balance: {swap.balance}
          <button className="rounded-full bg-white border-2 border-gray-200 cursor-pointer -mb-3 hover:scale-[1.01]">
            Max
          </button>
        </h1>
      </div>
      <div className="flex mt-4  mr-6  pl-5">
        <button className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform rounded-xl  font-semibold text-lg border-2 border-gray-100 hover:bg-gray-50">
          <Image
            src={swap.logoURI}
            alt={swap.tokenAddress}
            width={24}
            height={24}
          />
          <span>{swap.token}</span>
        </button>
        <div className="text-lg pl-44">{swap.amount}</div>
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
