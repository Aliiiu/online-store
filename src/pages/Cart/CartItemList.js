import React, { useContext } from "react";
import { Add, Remove } from "@material-ui/icons";
import { CartContext } from "../../context/CartContext";

// import Bag from "../../svg/bag.jpg";

const CartItemList = (product) => {
  const { increase, decrease, removeProduct } = useContext(CartContext);
  // console.log(product);

  return (
    <div className="itemlist">
      <div className="itemlist__img">
        <img src={product.product.image} alt={product.product.title} />
      </div>
      <div className="itemlist__info">
        <div className="itemlist__info-name">{product.product.title}</div>
        <div className="itemlist__info-price">${product.product.price}</div>
      </div>
      <div className="itemlist__action">
        <div
          className="itemlist__action-remove"
          onClick={() => removeProduct(product.product)}
        >
          Remove
        </div>
        <div className="itemlist__action-change">
          <div
            className={
              product.product.quantity >= 1 ? "change-icon" : "change-icon dis"
            }
            onClick={() => decrease(product.product)}
          >
            <Remove />
          </div>
          {product.product.quantity < 0 ? "0" : product.product.quantity}
          <div
            className="change-icon"
            onClick={() => increase(product.product)}
          >
            <Add />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemList;
