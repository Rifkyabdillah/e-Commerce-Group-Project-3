import React from "react";
import { toast } from "sonner";
import { Toaster } from "./ui/sonner";

React;

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#EEEEEE] to-[#FF6F00]">{children}</div>;
      <Toaster />
    </>
  );
}
