import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { StylesContext } from "../../contexts/StylesContext"
import BlackButton from "../../reusedComponents/BlackButton"
import styles from "./Navigation.module.css"
import CartItem from "./CartItem"
import GreyButton from "../../reusedComponents/GreyButton"

export default function HomeCart(){
    const { closeButton, cartItems } = useContext(StylesContext)
    const totals = cartItems.reduce(
  (acc, item) => {
    const price = Number(item.price) || 0;
    const discountAmount = price * (item.discount / 100) || 0;

    acc.totalMRP += price;
    acc.totalDiscount += discountAmount;

    return acc;
  },
  { totalMRP: 0, totalDiscount: 0 }
);

  const totalMRP = Number(totals.totalMRP.toFixed(2));
  const totalDiscount = Number(totals.totalDiscount.toFixed(2));
    return(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.cartItems}>
                    <div className={styles.head}>
                        <b>SHOPPING CART({cartItems.length})</b>
                        <button onClick={closeButton} className="cursor-pointer">&#x1D5B7;</button>
                    </div>
                    {cartItems.map(item => <CartItem item={item} /> )}

                    <div className={styles.totalPrice}>
                        <hr className="text-gray-300"></hr>
                        <br></br>
                        <div className="flex justify-between text-xs">
                            <b>SUBTOTAL:</b>
                            <b>${Number((totalMRP - totalDiscount).toFixed(2))}</b>
                        </div>
                        <br></br>

                        <NavLink to="/cart"><GreyButton onClick={closeButton}>VIEW CART</GreyButton></NavLink>
                        <NavLink to="/cart"><BlackButton onClick={closeButton}>CHECKOUT</BlackButton></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}