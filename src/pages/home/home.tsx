import * as React from "react";

import Layout from "@/components/Layout";
import Navbar from "@/components/navbar";
import Product from "@/pages/stok/product";
import Carausel from "@/components/carausel";

import Purchaser from "../purchaser/Purchaser";
import Header from "./header";

export default function Home() {
  return (
    <>
      <Layout>
        <Navbar />
        <div className="container">
          <div className="lg:px-10 md:px-6 sm:px-5">
            <Header />
            <Carausel />
            <div>
              <div className="pt-8 flex justify-between py-6">
                <h2 className="font-Roboto text-[20px] font-semibold">Affordable Products</h2>
              </div>
              <div className="flex justify-center items-center min-h-screen">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
                  <Product />
                  <Product />
                  <Product />
                  <Product />
                  <Product />
                  <Product />
                  <Product />
                  <Product />
                  <Product />
                  <Product />
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center min-h-screen">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
                  <Purchaser />
                  <Purchaser />
                  <Purchaser />
                  <Purchaser />
                  <Purchaser />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
