import React, { useContext } from "react";
import CartItemList from "./CartItemList";
import { CartContext } from "../../context/CartContext";
import TakeMoney from "./Stripeint";

const CartProduct = () => {
  const { cartItems, total, itemCount, clearCart, handleCheckout } = useContext(
    CartContext
  );

  return (
    <div className="cartproduct">
      <div className="cartproduct__list">
        {cartItems.map((product) => (
          <CartItemList key={product.id} product={product} />
        ))}
      </div>
      <div className="cartproduct__summary">
        <div className="user-details">
          <h3>Customer details</h3>
          <div className="names">
            <h3 className="names-info">
              Full name <span>Yusuf Kehinde</span>
            </h3>
            <h3 className="names-info">
              Contact number <span>08139600460</span>
            </h3>
          </div>
          <div className="user-address">
            <h3>Delivery address</h3>
            <p>No 47 ifeoluwa cda abk</p>
          </div>
        </div>

        <div className="user-total">
          <h3>
            Total items <span>{itemCount}</span>
          </h3>
          <h3>
            Total Payment <span>${total}</span>
          </h3>
          <div className="clear" onClick={clearCart}>
            Clear
          </div>
        </div>

        <div className="checkout" onClick={handleCheckout}>
          {" "}
          Local Checkout
        </div>
        <TakeMoney />
      </div>

      <div className="mobile-checkout">
        <h3>Total payment ${total}</h3>
        <div className="mobile-actions">
          <div className="mobile-clear" onClick={clearCart}>
            Clear
          </div>
          <div className="mobile-pay" onClick={handleCheckout}>
            Pay
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
