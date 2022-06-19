/* This example requires Tailwind CSS v2.0+ */
import { Popover } from "@headlessui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function SwapHeader() {
  return (
    <Popover className="relative backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div> */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <ConnectButton />
            </a>
            {/* <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white"
            >
              Options
            </a> */}
          </div>
        </div>
      </div>
    </Popover>
  );
}
