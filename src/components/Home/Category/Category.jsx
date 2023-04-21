import "./Category.scss";

import cat1 from "../../../assets/category/cat-1.jpg";
import { useEffect, useState } from "react";
import { productTypes } from "../../../data/data";
import { Link } from "react-router-dom";

const Category = () => {
  
  return (
    <div className="shop-by-category container">
      <div className="categories">
        <h1>Categories:</h1>
        <div className="category">
          {productTypes.map((productType) => (
            <Link to={`/category/${productType.name}`} key={productType.id}>
              <div>
                <img src={productType.img} alt="" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
