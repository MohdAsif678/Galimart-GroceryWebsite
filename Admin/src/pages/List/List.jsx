import React, { useEffect, useState } from "react";
import "./list.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {
  
  const [list, setList] = useState([]);

  const getItemsFromPayload = (payload) => {
    if (Array.isArray(payload?.data)) return payload.data;
    if (Array.isArray(payload?.items)) return payload.items;
    if (Array.isArray(payload?.result)) return payload.result;
    if (Array.isArray(payload)) return payload;
    return [];
  };

  const fetchList = async () => {
    try {
      const res = await axios.get(`${url}/api/grocery/list`);

      const payload = res?.data ?? {};
      const items = getItemsFromPayload(payload) ?? [];

      const httpSuccess = res.status >= 200 && res.status < 300;

      // Interpret as successful fetch if HTTP was OK or success flags are present
      const success =
        httpSuccess ||
        payload.success === true ||
        String(payload.success).toLowerCase() === "true" ||
        String(payload.status).toLowerCase() === "success" ||
        payload.ok === true;

      if (success) {
        setList(items);
        if (items.length === 0) toast.info("No grocery items found.");
      } else {
        setList([]);
        toast.error(payload.message || "Failed to fetch grocery list.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setList([]);
      toast.error("Server error. Please try again later.");
    }
  };

  const removeGrocery = async (groceryId) => {
    const response = await axios.post(`${url}/api/grocery/remove`, {
      id: groceryId,
    });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex_col">
      <h3>All Grocery List</h3>

      <div className="list_table">
        <div className="list_table_formet title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {Array.isArray(list) && list.length > 0 ? (
          list.map((item, index) => (
            <div
              key={item?._id || item?.id || `${item?.name || "item"}-${index}`}
              className="list_table_formet"
            >
              <img
                src={`${url}/images/${item?.image}`}
                alt={item?.name || "grocery item"}
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.png";
                }}
              />
              <p>{item?.name || "-"}</p>
              <p>{item?.category || "-"}</p>
              <p>₹{item?.price != null ? item.price : "-"}</p>
              <p onClick={() => removeGrocery(item._id)} className="cursor">
                X
              </p>
            </div>
          ))
        ) : (
          <div className="list_empty">No items found.</div>
        )}
      </div>
    </div>
  );
};

export default List;
