
import React from "react";
import classes from "./CartItem.css";
const CartItem = ({ item, value }) => {
  const { id, name, img, category, location } = item;
  const {removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center">
         <div className="col-10 mx-auto col-lg-2">
           <img
            src={img}
            style={{ widht: "5rem", height: "5rem" }}
             className="img-fluid"
             alt="product"
         />
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">Name:</span>
          {name}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">Category :</span>
        {category}
        </div>
        <div className="col-10 mx-auto col-lg-2">
           <span className="d-lg-none">Location :</span>
           {location}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <button onClick={()=>removeItem(id)} className={classes.RemoveBtn}>X</button>
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">YES</span>
        YES
      </div>
    </div>
    
  );
};

export default CartItem;