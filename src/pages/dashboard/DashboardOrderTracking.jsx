import styles from "./DashboardOrderTracking.module.css";

export default function DashboardOrderTracking(){
    return(
        <div className={styles.ordertrack1}>
            <div className={styles.ordertrack2}>
                <h1 className={styles.header}>ORDER TRACKING</h1>
                <p className={styles.orderpara}>To track your order please enter your Order ID in the box below and press the <br />
                "Track" button. This was given to you on your reciept and in the confirmation email <br />
                you should have received</p>
                <form action="" className={styles.orderform}>
                    <input type="text" className={styles.inp1} placeholder="Order ID"/>
                    <input type="text" className={styles.inp2} placeholder="Billing Email"/>
                    <button className={styles.orderbutton}>TRACK</button>
                </form>
            </div>
        </div>
    )
}