import { useContext, useState } from "react";
import { StylesContext } from "../../contexts/StylesContext";
import styles from "./Cart.module.css";
import ShoppingBag from "./ShoppingBag";

export default function Cart() {
  const [isOrdered, setIsOrdered] = useState(false);
  const { setCartItems } = useContext(StylesContext);

  function placeOrder() {
    setCartItems([]);
    setIsOrdered(() => !isOrdered);
  }

  return (
    <div className={styles.cart}>
      <b className="text-3xl">CART</b>

      <section>
        <button>
          <b>01 SHOPPING BAG</b>
          <p className="text-xs text-gray-500">Manage Your Items List</p>
        </button>
        <button>
          <b>02 SHIPPING AND CHECKOUT</b>
          <p className="text-xs text-gray-500">Checkout Your Items List</p>
        </button>
        <button>
          <b>03 CONFIRMATION</b>
          <p className="text-xs text-gray-500">Review And Submit Your Order</p>
        </button>
      </section>
      <br></br>
      <hr className="text-gray-300"></hr>

      <br></br>
      <br></br>
      
        <ShoppingBag />

    </div>
  );
}
