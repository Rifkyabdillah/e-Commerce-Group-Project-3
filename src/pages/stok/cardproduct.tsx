import { Button } from "../../components/ui/button";

export default function Product() {
  return (
    <>
      <div className="relative m-2 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <a className="relative mx-3 mt-3 flex  overflow-hidden rounded-xl" href="#">
          <img className="object-cover" src="https://images.pexels.com/photos/6810863/pexels-photo-6810863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product image" />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-sm font-bold text-slate-900 lg:text-xl md:text-lg sm:text-lg tracking-tight  ">Sabun x</h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <span className="text-sm font-bold text-slate-900 lg:text-xl md:text-lg sm:text-lg">Rp 40.000</span>{" "}
            <span>
              <Button className="bg-green-900 sm:p-6 sm-">Detail</Button>
            </span>
          </div>
          <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
}
