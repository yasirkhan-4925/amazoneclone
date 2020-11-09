import React, { useContext } from "react";
import "../css folder/header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { StateContext } from "../StateContext";

const Header = () => {
  const { basket } = useContext(StateContext);
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
        <div className="header__items">
          <span className="item1">hello guest</span>
          <span className="item2">sign in</span>
        </div>
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
