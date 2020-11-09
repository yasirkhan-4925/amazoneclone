import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout";
import StateContextProvider from './StateContext'

function App() {
  return (
    <BrowserRouter>
    <StateContextProvider>
      <div className="App">
      <Header /> 
        <Switch>
          
         
          <Route path="/checkout"> <Checkout/></Route>
          <Route path="/"> <Home /></Route>
          
        </Switch>
      </div>
      </StateContextProvider>

    </BrowserRouter>
  );
}

export default App;
