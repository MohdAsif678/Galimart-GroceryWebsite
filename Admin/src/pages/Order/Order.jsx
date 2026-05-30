import React from "react";
import "./order.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { assets } from "../../assets/assets.js";

const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  }

  const statusHanlder = async (e,orderId)=>{
      const response = await axios.post(url+"/api/order/status",{
        orderId,
        status:e.target.value
      })
      if(response.data.success){
        await fetchAllOrders();
      }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);
  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order_list">
        {orders.map((order, index) => (
          <div className="order_item" key={index}>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order_item_grocery">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + " , ";
                  }
                })}
              </p>
              <p className="order_item_name">{order.address.name}</p>
              <div className="order_item_address">
                <p>
                  Word No:
                  {order.address.wordNo +
                    "  , " +
                    order.address.street +
                    "  , " +
                    order.address.landmark +
                    "  , " +
                    order.address.city}
                </p>
              </div>
              <p className="order_item_phone">{order.address.phone}</p>
            </div>
            <p>Items:{order.items.length}</p>
            <p>₹{order.amount}</p>
            <select onChange={(e)=>statusHanlder(e,order._id)} value={order.status}>
              <option value="Grocery Processing">Grocery Processing</option>
              <option value="Out for Delivery">Out for delivery</option>
              <option value="Deliverd">Deliverd</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
