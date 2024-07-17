import { Comboboxstok } from "@/components/combobox";
import Header from "../home/header";
import Layout from "@/components/Layout";
import Navbar from "@/components/navbar";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Stok() {
  return (
    <>
      <Layout>
        <Navbar />
        <div className="lg:px-10 md:px-6 sm:px-5 mb-10">
          <Header />
          <div className="grid justify-center">
            <div className="relative overflow-x-auto w-[900px]">
              <div className="flex justify-end gap-3 pb-2">
                <a href="/formproduct">
                  <Button className="bg-[#3699FF] text-white px-9 hover:bg-[#22578d] active:bg-[#1d4369]">Sabun Baru</Button>
                </a>
                <a href="/formproducttambah">
                  <Button className="bg-[#4EF65F] text-white hover:bg-[#23832d] active:bg-[#1b6222]">Tambah Amount</Button>
                </a>
              </div>
              <div className="p-9 bg-slate-50 rounded-xl =shadow-lg shadow-slate-300">
                <div className="pt-2 flex justify-between items-center py-4">
                  <h2 className="font-Poppine text-[20px] font-semibold">Semua data product</h2>
                  <div className="flex gap-2">
                    <div>
                      <Input type="search" placeholder="search" />
                    </div>
                    <div>
                      <Comboboxstok />
                    </div>
                  </div>
                </div>
                <div className="bg-slate-400 rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:bg-gray-900 dark:text-gray-800 rounded-full">
                      <tr className="text-gray-200">
                        <th scope="col" className="px-6 py-3 text-center">
                          Nama Product
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                          Stok
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                          Descripsi
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                          Image Profile
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-black font-Poppine">
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">sabunx</td>
                        <td className="px-6 py-4">7</td>
                        <td className="px-6 py-4">lorem</td>
                        <td className="px-6 py-4">3.00</td>
                        <td className="px-6 py-4">
                          <img src="" alt="photo" />
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-white bg-[#8A711B] hover:bg-[#c5a437] px-8 mr-2 py-1 rounded-full">edit</button>
                          <button className="text-white bg-[#a42121] hover:bg-[#e75656] px-6 py-1 rounded-full">hapus</button>
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">sabunx</td>
                        <td className="px-6 py-4">7</td>
                        <td className="px-6 py-4">lorem</td>
                        <td className="px-6 py-4">3.00</td>
                        <td className="px-6 py-4">
                          <img src="" alt="photo" />
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-white bg-[#8A711B] hover:bg-[#c5a437] px-8 mr-2 py-1 rounded-full">edit</button>
                          <button className="text-white bg-[#a42121] hover:bg-[#e75656] px-6 py-1 rounded-full">hapus</button>
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">sabunx</td>
                        <td className="px-6 py-4">7</td>
                        <td className="px-6 py-4">lorem</td>
                        <td className="px-6 py-4">3.00</td>
                        <td className="px-6 py-4">
                          <img src="" alt="photo" />
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-white bg-[#8A711B] hover:bg-[#c5a437] px-8 mr-2 py-1 rounded-full">edit</button>
                          <button className="text-white bg-[#a42121] hover:bg-[#e75656] px-6 py-1 rounded-full">hapus</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
