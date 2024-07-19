// AddProduct.tsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import Layout from "@/components/Layout";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { createProduct } from "@/utils/apis/products";
import productSchema, { ProductSchema } from "@/utils/types/products";

export default function AddProduct() {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = async (data: ProductSchema) => {
    setIsSubmitting(true);
    setError(null);

    try {
      console.log("Submitting data:", data); // Debugging data before API call
      await createProduct(data);
      navigate("/product"); // Redirect ke /product setelah sukses
    } catch (error: any) {
      setError(error.message); // Tampilkan pesan kesalahan jika ada
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Navbar />
      <div className="container mx-auto px-4 lg:px-10 md:px-6 sm:px-5 pt-10">
        <div>
          <a href="/product">
            <Button className="bg-[#3699FF] px-8 font-Poppine hover:bg-[#3985d2] active:bg-[#1b436b]">Return</Button>
          </a>
        </div>
        <div className="lg:px-10 md:px-6 sm:px-5 min-h-screen flex items-center justify-center">
          <div className="bg-slate-50 w-[500px] rounded-lg p-6">
            <div className="flex justify-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Formulir Tambah Sabun Baru</h3>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <label htmlFor="product_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nama Product
                </label>
                <input
                  type="text"
                  id="product_name"
                  placeholder="Nama produk"
                  {...register("product_name")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.product_name && <p className="text-red-500">{errors.product_name.message}</p>}
              </div>
              <div className="mb-5">
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  placeholder="Price"
                  {...register("price", { valueAsNumber: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.price && <p className="text-red-500">{errors.price.message}</p>}
              </div>
              <div className="mb-5">
                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  {...register("city")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.city && <p className="text-red-500">{errors.city.message}</p>}
              </div>
              <div className="mb-5">
                <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Stock Product
                </label>
                <input
                  type="number"
                  id="stock"
                  placeholder="Stock"
                  {...register("stock", { valueAsNumber: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.stock && <p className="text-red-500">{errors.stock.message}</p>}
              </div>
              <div className="mb-5">
                <label htmlFor="images" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Upload Foto
                </label>
                <input
                  type="text"
                  id="images"
                  placeholder="Image URL or Base64"
                  {...register("images")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.images && <p className="text-red-500">{errors.images.message}</p>}
              </div>
              <div className="mb-5">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Descripsi
                </label>
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Masukkan descripsi..."
                  {...register("description")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.description && <p className="text-red-500">{errors.description.message}</p>}
              </div>

              <button
                type="submit"
                className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
