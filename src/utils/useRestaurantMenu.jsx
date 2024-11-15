// custom hook for RestaurantMenu where we get each restaurant menu data 

import { useEffect, useState } from "react";

import { MENU_API } from "./constants";

export const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  console.log(resInfo);
  

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setresInfo(json.data);
  };
  return resInfo;
};
