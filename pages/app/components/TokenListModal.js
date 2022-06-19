import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { atom, useAtom } from "jotai";
import Card from "../templates/Card";
import Image from "next/image";
const tokens = require("../../api/tokens/mainnet.json");


export const openTokensAtom = atom(false);

function SearchToken() {
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <div className="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
          
          <input
            type="search"
            className="h-12 form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700  focus:border-blue-600 focus:outline-none"
            placeholder="Search by name or paste address"
            aria-label="Search"
            aria-describedby="button-addon2"
          >

          </input>
          <span
            className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
            id="basic-addon2"
          ></span>
        </div>
      </div>
    </div>
  );
}

function PinnedTokens() {
  return (
    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-4 -mt-8">
      {tokens.slice(0, 5).map((item) => (
        <a
          key={item.address}
          //href={item.href}
          className="border-2 -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
        >
          <div className="flex h-10 w-5 shrink-0 items-center justify-center text-white sm:h-7 sm:w-5">
            <Image
              src={item.logoURI}
              alt={item.address}
              width={24}
              height={24}
            />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">{item.symbol}</p>
            {/* <p className="text-sm text-gray-500">{item.description}</p> */}
          </div>
        </a>
      ))}
    </div>
  );
}

function TokenList() {
  return (
    <>
      {tokens.slice(0, 7).map((item) => (
        <a
          key={item.address}
          //href={item.href}
          className=" flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
            <Image
              src={item.logoURI}
              alt={item.address}
              width={48}
              height={48}
            />
          </div>
          <div className="ml-4 w-96 text-left">
            <p className="text-sm font-medium text-gray-900">{item.name}</p>
            <p className="text-sm text-gray-500">{item.symbol}</p>
          </div>
        </a>
      ))}
    </>
  );
}

export default function MyModal() {
  let [isOpen, setIsOpen] = useAtom(openTokensAtom);

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
                      className="text-xl font-medium mb-5 leading-6 text-gray-900 -mt-16"
                    >
                      Select a token
                    </Dialog.Title>
                    <SearchToken />       
                    <PinnedTokens />
                    <div className="h-0.5  bg-gray-300 mb-2"></div>
                    <div className="flex overflow-hidden rounded-l  ring-1 ring-black cursor-pointer ring-opacity-5">
                      <div className="relative gap-8 bg-white p-7 lg:grid-cols-2">
                        <TokenList />
                      </div>
                    </div>
                    {/* <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
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

// export default function Example() {
//   return (
//     <div className="fixed top-16 w-full max-w-sm px-4">
//       <Popover className="relative">
//         {({ open }) => (
//           <>
//             <Popover.Button
//               className={`
//                 ${open ? '' : 'text-opacity-90'}
//                 group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
//             >
//               <span>Solutions</span>
//               <ChevronDownIcon
//                 className={`${open ? '' : 'text-opacity-70'}
//                   ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
//                 aria-hidden="true"
//               />
//             </Popover.Button>
//             <Transition
//               as={Fragment}
//               enter="transition ease-out duration-200"
//               enterFrom="opacity-0 translate-y-1"
//               enterTo="opacity-100 translate-y-0"
//               leave="transition ease-in duration-150"
//               leaveFrom="opacity-100 translate-y-0"
//               leaveTo="opacity-0 translate-y-1"
//             >
//               <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">

//               </Popover.Panel>
//             </Transition>
//           </>
//         )}
//       </Popover>
//     </div>
//   )
// }

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
