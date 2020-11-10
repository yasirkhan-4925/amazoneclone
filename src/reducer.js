 

 export const getBasketTotal = (basket) => basket?.reduce((amount,item)=>item.price + amount ,0)

 export const reducer = (state,action) => {
     console.log(action)
  switch(action.type){
     
    case "ADD_TO_BASKET":
     return [...state,action.item]
     case "REMOVE_FROM_BASKET":
       
     const index = state.findIndex(
       (basketItem) => basketItem.id===action.id
     )

     let newBasket = [...state]

     if(index>=0)
     {
         newBasket.splice(index,1)
     }
     else{
       console.warn(`cant remove product(id : ${action.id}) as it is not in the basket`)
     }

     return newBasket

        
     
    default:
        return state  

  }
}


