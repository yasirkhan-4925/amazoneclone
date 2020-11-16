


export const AuthReducer = (state,action)=>{
   console.log("This is action",action)

   switch(action.type){
      
     case "SET_USER":
         return action.user
      default:
      return state   

   }
}