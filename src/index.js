import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import "./index.css";
import App from "./App";
import Hero from "./components/Hero";
import Login from "./auth/Login";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <Outlet />
    </RouterProvider>
  </React.StrictMode>
);
