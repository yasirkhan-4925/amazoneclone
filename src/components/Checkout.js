import React from 'react'
import '../css folder/checkout.css'
import Subtotal from '../components/Subtotal'
const Checkout = () => {
   
    return(

        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__add" src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png" alt=""/>

                <div>
                <h2 className="checkout__title">
                Your Shopping Basket
                    
                    {/* basketitem */}
                       {/* basketitem */}
                          {/* basketitem */}
                             {/* basketitem */}
                                {/* basketitem */}


                </h2>
            </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>


            
        </div>
    
    )


}




export default Checkout