import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Body from "./components/Bodyy";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantsMenu from "./menus/RestaurantMenu";
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contactus", 
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Body />,
      },{
        path:"/restaurant/:resId",
        element:<RestaurantsMenu/>,
      },
    ],
    errorElement: <Error />,
  },
]);
