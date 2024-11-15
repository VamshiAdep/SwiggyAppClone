import React from "react";
import ItemLists from "./ListOfCategories/ItemLists";
import "./RestaturantCategories.css";

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {

const handleClick=()=>{
setShowIndex()
}
  if (!data)
    return (
      <div>
        <p className="text-lg text-gray-600">No Restaurant Menu available</p>
      </div>
    );

  return (
    <div>
      <div className="mainContainerList">
        <div className="categoriesContainerList" onClick={handleClick}>
          <h3>
            {data.title} ({data.itemCards.length}){" "}
          </h3>

          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>
        <div>
          {showItems && <ItemLists items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
