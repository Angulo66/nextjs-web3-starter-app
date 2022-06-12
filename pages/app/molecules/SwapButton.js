export default function SwapButton() {
  return (
    <div className="mt-8 flex flex-col gap-y-4">
      <button className="flex items-center justify-center gap-2 aactive:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-blue-200 rounded-xl text-blue-500 font-semibold text-lg hover:bg-blue-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>{" "}
        Connect wallet
      </button>
    </div>
  );
}
