import React, { useState } from "react";
import { DataTableHistoriOrder } from "./DataTableHistoriOrder";

interface ModalBasketProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalOrder({ isOpen, onClose }: ModalBasketProps) {
  if (!isOpen) return null; // Tidak merender modal jika isOpen adalah false

  return (
    <div id="default-modal" aria-hidden="true" className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center">
      <div className="relative p-4 w-full max-w-6xl max-h-full ">
        <div className="relative bg-white  shadow  dark:bg-gray-700 rounded-3xl">
          <div className="flex items-center justify-between ml-4  p-2 md:p-2  border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-400 dark:text-white">History Order</h3>
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

          <div>
            <DataTableHistoriOrder />
          </div>

          <div className="flex items-center p-3 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"></div>
        </div>
      </div>
    </div>
  );
}
export default function ButtomMudalOrder() {
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
      <button type="button" onClick={openModal} className={`py-2 px-6 rounded-lg hover:text-white transition-colors duration-300 ${activeButton === "basket" ? "bg-[#FF6F00] text-white" : "hover:bg-[#FF6F00]"}`}>
        History Order
      </button>
      <ModalOrder isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
