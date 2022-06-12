/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center ">
        <div className='bg-white  py-20 rounded-3xl border-2 border-gray-100  px-10'>
          <div className='flex -mt-12'>
            <div className="grow h-14 flex">
              <div className='text-lg hover:scale-[1.08] cursor-pointer font-semibold'>Swap</div>
              <div className='px-4 text-lg hover:scale-[1.08] cursor-pointer font-semibold'>Limit</div>
              <div className='px-4 text-lg hover:scale-[1.08] cursor-pointer font-semibold'>P2P</div>
            </div>
            <div className="flex-none w-14 h-14">
              <button
                className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.2] px-4 '>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <button
                className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.2] -mr-8'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </button>
            </div>
          </div>
          <div className='bg-gray-100  rounded-2xl mt-1'>
            <h1 className='text-xs text-gray-400 hover:text-slate-800 cursor-pointer pl-2 pt-2'>You sell</h1>
            <div className='flex mt-4  mr-6  pl-5'>
              <button className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform rounded-xl  font-semibold text-lg border-2 border-gray-100 hover:bg-gray-50'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335" />
                  <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853" />
                  <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2" />
                  <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05" />
                </svg>
                <span>DAI</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="gray" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className='text-lg pl-44'>345345345</div>
            </div>
            <div className='flex mt-5 container mx-auto px-4 '>
              <div className='text-xs text-gray-400 grow h-14 flex hover:text-slate-800 cursor-pointer '>Dai Stablecoin</div>
              <div className='text-xs text-gray-400 flex-none    h-14 '>~$345,688,204</div>
            </div>
          </div>
          <div className='flex justify-center rounded-r-sm'>
            <button className='rounded-full bg-white border-2 border-gray-200 cursor-pointer -mb-3 hover:scale-[1.01]'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="blue" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
          <div className='rounded-2xl mt-1 border-2'>
            <h1 className='text-base text-gray-400 hover:text-slate-800 cursor-pointer pl-4 pt-2'>You buy</h1>
            <div className='flex mt-5  mr-6  pl-5'>
              <button className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform rounded-xl  font-semibold text-lg border-2 border-gray-100 hover:bg-gray-50'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335" />
                  <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853" />
                  <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2" />
                  <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05" />
                </svg>
                <span>DAI</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="gray" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className='mt-5 container mx-auto px-4 '>
              <div className='border-2 rounded-2xl h-25 mb-2 border-sky-600' >
                <div className='bg-green-600 text-white text-xs pl-2 rounded-tl-lg rounded-br-lg rounded-tr-lg w-32 -mt-2 -ml-0.5 p-1' >Save $106,190,229.10</div>
                <div className='flex mt-2 container mx-auto px-4 '>
                  <div className='text-lg  grow h-14 flex hover:text-slate-800 cursor-pointer '>1inch</div>
                  <div className='text-lg  flex-none    h-14 cursor-pointer'>188 033.3911058</div>
                </div>
                <div className='container  px-4 -mb-5 -mt-5'>
                  <div className='text-xs text-gray-400 grow h-14 flex cursor-pointer '>Tx cost 0.01263 0.012 Ξ (~...  ~$182,701,953 <span className='text-red-600'>(-47.25%) </span> </div>
                </div>
              </div>
              <div className='border-2 rounded-2xl h-25 mb-2'>
                <div className='flex mt-2 container mx-auto px-4 hover:bg-gray-50 '>
                  <div className='text-lg  grow h-14 flex hover:text-slate-800 cursor-pointer active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] '>Uniswap
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="gray" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className='text-lg  flex-none    h-14 cursor-pointer'>188 033.3911058</div>
                </div>
                <div className='container  px-4 -mb-5 -mt-5'>
                  <div className='text-xs text-gray-400 grow h-14 flex  cursor-pointer '>Tx cost 0.01263 0.012 Ξ (~...  ~$182,701,953 <span className='text-red-600'>(-47.25%) </span> </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-8 flex flex-col gap-y-4'>
            <button className='flex items-center justify-center gap-2 aactive:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-blue-200 rounded-xl text-blue-500 font-semibold text-lg hover:bg-blue-100'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg> Connect wallet</button>
          </div>
        </div>
      </div>
    </div>
  )
}
