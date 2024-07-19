import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Detailbasketproduct from "./detail-product";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
export const CustomButton = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button className={`w-32 py-2 rounded-full  bg-slate-100 text-black hover:bg-slate-200 focus:bg-slate-200 focus:outline-none focus:border-black ${isActive ? "border-black hover:border-gray-800 " : ""}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export function DataTableHistoriOrder() {
  return (
    <div className="font-Inter relative overflow-x-auto  shadow-md sm:rounded-lg m-5 max-w-full">
      <div className="flex justify-between gap-3 mb-4">
        <div className="flex gap-3">
          <CustomButton>All</CustomButton>
          <CustomButton>Complete</CustomButton>
          <CustomButton>Cancel</CustomButton>
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700  dark:bg-gray-900 dark:text-gray-800 rounded-full">
          <tr className="font-Outfit">
            <th scope="col" className="px-6 py-3">
              Order Id
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Total Cost
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Detail Item
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">#23344</td>
            <td className="px-6 py-4">7-30-2000</td>
            <td className="px-6 py-4">3333</td>
            <td className="px-6 py-4">3</td>
            <td className="px-6 py-4 text-[#14804A]">
              <Detailbasketproduct />
            </td>
            <td className="px-6 py-4">
              <Badge className="text-[#14804A] bg-[#E1FCEF] hover:bg-green-400">Success</Badge>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between flex-row-reverse">
        <div className="pt-2">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
