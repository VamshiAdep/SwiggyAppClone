import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Shimmer } from "../components/Shimmer";
import { CDN_URL } from "../utils/constants";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import RestaurantCategory from './RestaurantCategories';
import "./RestaurantMenu.css";

const RestaurantsMenus = () => {
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const {
    cards = [],
  } = resInfo;

  const text = cards[0]?.card?.card?.text || "No text available";
  const tabs = cards[1]?.card?.card?.tabs || [];
  const cardInfo = cards[2]?.card?.card?.info || {};
  const offerInfo =
    cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers || [];
  // const menuTitle =
  //   cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title || "No title available";
  // const menuList =
  //   cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];
  

const categories = cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => 
      c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ) || [];
  
  console.log(categories);

  

  const renderTabs = () => {
    if (tabs.length === 0) return <p>No tabs available</p>;
    return (
      <ul className="delivery-type">
        {tabs.map((tab, index) => (
          <li key={index}>
            <strong>{tab.title || "No title available"}</strong>: {tab.title || "No ID available"}
          </li>
        ))}
      </ul>
    );
  };

  const renderCardInfo = () => (
    <div className="card-info">
      <p>Cuisines: {cardInfo.cuisines?.join(", ") || "No cuisines available"}</p>
      <p>Cost for Two: {cardInfo.costForTwoMessage || "No cost available"}</p>
      <p>Average Rating: {cardInfo.avgRatingString || "No rating available"}</p>
      <p>Total Ratings: {cardInfo.totalRatingsString || "No total ratings available"}</p>
      <p>Time For Delivery: {cardInfo.sla?.slaString || "No total time available for delivery"}</p>
    </div>
  );

 
  const renderOffers = () => {
    if (offerInfo.length === 0) return <p>No Offer Available For This Week</p>;
    return (
      <div className="mainCard">
        <h1>Deals For You</h1>
        <div className="offer-scroll-container">
          {offerInfo.map((offer, index) => (
            <div className="offerCard" key={index}>
              <div className="offermenu">
                <img
                  src={CDN_URL + offer.info?.offerLogo}
                  alt="Offer Logo"
                  className="offer-logo"
                />
                <h3>{offer.info?.header || "No Offer Available"}</h3>
              </div>
              <p>{offer.info?.description || "No Applicable Offer Available"}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="menu-container">
      <h1 className="heading">{text}</h1>

      {renderTabs()}
      {Object.keys(cardInfo).length ? renderCardInfo() : <p>No card info available</p>}
      {renderOffers()}



      <div className="text-center">
      {categories.length > 0 ? (
        categories.map((category,index) => (
          <RestaurantCategory  data={category?.card?.card} key={category?.card?.card.title}  showItems={index===showIndex ? true: false} setShowIndex={()=>setShowIndex(index)  } />
        ))
      ) : (
        <p>No categories available</p>
      )}
          {}

      </div>
    </div>
  );
};

export default RestaurantsMenus;
