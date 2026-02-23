import { useContext } from "react"
import styles from "./CartItem.module.css"
import { StylesContext } from "../../contexts/StylesContext"

export default function CartItem({item}){
    const {deleteItem} = useContext(StylesContext)
    return(
        <main className={styles.main}>
            <img src={item.image} alt={item.style} className={styles.image} />
            <div className={styles.details}>
                <h2><b>{item.style}</b></h2>
                <h4>Color : {item.color}</h4>
                <h4>Size : L</h4>
                <h4 className="flex gap-5">
                    <button>-</button>
                    3
                    <button>+</button>
                </h4>
            </div>
            <div className={styles.delete}>
                <button 
                    onClick={() => deleteItem(item.id)} 
                    className="cursor-pointer"
                    >&#x1D5B7;
                </button>
                <h1>${Math.round(item.price)}</h1>
            </div>
        </main>
    )
}