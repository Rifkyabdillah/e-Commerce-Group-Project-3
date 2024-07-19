import { getDetailProduct} from "@/utils/apis/products";
import { IProducts } from "@/utils/types/products";
import { useEffect, useState } from "react";

export default function DetailProducts() {
  const [data, setData] = useState<IProducts>({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await getDetailProduct(1);
      setData(response.data); // Pastikan response.data sesuai dengan tipe IProducts[]
    } catch (error) {
      alert((error as Error).message);
    }
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              {/* photo barang */}
              <img className="w-full h-full object-cover" src={data.images} alt="Product Image" />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
              </div>
              <div className="w-1/2 px-2">
                <a href="/">
                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Return Home</button>
                </a>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            {/* nama product */}
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{data.product_name}</h2>
            {/* descripsi */}
            <div className="flex mb-4">
              <div className="mr-4">
                {/* harga */}
                <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                <span className="text-gray-600 dark:text-gray-300">Rp. {data.price}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Stock:</span>
                {/* stok */}
                <span className="text-gray-600 dark:text-gray-300">{data.stock}</span>
              </div>
            </div>
            <div className="mb-4">
              {/* lokasi */}
              <span className="font-bold text-gray-700 dark:text-gray-300">City:</span>
              <div className="flex items-center mt-2">
                <h2>{data.city}</h2>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Seller:</span>
              <div className="flex items-center mt-2">
                {/* seller di sini */}
                {data.seller}
              </div>
            </div>
            <div>
              {/* descripsi */}
              <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
