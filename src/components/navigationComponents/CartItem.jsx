import { useContext } from "react"
import styles from "./CartItem.module.css"
import { StylesContext } from "../../contexts/StylesContext"
import ItemsQuantity from "../../reusedComponents/ItemsQuantity"

export default function CartItem({item}){
    const {deleteItem} = useContext(StylesContext)
    console.log(item.quantity)
    return(
        <main className={styles.main}>
            <img src={item.image} alt={item.style} className={styles.image} />
            <div className={styles.details}>
                <h2 className="flex justify-between">
                    <b>{item.style}</b>
                    <button 
                        onClick={() => deleteItem(item.id)} 
                        className="cursor-pointer"
                        >&#x1D5B7;
                    </button>
                </h2>
                <h4>Color : {item.color}</h4>
                <h4>Size : L</h4>
                <div className="flex justify-between">
                    <ItemsQuantity item />
                    <h1>${Math.round(item.price)}</h1>
                </div>
            </div>
            <div className={styles.delete}>
                
                
            </div>
        </main>
    )
}