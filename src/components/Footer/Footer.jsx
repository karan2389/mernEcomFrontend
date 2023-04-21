import "./Footer.scss";

import React from "react";
import Payment from "../../assets/payments.png";



const Footer = () => {
    return (
     
       <div className="footer">
           <div className="footer-content">
               { /* <div className="col">
                    <div className="title"> About </div>
                    <div className="text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore at earum, dignissimos provident iusto minima nobis voluptatem distinctio porro dolor.
                    </div>
                </div>
                <div className="col">
                    <div className="title"> Contact </div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            New Sanganer Rd, Jaipur, Rajasthan: 302109, India.
                        </div>
                        <div className="c-item">
                            <FaMobileAlt />
                            <div className="text">
                               Phone: 1800 209 5577
                            </div>
                            <div className="c-item">
                                <FaEnvelope />
                                <div className="text">
                                  E-mail: istore@gmail.com
                                </div>                                  
                            </div>
                        </div>
                        <div className="col">
                            <span className="title"> Categories </span>
                            <span className="text">Headphones</span>
                            <span className="text">Smart Watches</span>
                            <span className="text">Bluetooth Speakers</span>
                            <span className="text">Wireless Earbuds</span>
                            <span className="text">Home Theatre</span>
                            <span className="text">Projectors</span>
                        </div>
                        <div className="col">
                            <div className="title"> Pages </div>
                            <span className="text">Home</span>
                            <span className="text">About</span>
                            <span className="text">Privacy Policy</span>
                            <span className="text">Returns</span>
                            <span className="text">Terms & Conditions</span>
                            <span className="text">Contact Us</span>
                        </div>
                        </div>*/}
                    <div className="bottom-bar">
                        <div className="bottom-bar-content">
                            <div className="text">
                                ISTORE 2023 CREATED BY KARAN SUTAR. PREMIUM E-COMMERCE SOLUTIONS.
                            </div>
                            <img src={Payment} alt="" />
                        </div>
                    </div>
                </div>
           </div>    
     
          
)};


                export default Footer;
