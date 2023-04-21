import "./CartItem.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../../redux/cartSlice";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct({ _id: id }));
  };

  return (
    <div className="cart-products">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product._id}>
            <div className="cart-product">
              <div className="img-container">
                <img
                  src={`http://localhost:4000/images/${product.img}`}
                  alt=""
                />
              </div>
              <div className="prod-details">
                <span className="name"> {product.title} </span>
                <MdClose
                  onClick={() => handleRemoveProduct(product._id)}
                  className="close-btn"
                />
                <div className="text">
                  <span>{product.quantity}</span>
                  <span>x</span>
                  <span>&#8377; {product.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <span className="noProducts">No products in the cart!!</span>
      )}
    </div>
  );
};

export default CartItem;
