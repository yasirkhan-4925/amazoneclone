import React from 'react'
import '../css folder/product.css'

const Product = ({title , price , rating , image}) => {
   
    return(

      <div className="product">

       <div className="product__info">
    <p>{title}</p>
           <p className="product__price">
               <small>RS</small>
    <strong>{price}</strong>
           </p>
           <div className="product__rating">

               {Array(rating).fill().map((_,i)=>{
                        return   <p>
                        ⭐
                        </p>
                 
               })}
               
            
               

           </div>
       </div>


       <img src={image} alt="shoes image"/>

       <button>Add to Basket</button>



      </div>


    )


} 



export default Product;
