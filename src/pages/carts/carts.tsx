import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Navbar from "@/components/navbar";
import CartsTotal from "./cart-total";
import TableCarts from "./table-carts";

export default function Carts() {
  return (
    <>
      <Layout>
        <Navbar />
        <div className="lg:px-10 md:px-6 sm:px-5">
          <Header />
          <div className="grid justify-center ">
            <div className="bg-slate-100 rounded-xl">
              <div className="flex items-center justify-between p-2 md:p-2 ml-7 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-400 dark:text-white">Keranjang Belanja</h3>
              </div>
              <div className="relative overflow-x-auto w-full ">
                <div className="flex justify-end gap-3 pb-2">
                  <div className="p-9">
                    <TableCarts />
                    <div className="flex justify-between my-6">
                      <div>
                        <Button variant={"perbarucart"}>
                          <Link to="/">Tambah Barang</Link>
                        </Button>
                      </div>
                    </div>
                    <CartsTotal />
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
