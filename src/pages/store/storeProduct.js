import { Add } from "@material-ui/icons";
import React, { useContext } from "react";
import { ReactComponent as Grey } from "../../svg/shirt.svg";
// import Bag from "../../svg/bag.jpg";
import { ProductsContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";
import DoneIcon from "@material-ui/icons/Done";

const StoreProduct = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="storeproduct">
      <div className="productads">
        <div className="productads-img">
          <Grey />
        </div>
        <div className="productads-info">
          <h1>Shop with ease</h1>
          <h3>
            Checkout our daily deals <span>Click here</span>{" "}
          </h3>
        </div>
      </div>

      <div className="productlist-container">
        {products.map((product) => (
          <ProductList key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default StoreProduct;

const ProductList = ({ product }) => {
  const { addProduct, cartItems } = useContext(CartContext);

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <div className="productlist">
      <div className="productlist-img">
        <img src={product.image + "?v=" + product.id} alt="Bag" />
      </div>
      <div className="productlist-title ">{product.title}</div>
      <div className="productlist-footer">
        <div className="footer-price">${product.price}</div>
        {isInCart(product) && (
          <div className="footer-add">
            <DoneIcon />
          </div>
        )}
        {!isInCart(product) && (
          <div className="footer-add" onClick={() => addProduct(product)}>
            <Add />
          </div>
        )}
      </div>
    </div>
  );
};
