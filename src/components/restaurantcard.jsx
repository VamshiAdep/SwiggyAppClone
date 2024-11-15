import React from "react";
import "../Stylecomponents/restaurantcard.css";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props; // instead of passing normal prop we can mention destructre on a fly where we access the direct props

  const {
    cloudinaryImageId = "",
    name = "Default Name",
    cuisines = [],
    avgRating = "N/A",
    costForTwo = 0,
    deliveryTime = "N/A",
  } = resData?.data || {};

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};



export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="rescard promoted-card">
        <span className="promoted-label">Promoted</span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};


export default RestaurantCard;
