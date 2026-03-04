import { useContext } from "react";
import { StylesContext } from "../../contexts/StylesContext";
import ItemsQuantity from "../../reusedComponents/ItemsQuantity";
import BlackButton from "../../reusedComponents/BlackButton";
import GreyButton from "../../reusedComponents/GreyButton"
import styles from "./ShoppingBag.module.css"

export default function ShoppingBag(){
    const { cartItems, deleteItem } = useContext(StylesContext);
    const totals = cartItems.reduce((acc, item) => {
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
    return(
    <div className={styles.divider}>
        <div className={styles.itemsColumn}> 
            <div className={`${styles.titles} ${styles.headerTitles}`}>
                <b>PRODUCT</b>
                <div className={styles.headings}>
                <b>PRICE</b>
                <b>QUANTITY</b>
                <b>SUBTOTAL</b>
                </div>
            </div>
            <br></br>
            <hr className={styles.line}></hr>

            {cartItems.map((item) => 
            <div key={item.id}>
            <div className={styles.item}>
                <div className={styles.titles}>
                <div className={styles.productMeta}>
                    <img src={item.image} alt={item.style} />
                    <p>{item.style}</p>
                </div>
                <div className={styles.prices}>
                    <p>${item.price}</p>
                    <div className={styles.qtyBox}><ItemsQuantity /></div>
                    <p>${item.price}</p>
                </div>
                </div>
                <button onClick={(() => deleteItem(item.id))} className={styles.deleteButton}>&#x1D5B7;</button>
            </div>
            <hr className={styles.line}></hr>
            </div>
            )}

            <div className={styles.coupon}>
            <form className={styles.couponForm}>
                <input type="text" placeholder="Coupon Code" />
                <button>APPLY COUPON</button>
            </form>
            <div className={styles.updateCart}><GreyButton>UPDATE CART</GreyButton></div>
            </div>

        </div>


        <div className={styles.cartAmount}>
            <div className={styles.totalsCard}>
                <h1>CART TOTALS</h1>
                <br></br>
                <div className={styles.subtotal}>
                    <p>SUBTOTAL</p>
                    <p>${totalMRP}</p>
                </div>
                <div className={styles.shippingRow}>
                    <p>SHIPPING</p>
                    <div>
                        <p>Free Shipping</p>
                        <p>Flat rate</p>
                    </div>
                </div>
            </div>

            <BlackButton>PROCEED TO CHECKOUT</BlackButton>
        </div>
    </div>
    )
}
