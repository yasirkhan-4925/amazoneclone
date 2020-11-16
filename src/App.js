import React,{useEffect,useContext} from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import AuthContextProvider from './AuthContext'

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout";
import StateContextProvider from './StateContext'
import Login from "./components/Login";
import {AuthContext} from './AuthContext'


import {auth} from './fbconfig'

function App() {

  const {dispatch} = useContext(AuthContext)


   useEffect(()=>{
        auth.onAuthStateChanged( (authUser)=>{

          
          if(authUser)
          {
             dispatch({type:"SET_USER" , user:authUser});
          }
          else{
             dispatch({type:"SET_USER",user:null})
          }

        } )
   },[])

  return (
   
     
      <BrowserRouter>
   
    
 
        <div className="App">
       
        <StateContextProvider>
     
        <Switch>
          
          <Route path="/signin"><Login/></Route> 
          <Route path="/checkout">  <Header />  <Checkout/></Route>
          <Route path="/">  <Header />  <Home /></Route>
          
        </Switch>
        </StateContextProvider>
        
      </div>
     
    x
   
      
    
     

    </BrowserRouter>
  
   
    
  );
}

export default App;
