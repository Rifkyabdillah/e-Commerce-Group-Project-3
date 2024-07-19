import { Button } from "@/components/ui/button";

export default function CartsTotal() {
  return (
    <>
      <div className="">
        <div className=" w-full max-w-md p-4 bg-white border border-gray-800 rounded-lg shadow-2xl sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2 ">
            <h5 className="text-xl font-normal leading-none text-gray-900 dark:text-white">Cart Total</h5>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-400 dark:divide-gray-700">
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-1 min-w-0 ">
                    <p className="text-sm font-medium text-gray-700 truncate dark:text-white">SubTotal</p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">Rp. 320</div>
                </div>
              </li>
              <li className="py-3 sm:pt-10">
                <div className="flex items-center ">
                  <div className="flex-1 min-w-0 ">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white"></p>
                    <p className="text-sm text-gray-800 truncate dark:text-gray-400">Total</p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">Rp. 3467</div>
                </div>
                <div className="pt-3">
                  <Button className="bg-[#FF6F00] px-9 active:bg-[#58493e] hover:bg-[#995622] ">Proses Pembayaran</Button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
