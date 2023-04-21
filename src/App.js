
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Header from "./components/Header/Header";
import NewsLetter from "./components/Footer/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import AppContext from "./utils/context";
import Cart from "./components/Cart/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Create from "./components/create/Create";
import Success from "./components/Cart/success/Success";







function App() {
    return <>
        <AppContext>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/cart/:id" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/success" element={<Success />} />
                </Routes>
                <NewsLetter />
                <Footer />
            </BrowserRouter>
        </AppContext>

    </>
}

export default App;
