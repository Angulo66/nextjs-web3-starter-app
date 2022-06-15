import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { atom, useAtom } from "jotai";
import Card from "../templates/Card";
import { XIcon } from "@heroicons/react/solid";

export const openConnectAtom = atom(false);
function TextOne() {
  return (
    <div className="text-left">
      <div className="text-base flex   items-center w-auto">
        <div className="mr-2 rounded-full bg-gray-200 h-6 w-6 text-center text-base text-gray-400">1</div> Accept&nbsp;
        <span className="hover:text-blue-600 hover:underline cursor-pointer text-blue-400 hover:outline-1 w-auto">Terms of Service</span>
        <span className="w-auto">&nbsp; and Accept&nbsp;</span>
        <span className="hover:text-blue-600 hover:underline cursor-pointer text-blue-400 hover:outline-1  w-auto">Privacy Policy</span>
      </div>
      <div className="flex items-center ml-8 mt-4">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
        />
        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 cursor-pointer">
          I read and accept
        </label>
      </div>
    </div>
  );
}
function TextTwo() {
  return (
    <div className="text-left">
      <div className="text-base  flex  items-center">
        <div className="mr-2 rounded-full bg-gray-200 h-6 w-6 text-center text-base text-gray-400">2</div> Choose network
      </div>
      <div className="ml-8 mt-4 grid grid-flow-row grid-cols-4 gap-4 ">
        <div className="hover:bg-gray-100 cursor-pointer justify-self-center p-3 rounded-md">
          <img className="max-w-4xl"
            src="https://app.1inch.io/assets/images/network-logos/ethereum.svg"
            alt={"sad"}
            width={50}
            height={50}
          />
          <div className=" -mt-3 ml-8 ">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#23c68b">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="hover:bg-gray-100 cursor-pointer justify-self-center p-3 rounded-md">
          <img className="max-w-4xl"
            src="https://app.1inch.io/assets/images/network-logos/ethereum.svg"
            alt={"sad"}
            width={50}
            height={50}
          />
        </div>
        <div className="hover:bg-gray-100 cursor-pointer justify-self-center p-3 rounded-md">
          <img className="max-w-4xl"
            src="https://app.1inch.io/assets/images/network-logos/ethereum.svg"
            alt={"sad"}
            width={50}
            height={50}
          />
        </div>
        <div className="hover:bg-gray-100 cursor-pointer justify-self-center p-3 rounded-md">
          <img className="max-w-4xl"
            src="https://app.1inch.io/assets/images/network-logos/ethereum.svg"
            alt={"sad"}
            width={50}
            height={50}
          />
        </div>
        <div className="hover:bg-gray-100 cursor-pointer justify-self-center p-3 rounded-md">
          <img className="max-w-4xl"
            src="https://app.1inch.io/assets/images/network-logos/ethereum.svg"
            alt={"sad"}
            width={50}
            height={50}
          />
        </div>
        <div className="hover:bg-gray-100 cursor-pointer justify-self-center p-3 rounded-md">
          <img className="max-w-4xl"
            src="https://app.1inch.io/assets/images/network-logos/ethereum.svg"
            alt={"sad"}
            width={50}
            height={50}
          />
        </div>
        <div className="hover:bg-gray-100 cursor-pointer justify-self-center p-3 rounded-md">
          <img className="max-w-4xl"
            src="https://app.1inch.io/assets/images/network-logos/ethereum.svg"
            alt={"sad"}
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}
function TextThree() {
  return (
    <div className="text-left  ">
      <div className="text-base  flex  items-center">
        <div className="mr-2 rounded-full bg-gray-200 h-6 w-6 text-center text-base text-gray-400">3</div> Choose network
      </div>
      <div className="ml-8 mt-4 grid grid-flow-row grid-cols-4 gap-4 ">
        <div className="hover:bg-gray-100 cursor-pointer justify-self-center p-3 rounded-md">
          <img className="max-w-4xl"
            src="https://app.1inch.io/assets/images/wallet-logos/metamask.svg"
            alt={"sad"}
            width={50}
            height={50}
          />
        </div>
        <div className="hover:bg-gray-100 cursor-pointer justify-self-center p-3 rounded-md">
          <img className="max-w-4xl"
            src="https://app.1inch.io/assets/images/wallet-logos/metamask.svg"
            alt={"sad"}
            width={50}
            height={50}
          />
        </div>
        <div className="hover:bg-gray-100 cursor-pointer justify-self-center p-3 rounded-md">
          <img className="max-w-4xl"
            src="https://app.1inch.io/assets/images/wallet-logos/metamask.svg"
            alt={"sad"}
            width={50}
            height={50}
          />
        </div>
        <div className="hover:bg-gray-100 cursor-pointer justify-self-center p-3 rounded-md">
          <img className="max-w-4xl"
            src="https://app.1inch.io/assets/images/wallet-logos/metamask.svg"
            alt={"sad"}
            width={50}
            height={50}
          />
        </div>
        <div className="hover:bg-gray-100 cursor-pointer justify-self-center p-3 rounded-md">
          <img className="max-w-4xl"
            src="https://app.1inch.io/assets/images/wallet-logos/metamask.svg"
            alt={"sad"}
            width={50}
            height={50}
          />
        </div>
        <div className="hover:bg-gray-100 cursor-pointer justify-self-center p-3 rounded-md">
          <img className="max-w-4xl"
            src="https://app.1inch.io/assets/images/wallet-logos/metamask.svg"
            alt={"sad"}
            width={50}
            height={50}
          />
        </div>
        <div className="hover:bg-gray-100 cursor-pointer justify-self-center p-3 rounded-md">
          <img className="max-w-4xl"
            src="https://app.1inch.io/assets/images/wallet-logos/metamask.svg"
            alt={"sad"}
            width={50}
            height={50}
          />
        </div>
        <div className="hover:bg-gray-100 cursor-pointer justify-self-center p-3 rounded-md">
          <img className="max-w-4xl"
            src="https://app.1inch.io/assets/images/wallet-logos/metamask.svg"
            alt={"sad"}
            width={50}
            height={50}
          />
        </div>
        <div className="hover:bg-gray-100 cursor-pointer justify-self-center p-3 rounded-md">
          <img className="max-w-4xl"
            src="https://app.1inch.io/assets/images/wallet-logos/metamask.svg"
            alt={"sad"}
            width={50}
            height={50}
          />
        </div>
        <div className="hover:bg-gray-100 cursor-pointer justify-self-center p-3 rounded-md">
          <img className="max-w-4xl"
            src="https://app.1inch.io/assets/images/wallet-logos/metamask.svg"
            alt={"sad"}
            width={50}
            height={50}
          />
        </div>
        <div className="hover:bg-gray-100 cursor-pointer justify-self-center p-3 rounded-md">
          <img className="max-w-4xl"
            src="https://app.1inch.io/assets/images/wallet-logos/metamask.svg"
            alt={"sad"}
            width={50}
            height={50}
          />
        </div>
        <div className="hover:bg-gray-100 cursor-pointer justify-self-center p-3 rounded-md">
          <img className="max-w-4xl"
            src="https://app.1inch.io/assets/images/wallet-logos/metamask.svg"
            alt={"sad"}
            width={50}
            height={50}
          />
        </div>
        <div className="hover:bg-gray-100 cursor-pointer justify-self-center p-3 rounded-md">
          <img className="max-w-4xl"
            src="https://app.1inch.io/assets/images/wallet-logos/metamask.svg"
            alt={"sad"}
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}
export default function ConnectWalletModal() {
  let [isOpen, setIsOpen] = useAtom(openConnectAtom);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="">
                  <Card>
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-medium mb-5 leading-6 text-gray-900 -mt-16 flex"
                    >
                      <div className="flex grow"> Connect wallet</div>
                      <div className="flex-none ">
                        <XIcon
                          onClick={() => closeModal()}
                          className="h-6 w-6 hover:cursor-pointer -mr-10"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        />
                      </div>
                    </Dialog.Title>
                    <TextOne />
                    <div className="mt-2"></div>
                    <TextTwo />
                    <div className="mt-2"></div>
                    <TextThree />
                  </Card>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

