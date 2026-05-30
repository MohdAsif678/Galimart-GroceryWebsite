import React, { useState } from "react";
import "./add.css";
import { assets } from "../../assets/assets.js";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({url}) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Atta,Ghee,Namak,Oil",
  });

  const onChangehandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/grocery/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Atta,Ghee,Namak,Oil",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="add">
      <form className="flex_col" onSubmit={onSubmitHandler}>
        <div className="add_img_upload flex_col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
              required
            />
          </label>
        </div>
        <div className="add_product_name flex_col">
          <p>Product name</p>
          <input
            onChange={onChangehandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="type here"
          />
        </div>
        <div className="add_product_description flex_col">
          <p>Product description</p>
          <textarea
            onChange={onChangehandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="write Content here"
            required
          ></textarea>
        </div>
        <div className="add_category_price">
          <div className="add_category flex_col">
            <p>Product category</p>
            <select onChange={onChangehandler} name="category">
              <option value="Atta,Ghee,Namak,Oil">Atta,Ghee,Namak,Oil</option>
              <option value="Daal,Rice,Spices">Daal,Rice,Spices</option>
              <option value="Pakege Food">Pakege Food</option>
              <option value="Washing">Washing</option>
              <option value="Bath">Bath</option>
              <option value="Hair care">Hair care</option>
              <option value="Oral care">Oral care</option>
              <option value="Attar">Attar</option>
            </select>
          </div>
          <div className="add_price flex_col">
            <p>Product price</p>
            <input
              onChange={onChangehandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="₹20"
            />
          </div>
        </div>
        <button type="submit" className="add_btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
