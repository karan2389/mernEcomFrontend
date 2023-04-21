import "./Product.scss";

import prod from "../../../assets/products/earbuds-prod-1.webp";


const Product = () => {
    return( 
        <div className="product-card container my-2" >
        <img src={prod} className="thumbnail" alt="..." />
        <div className="prod-details" >
          <span className="name" >Product Name</span>
          <span className="price">&#8377; 499</span>
        </div>
      </div>
)};

export default Product;

