import React, { createContext,  useReducer } from "react"
import {reducer} from './reducer'



export const StateContext = createContext();


 const StateContextProvider = (props)=> {
      
       const [basket,dispatch] = useReducer(reducer,[])
       
 
       
  
      

       return (

        <StateContext.Provider value={{basket,dispatch}} > 
            {props.children}
        </StateContext.Provider>

       )



 } 

 export default StateContextProvider;


