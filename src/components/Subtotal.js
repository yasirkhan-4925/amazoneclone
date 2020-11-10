import React ,{useContext} from 'react'
import CurrencyFormat from 'react-currency-format'
import '../css folder/subtotal.css'
import { StateContext } from "../StateContext";
import {getBasketTotal} from '../reducer'


const Subtotal = () => {
   
  const { basket } = useContext(StateContext);

     
   return(
     
    <div className="subtotal">
         <CurrencyFormat
          
           renderText = {
               (value)=>(

                <>
                  <p>
               Subtotal ({basket.length} items ) : <strong>{value}</strong>
                  </p>
                  <small className="subtotal__gift">
                      <input type="checkbox"/> This order contain a gift
                  </small>

                </>

               )
           }
           decimalScale={2}
           value={getBasketTotal(basket)}
           displayType={"text"}
           thousandSeparator={true}
           prefix={"$"}
           
         />
         <button>Proceed to checkout</button>
    </div>

   )

}


export default Subtotal