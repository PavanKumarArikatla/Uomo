import { useContext } from "react"
import { StylesContext } from "../../contexts/StylesContext"
import styles from "./Navigation.module.css"
import ItemsQuantity from "../../reusedComponents/ItemsQuantity"
import GreyButton from "../../reusedComponents/GreyButton"
import { NavLink } from "react-router-dom"

export default function Wishlist() {
    const {closePanel, wishlist, deleteItemFromWishlist} = useContext(StylesContext)

    return(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.head}>
                    <b>Wishlist({wishlist.length})</b>
                    <button onClick={closePanel} className="cursor-pointer">&#x1D5B7;</button>
                </div>
                <div className={styles.cartItems}>
                    {wishlist.length > 0 ? (
                        wishlist.map((item)=> (
                        <div key={item.id} className={styles.itemRow}>
                            <img src={item.image} alt={item.style} className={styles.image} />
                            <div className={styles.details}>
                              <h2 className="flex justify-between text-xs">
                                <b>{item.style}</b>
                                 <button 
                                onClick={() => deleteItemFromWishlist(item.id)}
                                className="cursor-pointer">
                                &#x1D5B7;
                                </button>
                               </h2> 
                               <h4>Color : {item.color}</h4>
                                <h4>Size : L</h4>
                                <h1>${Math.round(item.price)}</h1>
                            </div>
                        </div>
                    ))
                ):(
                    <p className="text-center">Your wishlist is empty</p>
                    )}
                </div>
                <div className={styles.actions}>
                <NavLink to="/dashboard/wishlist"><GreyButton onClick={closePanel}>VIEW CART</GreyButton></NavLink>
                </div>
                </div>
            </div>
            )
        }

