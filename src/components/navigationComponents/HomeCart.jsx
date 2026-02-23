import { useContext } from "react"
import { StylesContext } from "../../contexts/StylesContext"
import BlackButton from "../../reusedComponents/BlackButton"
import styles from "./Navigation.module.css"
import CartItem from "./CartItem"
import GreyButton from "../../reusedComponents/GreyButton"

export default function HomeCart(){
    const { closeButton, cartItems } = useContext(StylesContext)
    const totalMRP = cartItems.reduce((mrp, item) => mrp + Number(item.price), 0);
    const totalDiscount = cartItems.reduce(
        (discount, item) =>
        Number((discount + item.price * (item.discount / 100)).toFixed(2)),
        0
    );
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
                            <b>${(totalMRP-totalDiscount).toFixed(2)}</b>
                        </div>
                        <br></br>

                        <GreyButton>VIEW CART</GreyButton>
                        <BlackButton>CHECKOUT</BlackButton>
                    </div>
                </div>
            </div>
        </div>
    )
}