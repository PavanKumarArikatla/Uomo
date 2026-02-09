import { useContext, useState } from "react";
import { StylesContext } from "../contexts/StylesContext";
import BackButton from "../reusedComponents/BackButton";
import AddItemOrderButton from "../reusedComponents/AddItemOrderButton";
import styles from "./Cart.module.css";
import Item from "./Item";

export default function Cart() {
  const [isOrdered, setIsOrdered] = useState(false);

  const { cartItems, setCartItems, count } = useContext(StylesContext);
  const totalMRP = cartItems.reduce((mrp, item) => mrp + Number(item.price), 0);
  const totalDiscount = cartItems.reduce(
    (discount, item) =>
      Number((discount + item.price * (item.discount / 100)).toFixed(2)),
    0
  );
  const platformFee = 1.99;

  function placeOrder() {
    setCartItems([]);
    setIsOrdered(() => !isOrdered);
  }

  return (
    <div className={styles.cart}>
      <BackButton />
      <li className={`${styles.cartWrapper} ${styles.li}`}>
        <i className="fa-solid fa-cart-shopping"></i>
        {count > 0 && <span className={styles.badge}>{count}</span>}
      </li>
      {isOrdered === false ? (
        <>
          {cartItems.length > 0 ? (
            <div className={styles.cartItems}>
              <div className={styles.items}>
                {cartItems.map((item) => (
                  <Item item={item} key={item.id} type="cart" />
                ))}
              </div>

              <div className={styles.priceDetails}>
                <strong className={styles.span}>
                  Price Details ({cartItems.length} items)
                </strong>

                <div>
                  <span>Total MRP</span>
                  <p className={styles.amount}>${totalMRP}</p>
                </div>

                <div>
                  <span>Total Discount</span>
                  <p className={styles.amount}>
                    <em className={styles.discount}>${totalDiscount}</em>
                  </p>
                </div>

                <div>
                  <span>Platform fee</span>
                  <p className={styles.amount}>${platformFee}</p>
                </div>
                <br></br>
                <hr></hr>

                <div>
                  <strong>Total Amount</strong>
                  <p className={styles.amount}>
                    $
                    {(
                      Number(totalMRP) -
                      Number(totalDiscount) +
                      Number(platformFee)
                    ).toFixed(2)}
                  </p>
                </div>

                <br></br>
                <AddItemOrderButton onClick={placeOrder}>
                  Place Order
                </AddItemOrderButton>
              </div>
            </div>
          ) : (
            <div className={styles.emptyCart}>
              <h4>Your cart is empty</h4>
              <h5>Add items to the cart to continue shopping</h5>
            </div>
          )}
        </>
      ) : (
        <div className="text-center">Woohoo!! Order placed</div>
      )}
    </div>
  );
}
