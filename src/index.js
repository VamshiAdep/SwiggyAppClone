import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Router";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={appRouter} />
  </>
);
