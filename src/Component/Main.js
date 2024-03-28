import React, { useState } from "react"
import RestaurantCard from "./RestaurantCard"
import Data from "../Data.json"
import './Main.css'

const Main = () => {
  const [restaurantData, setRestaurantData] = useState(Data);
  const [searchFoodType, setFoodType] = useState("");
  const [searchRating, setRating] = useState("");

  const onSearchChange = (e) => {
    let searchKey = e.target.value;
    setFoodType((prev) => searchKey);
    let filteredList = Data.filter((elem) => {
      return (
        elem.name.toLowerCase().includes(searchKey.toLowerCase()) &&
        elem.rating >= searchRating
      );
    });
    setRestaurantData(filteredList);
  };

  const onRatingChange = (e) => {
    let ratingKey = e.target.value;
    setRating((prev) => ratingKey);
    let filteredList = Data.filter((elem) => {
      return (
        elem.rating >= ratingKey &&
        elem.name.toLowerCase().includes(searchFoodType.toLowerCase())
      );
    });
    setRestaurantData(filteredList);
  };

  return (
    <div className="main">
      <h1>Restaurant App</h1>
      <section>
        <div className="inputDiv">
          <input
            type="text"
            placeholder="Search restaurants..."
            onChange={onSearchChange}
          />

          <input
            type="number"
            className="rating"
            min={1}
            max={5}
            step={1}
            placeholder="Filter by Ratings"
            onChange={onRatingChange}
          />
        </div>

        <div className="cardContainer">
        {restaurantData.map((restaurantDetails) => {
          return (
            <RestaurantCard
              key={restaurantDetails._id._id}
              {...restaurantDetails}
            />
          );
        })}
        </div>



      </section>
    </div>
  );
};

export default Main;
