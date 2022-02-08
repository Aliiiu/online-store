import React from "react";
import CartProduct from "./CartProduct";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Add } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { cartItems, checkout, itemCount } = useContext(CartContext);

  return (
    <div className="maincart">
      <div className="cartheader">
        <div className="cartheader__content">
          <div className="cartlength flex">
            <div className="cartlength__icon">
              <ShoppingCartOutlinedIcon />
              <div className="product-length">{itemCount}</div>
            </div>
            <div className="cartlength__text">Cart</div>
          </div>

          <div className="carttitle">My Cart</div>

          <Link to="/" className="cartexit">
            <Add />
          </Link>
        </div>
      </div>

      {cartItems.length > 0 ? (
        <CartProduct />
      ) : (
        <div className="flex flex-ai-c flex-jc-c emptycart">
          Your cart is empty
        </div>
      )}

      {checkout && (
        <div className="flex flex-ai-c flex-jc-c done">
          <p>Checkout successfull</p>
          <Link to="/" className="back">
            BUY MORE
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
