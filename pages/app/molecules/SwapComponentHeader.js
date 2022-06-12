export default function SwapComponentHeader() {
  return (
    <div className="flex -mt-12">
      <div className="grow h-14 flex">
        <div className="text-lg hover:scale-[1.08] cursor-pointer font-semibold">
          Swap
        </div>
        {/* <div className="px-4 text-lg hover:scale-[1.08] cursor-pointer font-semibold">
          Limit
        </div>
        <div className="px-4 text-lg hover:scale-[1.08] cursor-pointer font-semibold">
          P2P
        </div> */}
      </div>
      <div className="flex-none w-14 h-14">
        <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.2] px-4 ">
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
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
        <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.2] -mr-8">
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
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
