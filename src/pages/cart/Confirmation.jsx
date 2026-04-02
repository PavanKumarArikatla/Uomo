import styles from "./Confirmation.module.css";
import { BsCheckCircleFill } from "react-icons/bs";
export default function Confirmation(){
   // const orderData = JSON.parse(localStorage.getItem("orderData")) || {};
   const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
   const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);  
   const vat = subtotal * 0.18;
   const total = subtotal + vat;

   

   // const orderData = {
   //  orderNumber: "",
   //  date: "27/11/2020",
   //    total: total.toFixed(2),
   //    paymentMethod: "Direct Bank Transfer",
   //    items: cartItems.map(item => ({
   //       name: item.name,
   //       quantity: item.quantity,
   //       totalPrice: (item.price * item.quantity).toFixed(2)
   //    }))
   // };

   
    return (
        <div>
       <BsCheckCircleFill className={styles.checkCircle}/>
       <p className={styles.orderCompleted}>Your order is completed!</p>
       <p className="text-gray-400 text-center">Thank you. Your order has been received.</p>
       <div className={styles.paymentDetails}>
        <span>
         <h3>Order Number</h3>
         <p>13119</p>
         </span>
            <span>
         <h3>Date</h3>
            <p>27/11/2020</p>
            </span>
         <span>
         <h3>Total</h3>
         <p>$40.10</p>
         </span>
         <span>
         <h3>Payment Method</h3>
            <p>Direct Bank Transfer</p> 
            </span>
       </div>
       <div>
        <div className={styles.table1}>
                                <p className={styles.h11}>YOUR ORDER</p>
                                <p className={styles.tableCell}>Product <span>Total</span></p>
                                <hr className={styles.hr}/>
                                 {cartItems.map((item, index) => (
                                    <p className={`text-gray-400 ${styles.tableCell}`} key={index}>
                                        {item.name} *{item.quantity} <span>${(item.price * item.quantity).toFixed(2)}</span>
                                    </p>
                                ))}
                                <hr className={styles.hr}/>
                                <p className={styles.tableCell}>Subtotal <span>${subtotal.toFixed(2)}</span></p>
                                <hr className={styles.hr}/>
                                <p className={styles.tableCell}>Shipping <span className="text-gray-400">Free shipping</span></p>
                                <hr className={styles.hr}/>
                                <p className={styles.tableCell}>VAT <span>${vat.toFixed(2)}</span></p>
                                <hr className={styles.hr}/>
                                <p className={styles.tableCell}>Total <span>${total.toFixed(2)}</span></p>
                            </div>
       </div>
       </div>
    )
}