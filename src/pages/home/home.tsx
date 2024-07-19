import * as React from "react";
import Layout from "@/components/Layout";
import Navbar from "@/components/navbar";
// import Product from "@/pages/product/card-product";
import Carausel from "@/components/carausel";
import Header from "../../components/header";
import Product from "../products/product";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <div className="container mx-auto px-4 lg:px-10 md:px-6 sm:px-5">
        <Header />
        <Carausel />
        <div>
          <div className="pt-8 flex justify-between py-6">
            <h2 className="font-Roboto text-[20px] font-semibold">Affordable Products</h2>
          </div>
          <div className="flex justify-center items-center">
            <Product />
          </div>
        </div>
      </div>
    </Layout>
  );
}
