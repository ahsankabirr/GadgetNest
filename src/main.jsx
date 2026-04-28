import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Router from "./components/Router/Router.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Header from "./components/Header/Header.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import Cart from "./components/Cart/Cart.jsx";
import WaitList from "./components/WaitList/WaitList.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router />,
    children: [
      {
        path: "/",
        element: <Header />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("/gadgets.JSON"),
      },
      {
        path: "/ProductDetails/:ProductId",
        element: <ProductDetails />,
        loader: () => fetch("/gadgets.JSON"),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: () => fetch("/gadgets.JSON"),
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/waitlist",
        element: <WaitList />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
);
