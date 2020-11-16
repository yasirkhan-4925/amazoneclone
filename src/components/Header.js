import React, { useContext } from "react";
import "../css folder/header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { StateContext } from "../StateContext";
import {AuthContext} from '../AuthContext'
import {auth} from '../fbconfig'

const Header = () => {
  const { basket } = useContext(StateContext);
  
  const {user} = useContext(AuthContext)
 console.log("user of header",user)
  
  const signOut = () =>{
      if(user)
      {
         auth.signOut();
      }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/large-images-amazon-png-logo-vector-7.png3ft3d1416935166817"
          alt="amazoneicon"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchinput" type="text" name="" id="" />
        <SearchIcon className="header__searchicon" />
      </div>

      <div className="header__selectitem">
      <Link to={!user && "/signin"} style={{textDecoration:"none"}}>
        <div onClick={signOut} className="header__items">
         
  <span className="item1">{user ? user.email : "Hello Guest "}</span>
  <span  className="item2">{user ? "SignOut" : "Sign In"}</span>
         
        </div>
        </Link>
        <div className="header__items">
          <span className="item1">Returns</span>
          <span className="item2">& Orders</span>
        </div>
        <div className="header__items">
          <span className="item1">Your</span>
          <span className="item2">Prime</span>
        </div>
      </div>
      <div className="header__cart">
        <Link to="/checkout">
          <ShoppingBasketIcon className="header__basketicon" />
        </Link>

        <span className="header__cartquantity">{basket.length}</span>
      </div>
    </div>
  );
};

export default Header;
