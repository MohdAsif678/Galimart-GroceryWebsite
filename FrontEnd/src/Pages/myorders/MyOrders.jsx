import React, { useEffect, useState } from "react";
import "./myorders.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };
  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my_orders">
      <h2>My Orders</h2>
      <div className="container1">
        {data.map((order, index) => {
          return (
            <div key={index} className="my_orders_order">
              <img src={assets.parcel_icon} alt="" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + "  ,";
                  }
                })}
              </p>
              <p>₹{order.amount}.00</p>
              <p>Items:{order.items.length}</p>
              <p>
                <span>&#x25cf;</span>
                <b>{order.status}</b>
              </p>
              <button onClick={() => navigate("/deliveryPage")}>
                Track Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
