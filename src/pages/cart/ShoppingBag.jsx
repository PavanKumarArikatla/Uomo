import { useContext } from "react";
import { StylesContext } from "../../contexts/StylesContext";
import ItemsQuantity from "../../reusedComponents/ItemsQuantity";
import BlackButton from "../../reusedComponents/BlackButton"
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
    const platformFee = 1.99;
    return(
    <div className={styles.divider}>
        <div className="w-[75%]"> 
            <div className={styles.titles} style={{width:"90%"}}>
                <b>PRODUCT</b>
                <div className="flex justify-between gap-20">
                <b>PRICE</b>
                <b>QUANTITY</b>
                <b>SUBTOTAL</b>
                </div>
            </div>
            <br></br>
            <hr className="w-[95%]"></hr>

            {cartItems.map((item) => 
            <>
            <div className={styles.item} key={item.id}>
                <div className={styles.titles} style={{width:"100%"}}>
                <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.style} />
                    <p>{item.style}</p>
                </div>
                <div className="flex justify-between items-center gap-20 w-[55%]">
                    <p>${item.price}</p>
                    <div className="border-2 border-gray-200 h-10 w-24 flex justify-around items-center"><ItemsQuantity /></div>
                    <p>${item.price}</p>
                </div>
                </div>
                <button onClick={(() => deleteItem(item.id))} className={styles.deleteButton}>&#x1D5B7;</button>
            </div>
            <hr className="w-[95%]"></hr>
            </>
            )}

            <div className={styles.coupon}>
            <form className="border-1 border-gray-100 w-[50%]">
                <input type="text" placeholder="Coupon Code" className="outline-none" />
                <button>APPLY COUPON</button>
            </form>
            <button className="w-[10%]">UPDATE CART</button>
            </div>

        </div>


        <div className={styles.cartAmount}>
            <div className="p-8 border-2">
                <h1>CART TOTALS</h1>
                <br></br>
                <div className={styles.subtotal}>
                    <p>SUBTOTAL</p>
                    <p>${totalMRP}</p>
                </div>
                <div className="flex justify-between">
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