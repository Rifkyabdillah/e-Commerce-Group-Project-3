import Layout from "@/components/Layout";
import Navbar from "@/components/navbar";

export default function Inputdatastok() {
  return (
    <>
      <Layout>
        <Navbar />
        <div className="lg:px-10 md:px-6 sm:px-5 min-h-screen flex items-center justify-center">
          <div className="bg-slate-500 w-[500px] rounded-lg p-6">
            <div className="flex justify-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Formulir Tambah Sabun Baru</h3>
            </div>
            <form className="space-y-6">
              <div className="mb-5">
                <label htmlFor="namaproduct" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nama Product
                </label>
                <select
                  id="namaproduct"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option value="">Pilih Product</option>
                  <option value="sabunA">Sabun A</option>
                  <option value="sabunB">Sabun B</option>
                  <option value="sabunC">Sabun C</option>
                </select>
              </div>

              <div className="mb-5">
                <label htmlFor="stockproduct" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Stok Product
                </label>
                <input
                  type="number"
                  id="stokproduct"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}
