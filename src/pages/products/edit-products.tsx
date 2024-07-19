import Layout from "@/components/Layout";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Editproduct() {
  return (
    <>
      <Layout>
        <Navbar />
        <div className="container mx-auto px-4 lg:px-10 md:px-6 sm:px-5 pt-10">
          <div>
            <a href=" /product">
              <Button className="bg-[#3699FF] px-8 font-Poppine hover:bg-[#3985d2] active:bg-[#1b436b]">Return</Button>
            </a>
          </div>
          <div className="lg:px-10 md:px-6 sm:px-5 min-h-screen flex items-center justify-center">
            <div className="bg-slate-50 w-[500px] rounded-lg p-6">
              <div className="flex justify-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Formulir edit Sabun</h3>
              </div>
              <form className="space-y-6">
                <div className="mb-5">
                  <label htmlFor="namaproduct" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nama Product
                  </label>
                  <input
                    type="text"
                    id="namaproduct"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="nama product"
                    required
                  />
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
                <div className="mb-5">
                  <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    city
                  </label>
                  <input
                    type="city"
                    id="city"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="city"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="uploadFoto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Upload Foto
                  </label>
                  <input
                    type="file"
                    id="uploadFoto"
                    accept="image/*" // Hanya menerima file gambar
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    price
                  </label>
                  <input
                    type="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="price"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="descripsi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Descripsi
                  </label>
                  <textarea
                    id="descripsi"
                    rows={4} // Atur jumlah baris default, bisa diubah sesuai kebutuhan
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan descripsi..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
