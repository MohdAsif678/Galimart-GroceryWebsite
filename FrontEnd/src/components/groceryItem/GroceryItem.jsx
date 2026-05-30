import React, { useContext } from "react";
import "./groceryItem.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";

const GroceryItem = ({ id, name, price, description, image }) => {

  const {cartItem,addToCart,removeFromCart,url} = useContext(StoreContext)

  return (
    <div className="groceryItem">
      <div className="groceryItem_container">
        <img src={url+"/images/"+image} alt="" className="groceryItem_img" />
        {!cartItem[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="icon"
          />
        ) : (
          <div className="groceryItem_counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="icon"
            />
            <p>{cartItem[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="icon"
            />
          </div>
        )}
      </div>
      <div className="groceryItem_info">
        <div className="groceryItem_name_storeLogo">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="groceryItem_description">{description}</p>
        <p className="groceryItem_price">₹{price}</p>
      </div>
    </div>
  );
};

export default GroceryItem;
