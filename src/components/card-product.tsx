import React from "react";
import { Button } from "@/components/ui/button";

// Tipe untuk props Header
interface HeaderProps {
  images: string;
}

// Tipe untuk props Body
interface BodyProps {
  product_name: string;
  price: number;
  city: string;
}

const CartProduct: React.FC = (props) => {
  const { children } = props;
  return <div className="font-Inter relative m-2 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">{children}</div>;
};

// Header Component
const Header: React.FC<HeaderProps> = (props) => {
  const { images } = props;
  return (
    <a className="relative mx-3 mt-3 flex overflow-hidden rounded-xl" href="#">
      <img className="object-cover w-full h-40" src={images} alt="product image" />
    </a>
  );
};

// Body Component
const Body: React.FC<BodyProps> = (props) => {
  const { product_name, price, city } = props;
  return (
    <div className="mt-4 px-5 pb-5">
      <a href="#">
        <h5 className="text-sm  text-slate-900 lg:text-xl md:text-lg sm:text-lg tracking-tight font-semibold "> {product_name}</h5>
      </a>
      <div className="mt-1 mb-1 flex items-center justify-between font-semibold">
        <span className="text-sm   text-slate-900 lg:text-xl md:text-lg sm:text-lg">Rp. {price}</span>
      </div>
      <div className="py-2 text-[#757575] flex justify-between items-center">
        <div>
          <p> {city}</p>
          <p>200 Tersedia</p>
        </div>

        <span>
          <a href="">
            <Button className="bg-green-900  ">Detail</Button>
          </a>
          
        </span>
      </div>
      <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        Add to cart
      </a>
    </div>
  );
};

CartProduct.Header = Header;
CartProduct.Body = Body;

export default CartProduct;
