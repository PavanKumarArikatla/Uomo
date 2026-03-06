import styles from "../../components/navigationComponents/Navigation.module.css"

export default function Filters(){
    return(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.head}>
                    <p>FILTER</p>
                    <button onClick={closeButton} className="cursor-pointer">&#x1D5B7;</button>
                </div>
            </div>
        </div>
    )
}