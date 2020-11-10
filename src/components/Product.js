import React,{useContext} from 'react'
import '../css folder/product.css'
import {StateContext} from '../StateContext'

const Product = ({ id ,title , price , rating , image}) => {

    const {dispatch} = useContext(StateContext)

  
    


    const addToBasket = () => {
        dispatch({type:"ADD_TO_BASKET",item:{id,title,price,rating,image}})
    }
   
    return(

      <div className="product">

       <div className="product__info">
    <p>{title}</p>
           <p className="product__price">
               <small>$</small>
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

       <button onClick={addToBasket}>Add to Basket</button>



      </div>


    )


} 



export default Product;
