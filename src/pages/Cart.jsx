import { useContext, useState } from "react";
import { StylesContext } from "../contexts/StylesContext";
import styles from "./Cart.module.css";
import ItemsQuantity from "../reusedComponents/ItemsQuantity";

export default function Cart() {
  const [isOrdered, setIsOrdered] = useState(false);

  const { cartItems, setCartItems, deleteItem } = useContext(StylesContext);
  const totals = cartItems.reduce(
  (acc, item) => {
    const price = Number(item.price);
    const discountAmount = price * (item.discount / 100);

    acc.totalMRP += price;
    acc.totalDiscount += discountAmount;

    return acc;
  },
  { totalMRP: 0, totalDiscount: 0 }
);

  const totalMRP = Number(totals.totalMRP.toFixed(2));
  const totalDiscount = Number(totals.totalDiscount.toFixed(2));
  const platformFee = 1.99;

  function placeOrder() {
    setCartItems([]);
    setIsOrdered(() => !isOrdered);
  }

  return (
    <div className={styles.cart}>
      <b>CART</b>
      <br></br>
      <br></br>
      <section className="flex justify-between">
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
      <hr className="text-gray-500"></hr>

      <br></br>
      <div>
        <div className={styles.titles}>
          <p>PRODUCT</p>
          <div className="flex justify-between w-[50%]">
            <p>PRICE</p>
            <p>QUANTITY</p>
            <p>SUBTOTAL</p>
          </div>
        </div>
        <br></br>

          {cartItems.map((item) => 
          <div className={styles.item}>
            <div className={styles.titles}>
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.style} />
                <p>{item.style}</p>
              </div>
              <div className="flex justify-between w-[50%] items-center">
                <p>${item.price}</p>
                <ItemsQuantity />
                <p>${item.price}</p>
              </div>
            </div>
            <button onClick={(() => deleteItem(item.id))} className="cursor-pointer">&#x1D5B7;</button>
          </div>)}
      </div>

    </div>
  );
}
