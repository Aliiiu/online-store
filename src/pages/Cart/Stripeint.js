// import React from "react";
// import StripeCheckout from "react-stripe-checkout";
// import { CartContext } from "../../context/CartContext";

// export default class TakeMoney extends React.Component {
// const { cartItems, total, itemCount, clearCart } = useContext(CartContext);

//   onToken = (token) => {
//     fetch("/save-stripe-token", {
//       method: "POST",
//       body: JSON.stringify(token),
//     }).then((response) => {
//       response.json().then((data) => {
//         alert(`We are in business, ${data.email}`);
//       });
//     });
//   };

//   // ...

//   render() {
//     return (
//       // ...
//       <>
//         <StripeCheckout
//           token={this.onToken}
//           stripeKey="pk_test_51Hrl5uA1EQPNSzeqCWPUxRIRLKlMzuYZQECXDtvDoskKwucNCTZqayiFFqBpv68X5lvAbSDvUJtEuAY4CWKSX0JZ002o9nRFof"
//           name="CodingMage Store" // the pop-in header title
//           description="Stripe Payment.." // the pop-in header subtitle
//           image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
//           ComponentClass="div"
//           label="Buy the Thing" // text inside the Stripe button
//           panelLabel="Give Money" // prepended to the amount in the bottom pay button
//           amount={1000000} // cents
//           currency="USD"
//           opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
//           closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
//         >
//           <button className="btn btn-primary">Pay</button>
//         </StripeCheckout>
//         <h1>ggcg</h1>
//       </>
//     );
//   }
// }

import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout";
import { CartContext } from "../../context/CartContext";

const TakeMoney = () => {
  const { total, handleCheckout } = useContext(CartContext);

  const onToken = (token) => {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token),
    }).then((response) => {
      response.json().then((data) => {
        handleCheckout();
        alert(`We are in business, ${data.email}`);
      });
    });
  };
  return (
    <div className="takemoney">
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51Hrl5uA1EQPNSzeqCWPUxRIRLKlMzuYZQECXDtvDoskKwucNCTZqayiFFqBpv68X5lvAbSDvUJtEuAY4CWKSX0JZ002o9nRFof"
        name="CodingMage Store" // the pop-in header title
        description="Stripe Payment.." // the pop-in header subtitle
        image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
        ComponentClass="div"
        label="Buy the Thing" // text inside the Stripe button
        panelLabel="Pay" // prepended to the amount in the bottom pay button
        amount={total * 100} // cents
        currency="USD"
        email="yusufkehinde11@gmail.com"
        // opened={onOpened} // called when the checkout popin is opened (no IE6/7)
        // closed={onClosed} // called when the checkout popin is closed (no IE6/7)
      >
        <button className="checkout pay">Pay with Stripe</button>
      </StripeCheckout>
    </div>
  );
};

export default TakeMoney;
