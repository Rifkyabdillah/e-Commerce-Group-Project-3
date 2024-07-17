import React, { useEffect, useRef } from "react";
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command";
import { CiInboxIn } from "react-icons/ci";
import { IoLogInOutline } from "react-icons/io5";
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
      <Command ref={commandRef} className="rounded-lg border shadow-md bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80  transition-opacity duration-200">
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandSeparator />
          <CommandGroup>
            <CommandItem className="hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200">
              <User className="mr-2 h-4 w-4" />
              <span>Manage My Account</span>
              <CommandShortcut></CommandShortcut>
            </CommandItem>
            <CommandItem className="hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200">
              <CiInboxIn className="mr-2 h-4 w-4" />
              <span>My Product</span>
              <CommandShortcut></CommandShortcut>
            </CommandItem>
            <CommandItem className="hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200">
              <IoLogInOutline className="mr-2 h-4 w-4" />
              <span>Logout</span>
              <CommandShortcut></CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}
