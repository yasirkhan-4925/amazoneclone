

 export const reducer = (state,action) => {
     console.log(action)
  switch(action.type){
     
    case "ADD_TO_BASKET":
     return [...state,action.item]
         

        
     
    default:
        return state  

  }
}


