import React, { useEffect, useRef } from "react";
import { User } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";
interface ButtemCommantProps {
  onClose: () => void;
}

export function ButtemCommant({ onClose }: ButtemCommantProps) {
  const commandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (commandRef.current && !commandRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed top-16 right-4 z-50">
      <Command ref={commandRef} className="rounded-lg border shadow-md bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 transition-opacity duration-200">
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandSeparator />
          <CommandGroup>
            <a href="/akun" className="hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-colors duration-200 flex items-center p-2 rounded-md">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                Manage My Account
                <CommandShortcut className="text-gray-500 dark:text-gray-400" />
              </CommandItem>
            </a>
            <Link to="/product" className="hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-colors duration-200 flex items-center p-2 rounded-md">
              <CommandItem>
                <MdOutlineProductionQuantityLimits className="mr-2 h-4 w-4" />
                My Product
                <CommandShortcut className="text-gray-500 dark:text-gray-400" />
              </CommandItem>
            </Link>
            <a href="/login" className="hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-colors duration-200 flex items-center p-2 rounded-md">
              <CommandItem>
              <IoIosLogIn  className="mr-2 h-4 w-4" />
                Login
                <CommandShortcut className="text-gray-500 dark:text-gray-400" />
              </CommandItem>
            </a>
            <a href="" className="hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-colors duration-200 flex items-center p-2 rounded-md">
              <CommandItem>
                <IoMdLogOut className="mr-2 h-4 w-4" />
                Logout
                <CommandShortcut className="text-gray-500 dark:text-gray-400" />
              </CommandItem>
            </a>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}
