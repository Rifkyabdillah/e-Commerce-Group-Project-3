import Header from "@/components/header";
import Layout from "@/components/Layout";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Stok from "../../components/tabel-stok";

export default function TableProducts() {
  return (
    <Layout>
      <Navbar />
      <div className="lg:px-10 md:px-6 sm:px-5 mb-10">
        <Header />
        <div className="grid justify-center">
          <div className="relative overflow-x-auto w-[900px]">
            <div className="flex justify-end gap-3 pb-2">
              <Link to="/form-product">
                <Button className="bg-[#3699FF] text-white px-9 hover:bg-[#22578d] active:bg-[#1d4369]">Sabun Baru</Button>
              </Link>
              <Link to="/form-product-tambah">
                <Button className="bg-[#4EF65F] text-white hover:bg-[#23832d] active:bg-[#1b6222]">Tambah Amount</Button>
              </Link>
            </div>
            <Stok>
              <Stok.Tbody />
              <Stok.Thead />
            </Stok>
          </div>
        </div>
      </div>
    </Layout>
  );
}
