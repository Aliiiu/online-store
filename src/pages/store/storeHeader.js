import React, { useContext } from "react";
import MenuIcon from "@material-ui/icons/Menu";
// import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const StoreHeader = () => {
  const { itemCount } = useContext(CartContext);

  return (
    <div className="storeheader">
      <div className="storeheader-content">
        <MenuIcon className="ham" />
        <div className="content-search ">
          <div className="con">
            <input
              type="text"
              placeholder="Find anything you are looking for"
            />
            <button>Search</button>
          </div>
        </div>
        <div className="content-cart flex">
          <Link to="/cart" className="content-cart_icon">
            <ShoppingCartOutlinedIcon />
            <div className="product-length">{itemCount}</div>
          </Link>
          <Link to="/cart" className="content-cart_text">
            Cart
          </Link>
        </div>
        <AccountCircleOutlinedIcon className="ava" />
      </div>
    </div>
  );
};

export default StoreHeader;
