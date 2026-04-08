import { useContext } from "react"
import { StylesContext } from "../contexts/StylesContext"


export default function ItemsQuantity(){
    const { itemQty, setItemQty } = useContext(StylesContext)

    return(
        <div className="flex gap-4 items-center">
            <button onClick={() => itemQty > 1 && setItemQty(itemQty => itemQty - 1)} className="cursor-pointer">-</button>
            <p>{itemQty}</p>
            <button onClick={() => setItemQty(itemQty => itemQty + 1)} className="cursor-pointer">+</button>
        </div>
    )
}