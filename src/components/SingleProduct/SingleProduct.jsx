import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import prod from "../../assets/products/earbuds-prod-1.webp";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addProduct } from "../../redux/cartSlice";


const SingleProduct = () => {
  const [productDetails, setProductDetails] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const fetchFoodDetails = async () => {
      const res = await fetch(`https://istore-api-2s0m.onrender.com/product/find/${id}`);
      const data = await res.json();
      setProductDetails(data);
    };
    fetchFoodDetails();
  }, [id]);

  const changeQuantity = (command) => {
    if (command === "dec") {
      return setQuantity((prev) => prev - 1);
    } else if (command === "inc") {
      return setQuantity((prev) => prev + 1);
    }
  };
  const addToCart = () => {
    dispatch(addProduct({ ...productDetails, quantity }));
  };
  return (
    <div className="single-product-main-content container">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={`https://istore-api-2s0m.onrender.com/images/${productDetails.img}`} alt="" />
          </div>
          <div className="right">
            <span className="name"> {productDetails.title} </span>
            <span className="price">{productDetails.price}</span>
            <span className="desc">{productDetails.desc}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <button className="quantityButtons" disabled={quantity === 1} onClick={()=> changeQuantity("dec")}>-</button>
                <span> {quantity} </span>
                <button className="quantityButtons" onClick={()=> changeQuantity("inc")} >+</button>
              </div>
              <button onClick={addToCart} className="add-to-cart-button">
                <FaCartPlus size={20} />
                ADD TO CART!!
              </button>
            </div>

            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category:
                <span>{productDetails.category}</span>
              </span>
              <div className="info-item">
                <span className="text-bold">
                  Share:
                  <span className="social-icons">
                    <FaFacebookF size={16} />
                    <FaInstagram size={16} />
                    <FaTwitter size={16} />
                    <FaLinkedinIn size={16} />
                    <FaPinterest size={16} />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
