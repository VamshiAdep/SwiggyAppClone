import React from "react";
import { CDN_URL } from '../../utils/constants';
import "./ItemList.css";

const ItemLists = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="itemContainer">
          <div className="listOfData">
            <div className="ItemsTitle">
              <span>{item?.card?.info?.name}</span>
              <span>
                {" "}
                 ₹{" "}
                {item?.card?.info?.price
                  ? (item.card.info.price / 100).toFixed(2) // Format to 2 decimal places
                  : (item.card.info.defaultPrice / 100).toFixed(2)}
              </span>
            </div>
            <p className="description">
              {item?.card?.info?.description || "No description available."}
            </p>
          </div>
          <div className="img">
            {item?.card?.info?.imageId && (
              <img
                src={`${CDN_URL}${item.card.info.imageId}`}
                alt={item.card.info.name}
              />
            )}
            <button className="addButton">Add </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemLists;
