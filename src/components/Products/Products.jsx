import "./Products.scss";
import Product from "./Product/Product";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Products = ({ innerPage, headingText }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const res = await fetch("https://istore-api-2s0m.onrender.com/product");
      const data = await res.json();
      setProducts(data);
    };
    fetchAllProducts();
  }, []);

  return (
    <div className="products-container container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products.map((product) => (
          <Link to={`/product/${product._id}`} key={product._id} className="product-card">
            <img src={`https://istore-api-2s0m.onrender.com/images/${product.img}`} className="thumbnail" alt="..." />
            <div className="prod-details">
              <span className="name"> {product.title} </span>
              <span className="price">&#8377; {product.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
