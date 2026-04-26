import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Router from "./components/Router/Router.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Header from "./components/Header/Header.jsx";

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
