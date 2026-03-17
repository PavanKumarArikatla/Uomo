import { useContext } from "react";
import BlackButton from "../../reusedComponents/BlackButton";
import { StylesContext } from "../../contexts/StylesContext";


export default function ShippingAndCheckout(){
    const { setCartState } = useContext(StylesContext)
    return <BlackButton onClick={() => setCartState("confirmation")}>PROCEED TO CONFIRM</BlackButton>
}