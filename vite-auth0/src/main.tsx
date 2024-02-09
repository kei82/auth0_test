import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";

// route
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        lazy: async () => {
          const page = await import("./pages/Home");
          return { Component: page.default };
        },
        errorElement: <p>errorElement</p>,
      },
      {
        path: "/foo",
        lazy: async () => {
          const page = await import("./pages/Foo");
          return { Component: page.default };
        },
        errorElement: <p>errorElement</p>,
      },
      {
        path: "/bar",
        lazy: async () => {
          const page = await import("./pages/Bar");
          return { Component: page.default, loader: page.loader };
        },
        errorElement: <p>errorElement</p>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
