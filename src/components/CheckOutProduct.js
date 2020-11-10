import React, {useContext} from "react";
import { StateContext } from "../StateContext";

import "../css folder/checkoutproduct.css";

const CheckOutProduct = ({id,title,image,rating,price}) => {

   const {dispatch} = useContext(StateContext)


   const  removeFromBasket = () => {
       dispatch({type:"REMOVE_FROM_BASKET" , id:id})
   }

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutproduct__image" />

      <div className="checkoutproduct__info">
        <p className="checkoutproduct__title">{title}</p>
        <p className="checkoutproduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct__rating">
            {Array(rating).fill().map(()=>{
                return <p> ⭐</p>
            })}
        </div>
        <button onClick={()=>removeFromBasket()}>Remove from basket</button>
      </div>

    </div>
  );
};

export default CheckOutProduct;
