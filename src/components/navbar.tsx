import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { ButtemCommant } from "./command";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isCommandDemoOpen, setCommandDemoOpen] = useState(false);

  // Function to open CommandDemo
  const openCommandDemo = () => setCommandDemoOpen(true);
  const closeCommandDemo = () => setCommandDemoOpen(false);

  return (
    <header className="w-full sticky top-0 bg-opacity-30 dark:bg-black/90 z-50 ">
      <nav className="bg-[#EEEEEE] dark:bg-black/90 bg-opacity-30 px-4">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="font-Jomhuria text-[40px] font-medium text-[#FF6F00]">Soap Shop</span>
          </Link>
          <div className="flex md:order-2 items-center gap-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block lg:w-96 md:w-52 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <div className="flex gap-4">
              <div>
                <MdAccountCircle size={30} onClick={openCommandDemo} aria-label="Open Command Menu" />
                {isCommandDemoOpen && <ButtemCommant onClose={closeCommandDemo} />}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
