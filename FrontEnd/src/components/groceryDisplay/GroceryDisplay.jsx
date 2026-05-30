import React, { useContext } from "react";
import "./groceryDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import GroceryItem from "../groceryItem/GroceryItem";

const GroceryDisplay = ({ category }) => {
  const { groceryList } = useContext(StoreContext);
  return (
    <div className="grocery_display" id="groceryDisplay">
      <h2>All grocery near you</h2>
      <div className="grocery_display_list">
        {groceryList.map((item, index) => {
          if ((category === "All" || category === item.category)) {
            return (
              <GroceryItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default GroceryDisplay;
