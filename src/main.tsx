import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./pages/purchaser/Purchaser.tsx";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home.tsx";
import Purchaser from "./pages/purchaser/purchaser.tsx";

import ErrorPage from "./pages/not-found.tsx";
import Detailbasketproduct from "./pages/history/detail-product.tsx";
import Editproduct from "./pages/products/edit-products.tsx";
import Carts from "./pages/carts/carts.tsx";
import History from "./pages/history/history.tsx";
import Product from "./pages/products/product.tsx";
import TableProducts from "./pages/products/table-products.tsx";
import AddProductAmount from "./pages/products/add-products-amount.tsx";
import Register from "./pages/auth/register.tsx";
import Login from "./pages/auth/login.tsx";
import DetailProducts from "./pages/products/detail-produts.tsx";
import AddProduct from "./pages/products/input-data-produts.tsx";
import Akun from "./pages/users/akun.tsx";

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/purchaser",
    element: <Purchaser />,
  },
  {
    path: "/product",
    element: <TableProducts />,
  },
  {
    path: "/form-product",
    element: <AddProduct />,
  },
  {
    path: "/form-product-tambah",
    element: <AddProductAmount />,
  },
  {
    path: "/detail",
    element: <Detailbasketproduct />,
  },
  {
    path: "/edit-product",
    element: <Editproduct />,
  },
  {
    path: "/carts",
    element: <Carts />,
  },
  {
    path: "/histori-order",
    element: <History />,
  },
  {
    path: "/barang",
    element: <Product />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/detail-product",
    element: <DetailProducts />,
  },
  {
    path: "/akun",
    element: <Akun />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
