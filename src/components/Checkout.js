import React, { useContext } from "react";
import "../css folder/checkout.css";
import Subtotal from "../components/Subtotal";
import CheckOutProduct from "./CheckOutProduct";
import { StateContext } from "../StateContext";
import {AuthContext} from '../AuthContext'


const Checkout = () => {
  const { basket } = useContext(StateContext);
  const {user} = useContext(AuthContext)

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__add"
          src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
          alt=""
        />
         <h3 style={{padding:"10px"}}>{user ? `Hello ${user.email}` : "Hello Guest"}</h3>
        <div>
          <h2 className="checkout__title">
            Your Shopping Basket
            {basket.map((item) => {
                
              return (
                <CheckOutProduct
                  id={item.id}
                  title={item.title}
                  rating={item.rating}
                  price={item.price}
                  image={item.image}
                />
              
              );
            })}
           
          </h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
