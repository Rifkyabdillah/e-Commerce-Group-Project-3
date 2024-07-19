import React, { useState } from "react";

interface ModalBasketProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Detailbasketproduct({ isOpen, onClose }: ModalBasketProps) {
  if (!isOpen) return null;
  return (
    <>
      <div id="default-modal" aria-hidden="true" className="font-Poppine fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center">
        <div className="relative p-4 w-full max-w-3xl max-h-full ">
          <div className="relative bg-white  shadow  dark:bg-gray-700 rounded-3xl">
            <div className="flex items-center justify-between p-2 md:p-2 ml-7 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-400 dark:text-white">Detail Item</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={onClose}
              >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-9">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 p-9 border-black border-solid">
                <thead className="text-xs text-gray-700  bg-gray-100 dark:bg-gray-900 dark:text-gray-800 rounded-full">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      SubTotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center">
                      <img src="https://cdn.pixabay.com/photo/2023/12/04/15/12/soap-8429699_1280.jpg" alt="photo" width={20} />
                      sabun
                    </td>
                    <td className="px-6 py-4">Rp. 2000</td>

                    <td className="px-6 py-4">3</td>
                    <td className="px-6 py-4">Rp. 9999</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center">
                      <img src="https://cdn.pixabay.com/photo/2023/12/04/15/12/soap-8429699_1280.jpg" alt="photo" width={20} />
                      sabun
                    </td>
                    <td className="px-6 py-4">Rp. 2000</td>

                    <td className="px-6 py-4">3</td>
                    <td className="px-6 py-4">Rp. 9999</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center">
                      <img src="https://cdn.pixabay.com/photo/2023/12/04/15/12/soap-8429699_1280.jpg" alt="photo" width={20} />
                      sabun
                    </td>
                    <td className="px-6 py-4">Rp. 2000</td>

                    <td className="px-6 py-4">3</td>
                    <td className="px-6 py-4">Rp. 9999</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ButtonDetailbasket() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState<"basket" | null>(null); // Track which button is active

  const openModal = () => {
    setIsOpen(true);
    setActiveButton("basket"); // Set the basket button as active
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveButton(null); // Reset the active button when modal is closed
  };

  return (
    <>
      <button type="button" onClick={openModal} className={`py-1 px-5 bg-white rounded-lg font-Roboto hover:text-white transition-colors duration-300 ${activeButton === "basket" ? "bg-white text-white" : "hover:text-[#14804A]"}`}>
        Basket
      </button>
      <Detailbasketproduct isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
