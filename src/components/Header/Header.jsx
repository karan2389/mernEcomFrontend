import "./Header.scss";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

// IMPORTING ICONS 
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

// IMPORTING OTHER COMPONENTS OF HEADER!
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(true);
    const { products } = useSelector((state) => state.cart);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 50) {
            return setScrolled(true);
        }
        else {
            return setScrolled(false);
        }
    }
    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
      };
   
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])

    return (

        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ''} `} >
                <div className="main-content">
                    <ul className="left">
                        <Link to="/">
                        <li>Home</li>
                        </Link>
                        <Link to="/">
                        <li>About</li>
                        </Link>
                        <Link to="/category/:id">
                        <li>Categories</li>
                        </Link>
                    </ul>
                    <Link to="/" className="center"> iSTORE </Link>
                    <div className="right">
                        <AiOutlineHeart />
                        <span className="cart-icon" onClick={()=> setShowCart(false)}>
                            <CgShoppingCart />
                            <span>{products.length}</span>
                        </span>
                        <div className="buttons">
                            <button onClick={handleLogout} className="button">Logout</button>
                        </div>
                    </div>
                </div>
            </header>
            {!showCart && <Cart setShowCart={setShowCart}/>}
        </>
    );

};

export default Header;
