import { Comboboxstok } from "@/components/combobox";
import Header from "../home/header";
import Layout from "@/components/Layout";
import Navbar from "@/components/navbar";
import { PaginationHistory } from "@/components/paginat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Stok() {
  return (
    <>
      <Layout>
        <Navbar />
        <div className="lg:px-10 md:px-6 sm:px-5 ">
          <Header />
          <div className="grid justify-center">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[900px] rounded-full ">
              <div className="p-9 bg-slate-100 ">
                <div className="flex justify-end gap-3">
                  <Button className="bg-[#3699FF] text-white px-9">Sabun Baru</Button>
                  <Button className="bg-[#4EF65F] text-white">Tambah Amount</Button>
                </div>
                <div className="pt-8 flex justify-between">
                  <h2 className="font-Roboto text-[20px] font-semibold">Semua data product</h2>
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
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
                    <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-900 dark:text-gray-800 rounded-full">
                      <tr className="text-gray-500">
                        <th scope="col" className="px-6 py-3">
                          Nama Product
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Stok
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Descripsi
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Image Profile
                        </th>
                        <th scope="col" className="px-6 py-3">
                          aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-black">
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
                <div className="flex justify-start mt-4">
                  <PaginationHistory />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
