import Layout from "@/components/Layout";
import Navbar from "@/components/navbar";
import Header from "../../components/header";
import { DataTableHistoriOrder } from "./table-histori-order";

export default function History() {
  return (
    <>
      <Layout>
        <Navbar />
        <div className="lg:px-10 md:px-6 sm:px-5">
          <Header />
          <div className="grid justify-center ">
            <div className="bg-slate-100 rounded-xl max-w-3xl">
              <div className="flex items-center justify-between p-2 md:p-2 ml-7 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-400 dark:text-white">Historty Order</h3>
              </div>
              <DataTableHistoriOrder />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
