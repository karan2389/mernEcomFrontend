import "./Category.scss";
import Products from "../Products/Products";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Category = () => {
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const productEndpoint = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(
        `https://istore-api-2s0m.onrender.com/product?category=${productEndpoint}`
      );
      const data = await res.json();
      setFilteredProducts(data);
    };
    fetchProduct();
  }, [productEndpoint]);

  return (
    <div className="category-main-content container m-4">
      <div className="category-layout">
        <div className="category-title">{productEndpoint}</div>
        <div className="products">
          {filteredProducts.length !== 0 ? (
            filteredProducts.map((product) => (
              <Link
                to={`/product/${product._id}`}
                key={product._id}
                className="product-card container my-2"
              >
                <img src={`https://istore-api-2s0m.onrender.com/images/${product.img}`} className="thumbnail" alt="..." />
                <div className="prod-details">
                  <span className="name">{product.title}</span>
                  <span className="price">&#8377; {product.price} </span>
                </div>
              </Link>
            ))
          ) : (
            <h1 className="noQuantity">No {productEndpoint} right now! </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
