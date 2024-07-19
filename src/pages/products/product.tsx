import { useEffect, useState } from "react";
import CartProduct from "../../components/card-product";
import { IProducts } from "@/utils/types/products";
import { getProducts } from "@/utils/apis/products";

export default function Products() {
  const [data, setData] = useState<IProducts[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await getProducts();
      setData(response.data); // Pastikan response.data sesuai dengan tipe IProducts[]
    } catch (error) {
      alert((error as Error).message);
    }
  }

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-w-[747]:gap-2  grid-cols-2  items-center gap-4">
        {data.map((products) => (
          <CartProduct key={products.product_id}>
            {" "}
            {/* Tambahkan key prop */}
            <CartProduct.Header images={products.images} />
            <CartProduct.Body product_name={products.product_name} price={products.price} city={products.city} />
          </CartProduct>
        ))}
      </div>
    </>
  );
}
