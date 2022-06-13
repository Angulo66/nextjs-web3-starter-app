import { CreditCardIcon } from "@heroicons/react/outline";

export default function SwapButton() {
  return (
    <div className="mt-8 flex flex-col gap-y-4">
      <button className="flex items-center justify-center gap-2 aactive:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-blue-200 rounded-xl text-blue-500 font-semibold text-lg hover:bg-blue-100">
        <CreditCardIcon
          className="h-6 w-6"
          fill="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        />
        Connect wallet
      </button>
    </div>
  );
}
