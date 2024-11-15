import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import resList from "../utils/mockData.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import RestaurantCard, { withPromotedLabel } from "./restaurantcard.jsx";
import { Shimmer } from "./Shimmer.jsx";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [isTopRated, setIsTopRated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredSearchRestaurants, setFilteredSearchRestaurants] =
    useState("");


  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    const timer = setTimeout(() => {
      setListOfRestaurant(resList);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filterTopRated = () => {
    setListOfRestaurant(
      isTopRated
        ? resList
        : resList.filter((restaurant) => restaurant.data.avgRating > 4)
    );
    setIsTopRated(!isTopRated);
  };

  const handleSearch = () => {
    const filteredRestaurants = resList.filter((restaurant) =>
      restaurant.data.name
        .toLowerCase()
        .includes(filteredSearchRestaurants.toLowerCase())
    );
    setListOfRestaurant(filteredRestaurants);
  };

  const onLineStatus = useOnlineStatus();

  if (onLineStatus === false) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );
  }

  if (isLoading) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="containerUpdate">
        <button className="filter-btn" onClick={filterTopRated}>
          {isTopRated ? "Show All Restaurants" : "Top Rated Restaurants"}
        </button>
        <div className="search-bar">
          <input
            type="text"
            className="searchBox"
            placeholder="Search restaurants..."
            value={filteredSearchRestaurants}
            onChange={(e) => setFilteredSearchRestaurants(e.target.value)}
          />
          <button onClick={handleSearch} className="searchbtn">
            Search
          </button>
        </div>
      </div>

      <div className="res-container">
        {listOfRestaurants.length === 0 ? (
          <h2>No restaurants found.</h2>
        ) : (
          listOfRestaurants.map((restaurant) => (
            <Link
              key={restaurant.data.id}
              to={"/restaurant/" + restaurant.data.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {restaurant.data.promoted ? (
                <RestaurantCardPromoted resData={restaurant}/>
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
