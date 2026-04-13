import { useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";

export default function ItemsQuantity({item}){

    const { setCartItems } = useContext(StylesContext)
    function qtyIncrement(){
        setCartItems(prev => 
            prev.map((curItem) => 
                curItem.id === item.id 
                    ? { ...curItem, quantity: curItem.quantity + 1 }
                    : curItem
            )
        )
    }

    function qtyDecrement(){
        setCartItems(prev => 
            prev.map(curItem => 
                curItem.id === item.id 
                ? { ...curItem, 
                    quantity: curItem.quantity > 1 
                    ? curItem.quantity - 1 
                    : 1}
                : curItem
            )
        )
    }

    console.log(item.quantity)
    return(
        <div className="flex gap-4 items-center">
            <button onClick={qtyDecrement} className="cursor-pointer">-</button>
            <p>{item.quantity}</p>
            <button onClick={qtyIncrement} className="cursor-pointer">+</button>
        </div>
    )
}