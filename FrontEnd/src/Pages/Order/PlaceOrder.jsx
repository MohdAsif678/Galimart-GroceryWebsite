import React, { useContext, useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import "./placeOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {

  const navigate = useNavigate();
  const { getTotalCartAmount, token, groceryList, cartItem, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    name: "",
    city: "",
    zipcode: "",
    street: "",
    wordNo: "",
    phone: "",
    landmark: "",
  });
  const [debouncedData, setDebouncedData] = useState(data);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedData(data);
    }, 500); // 500ms debounce delay

    return () => {
      clearTimeout(handler); // Clear timeout if input changes before delay
    };
  }, [data]);

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    groceryList.map((item) => {
      if (cartItem[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItem[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount()+9,
    };
    console.log(orderData)
    let response  = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if(response.data.success){
      navigate("/myorders")
    }
    else{
      alert("Error")
    }
  };

  useEffect(()=>{
    if(!token){
      navigate("/cart")
    }
    else if(getTotalCartAmount() === 0){
      navigate("/cart")
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className="place_order">
      <div className="place_order_left">
        <p className="place_order_left_title">Delivery Details</p>
        <input
          name="name"
          onChange={onChangeHandler}
          value={data.name}
          type="text"
          placeholder="enter your name"
          required
        />
        <div className="multi_feild">
          <input
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="city"
            required
          />
          <input
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            type="text"
            placeholder="zipcode"
            required
          />
        </div>
        <input
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="street"
          required
        />
        <div className="multi_feild">
          <input
            name="wordNo"
            onChange={onChangeHandler}
            value={data.wordNo}
            type="text"
            placeholder="word no:"
            required
          />
          <input
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            type="text"
            placeholder="phone"
            required
          />
        </div>
        <input
          name="landmark"
          onChange={onChangeHandler}
          value={data.landmark}
          type="text"
          placeholder="landmark: Ex-Mandir,Masjid etc"
          required
        />
      </div>
      <div className="place_order_right">
        <div className="cart_total1">
          <h2>Cart Total</h2>
          <div>
            <div className="cart_total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart_total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 9}</p>
            </div>
            <hr />
            <div className="cart_total-details">
              <p>Total</p>
              <p>
                ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 9}
              </p>
            </div>
          </div>
          <button type="submit">Place Order</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
