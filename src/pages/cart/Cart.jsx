import { useContext, useState } from "react";
import { StylesContext } from "../../contexts/StylesContext";
import styles from "./Cart.module.css";
import ShoppingBag from "./ShoppingBag";
import ShippingAndCheckout from "./ShippingAndCheckout";
import Confirmation from "./Confirmation";

export default function Cart() {
  const [ isOrdered, setIsOrdered ] = useState(false);
  const { cartState, setCartItems, setCartState } = useContext(StylesContext);

  function placeOrder() {
    setCartItems([]);
    setIsOrdered(() => !isOrdered);
  }

  return (
    <div className={styles.cart}>
      <b class 
      Name="text-3xl">CART</b>

      <section>
        <button onClick={() => setCartState("shopping")} className="cursor-pointer">
          <b>01 SHOPPING BAG</b>
          <p className="text-xs text-gray-500">Manage Your Items List</p>
        </button>
        <button onClick={() => setCartState("shipping")} className="cursor-pointer">
          <b>02 SHIPPING AND CHECKOUT</b>
          <p className="text-xs text-gray-500">Checkout Your Items List</p>
        </button>
        <button onClick={() => setCartState("confirmation")} className="cursor-pointer">
          <b>03 CONFIRMATION</b>
          <p className="text-xs text-gray-500">Review And Submit Your Order</p>
        </button>
      </section>
      <br></br>
      <hr className="text-gray-600" style={{width:
        cartState === "shopping"
          ? "33%"
          : cartState === "shipping"
          ? "66%"
          : "100%" }}>
      </hr>

      <br></br>
      <br></br>
      
        { cartState === "shopping" && <ShoppingBag /> }
        { cartState === "shipping" && <ShippingAndCheckout /> }
        { cartState === "confirmation" && <Confirmation /> }


    </div>
  );
}

