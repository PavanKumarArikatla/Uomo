import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { StylesContext } from "../../contexts/StylesContext"
import BlackButton from "../../reusedComponents/BlackButton"
import CartItem from "./CartItem"
import GreyButton from "../../reusedComponents/GreyButton"
import { calculateTotals } from "../../utils/Price_Discount"
import styles from "./Navigation.module.css"

export default function MiniCart(){
    const { closePanel, cartItems } = useContext(StylesContext)
    const totals = calculateTotals(cartItems);
    const totalMRP = Number(totals.totalMRP.toFixed(2));
    const totalDiscount = Number(totals.totalDiscount.toFixed(2));
    return(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.cartItems}>
                    <div className={styles.head}> 
                        <b>Cart({cartItems.length})</b>
                        <button onClick={closePanel} className="cursor-pointer">&#x1D5B7;</button>
                    </div>
                    {cartItems.length > 0 ?
                        cartItems.map((item) => (<CartItem key={item.id} item={item}/> ))
                        : <h1 className="text-center">Your cart is empty</h1>
                    }

                    <div className={styles.totalPrice}>
                        <hr className="text-gray-300"></hr>
                        <br></br>
                        <div className="flex justify-between text-xs">
                            <b>SUBTOTAL:</b>
                            <b>${Number((totalMRP - totalDiscount).toFixed(2))}</b>
                        </div>
                        <br></br>

                        <NavLink to="/cart"><GreyButton onClick={closePanel}>VIEW CART</GreyButton></NavLink>
                        <NavLink to="/cart"><BlackButton onClick={closePanel}>CHECKOUT</BlackButton></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
