import "./Cart.scss";

import { MdClose } from "react-icons/md";
import CartItem from "./CartItem/CartItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = ({ setShowCart }) => {
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.cart);
  let totalPrice = 0;
  products.forEach(
    (product) => (totalPrice += product.quantity * product.price)
  );
  const handleCheckout = () => {
    navigate("/success");
  };
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(true)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>

        <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal</span>
              <span className="text total"> &#8377; {totalPrice}</span>
            </div>
            <div className="button ">
              <span className="checkout-cta" onClick={handleCheckout}>
                Checkout
              </span>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
