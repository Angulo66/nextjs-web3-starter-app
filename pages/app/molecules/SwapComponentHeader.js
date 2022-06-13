import { openSettingsAtom } from "../components/AdvancedOptionsModal";
import { RefreshIcon, AdjustmentsIcon } from "@heroicons/react/solid";
import { useAtom } from "jotai";

export default function SwapComponentHeader() {
  let [isOpen, setIsOpen] = useAtom(openSettingsAtom);
  return (
    <div className="flex -mt-12">
      <div className="grow h-14 flex">
        <div className="text-lg font-semibold">Swap</div>
        {/* <div className="px-4 text-lg hover:scale-[1.08] cursor-pointer font-semibold">
          Limit
        </div>
        <div className="px-4 text-lg hover:scale-[1.08] cursor-pointer font-semibold">
          P2P
        </div> */}
      </div>
      <div className="flex-none w-14 h-14">
        <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.2] px-4 ">
          <RefreshIcon
            className="h-6 w-6"
            strokeWidth={2}
            viewBox="0 0 24 24"
          />
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.2] -mr-8"
        >
          <AdjustmentsIcon
            className="h-6 w-6"
            viewBox="0 0 24 24"
            strokeWidth={2}
          />
        </button>
      </div>
    </div>
  );
}
