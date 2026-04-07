import { useContext } from "react"
import { StylesContext } from "../../contexts/StylesContext"

export default function Wishlist() {

    const {wishlist} = useContext(StylesContext)

    return(
        <div>
            {wishlist.length === 0 ? (
                <h2>Your Wishlist is empty ❤</h2>
            ) : (
             wishlist.map((item)=>(
                <div key={item.id}>
                    <img src={item.iamge} width="100" alt={item.style}/>
                    <p>{item.style}</p>
                </div>
            ))
        )}
        </div>
    )
}

