import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { StoreContext } from "../../context/StoreContext";
import img from "../../assets/footerImages/footerImg.png";

const Cart = () => {
  const { cartItem, groceryList, removeFromCart ,getTotalCartAmount,url} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart_items">
        <div className="cartItems_title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {groceryList.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div>
                <div className="cartItems_title cartItems_item">
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>₹{item.price * cartItem[item._id]}</p>
                  <p
                    className="cross"
                    onClick={() => removeFromCart([item._id])}
                  >
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart_bottom">
        <div className="cart_total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart_total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart_total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:9}</p>
            </div>
            <hr />
            <div className="cart_total-details">
              <p>Total</p>
              <p>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+9}</p>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart_bottom_img">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
