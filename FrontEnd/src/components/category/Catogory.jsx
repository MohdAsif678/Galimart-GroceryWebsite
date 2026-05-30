import React from "react";
import "./category.css";
import { menu_list } from "../../assets/frontend_assets/assets.js";

const Catogory = ({category,setCategory}) => {
  return (
    <>
      <div className="menu" id="category">
        <div className="menu_content">
          <h1>Explore our cateory</h1>
          <p className="menu_description">
            Dive into a world of flavors, freshness, and everyday essentials—all
            curated for your convenience. From farm-fresh produce to pantry
            must-haves, our categories are designed to make your grocery journey
            seamless and satisfying.
          </p>
        </div>
        <div className="explore_category">
          {menu_list.map((item, index) => {
            return (
              <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore_catogory_items">
                <img  className = {category===item.menu_name?"active":""}src={item.menu_image} alt="menu_image" />
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </>
  );
};

export default Catogory;
