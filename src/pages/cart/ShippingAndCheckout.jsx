import { useContext, useState, useEffect} from "react";
import BlackButton from "../../reusedComponents/BlackButton";
import { StylesContext } from "../../contexts/StylesContext";
import styles from "./ShippingAndCheckout.module.css"


export default function ShippingAndCheckout(){
    const [paymentMethod, setPaymentMethod] = useState("");
    const { setCartState } = useContext(StylesContext)
    const [formData, setFormData] = useState({
        firstName: "",
        cartItems: [],
        lastName: "",
        companyName: "",
        country: "",
        streetAddress: "",
        townCity: "",
        postcode: "",
        province: "",
        phone: "",
        email: "",
        saveAddress: false,
        shipToDifferentAddress: false,
        orderNotes: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = (e) => {
  e.preventDefault();             
  if (!formData.firstName || !formData.email || !formData.phone) {
    alert("Please fill all required fields");
    return;
  } 

  if (formData.saveAddress) {
    localStorage.setItem("saveAddress", JSON.stringify(formData));
  }

  if (!paymentMethod) {
    alert("Please select a payment method");
    return;
  }

//   const orderData = {
//     orderNumber: ,
//     date: "27/11/2020", 
//     total: formData.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2),
//     paymentMethod: paymentMethod === "bankTransfer" ? "Direct Bank Transfer" : paymentMethod === "checkPayments" ? "Check payments" : paymentMethod === "cashOnDelivery" ? "Cash on delivery" : "PayPal",
//     items: formData.cartItems.map(item => ({    
//         name: item.name,
//         quantity: item.quantity,
//         totalPrice: (item.price * item.quantity).toFixed(2)
//     }))
//   };

//   localStorage.setItem("orderData", JSON.stringify([orderData]));

  console.log("Form Data:", formData);
  setCartState("confirmation");

  setFormData({
    firstName: "",
    lastName: "",       
    companyName: "",
    country: "",
    streetAddress: "",
    townCity: "",
    postcode: "",
    province: "",
    phone: "",
    email: "",
    saveAddress: false,
    shipToDifferentAddress: false,
    orderNotes: "",
  });


    };

     const cartItems = formData.cartItems || [];
                        const subtotal = cartItems.reduce((acc, item) => { return acc + (item.price * item.quantity) }, 0);
                        const vat = subtotal * 0.18;
                        const total = subtotal + vat;


    return (
      
        <div className={styles.divider}>
            <div>
                   <h1 className={styles.h1}>BILLING DETAILS</h1>
                   <br />
                     <form className={styles.form} onSubmit={handleSubmit}  >
                        <div className="flex gap-6 w-full">
                        <input className={`${styles.input} flex-1`} type="text" placeholder="First Name" name="firstName" onChange={handleChange} value={formData.firstName} required />
                        <input  className={`${styles.input} flex-1`} type="text" placeholder="Last Name" name="lastName" onChange={handleChange} value={formData.lastName} required />
                        </div>
                        <input className={styles.input} type="text" name="companyName" onChange={handleChange} value={formData.companyName} placeholder="Company Name (Optional)" />
                        <select name="country" id="country" value={formData.country} onChange={handleChange} className={styles.input}>
                            <option value=""></option>
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                            <option value="uk">United Kingdom</option>
                        </select>
                        <input className={styles.input} type="text" name="streetAddress" onChange={handleChange} value={formData.streetAddress} placeholder="Street Address *" required />
                        <input className={styles.input} type="text" />
                        <input className={styles.input} type="text" name="townCity" onChange={handleChange} value={formData.townCity} placeholder="Town/City *" required/>
                        <input className={styles.input} type="text" name="postcode" onChange={handleChange} value={formData.postcode} placeholder="Postcode/ZIP *" required />
                        <input className={styles.input} type="text" name="province" onChange={handleChange} value={formData.province} placeholder="Provience *" required />
                        <input className={styles.input} type="text" name="phone" onChange={handleChange} value={formData.phone} placeholder="Phone *" required/>
                        <input className={styles.input} type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Your Mail" required />
                        <h1><label><input type="checkbox" name="saveAddress" id="saveAddress" checked={formData.saveAddress} onChange={handleChange} /> Save Address</label></h1>
                        <h1><label><input type="checkbox" name="shipToDifferentAddress" id="shipToDifferentAddress" checked={formData.shipToDifferentAddress} onChange={handleChange} /> SHIP TO A DIFFERENT ADDRESS?</label></h1>
                        <textarea className={`h-40 ${styles.input}`} name="orderNotes" value={formData.orderNotes}  onChange={handleChange} id="" placeholder="Order Notes (optional)"></textarea>
                     </form>

            </div>

    
                <div className={styles.orderdetails}>
                    <div className={styles.table1}>
                        <p className={styles.h11}>YOUR ORDER</p>
                        <p className={styles.tableCell}>Product <span>Total</span></p>
                        <hr className={styles.hr}/> 
                        
                        
                        {cartItems.map((item, index) => (
                            <p className={`text-gray-400 ${styles.tableCell}`} key={index}>
                                {item.name} *{item.quantity} <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </p> 
                            
                        ))}  
                        <p className={`text-gray-400 ${styles.tableCell}`}> <span>${formData.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}</span></p>    
                        <p className={`text-gray-400 ${styles.tableCell}`}> <span>${formData.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}</span></p>
                        <hr className={styles.hr}/>

                        <p className={styles.tableCell}>Subtotal <span>${subtotal.toFixed(2)}</span></p>
                        <hr className={styles.hr}/>
                        <p className={styles.tableCell}>Shipping <span className="text-gray-400">Free shipping</span></p>
                        <hr className={styles.hr}/>
                        <p className={styles.tableCell}>VAT <span>${vat.toFixed(2)}</span></p>
                        <hr className={styles.hr}/>
                        <p className={styles.tableCell}>Total <span>${total.toFixed(2)}</span></p>
                    </div>
                
                    <div className={styles.bankTransfer}>
                        <h1><label><input type="radio" onChange={(e)=>setPaymentMethod(e.target.value)} name="payment" value="bankTransfer" /> Direct Bank Transfer</label></h1>
                        <p className={styles.p1}>Make your payment directly into our bank <br />
                         account. Please use your Order ID as the <br />
                          payment reference. Your order will not be <br />
                           shipped until the funds have cleared in our <br />
                            account.</p>
                            <h1><label ><input type="radio" name="payment" value="checkPayments" onChange={(e)=>setPaymentMethod(e.target.value)} />Check payments</label></h1>
                            <h1><label><input type="radio" name="payment" value="cashOnDelivery" onChange={(e)=>setPaymentMethod(e.target.value)} />Cash on delivery</label></h1>
                            <h1><label><input type="radio" name="payment" value="payPal" onChange={(e)=>setPaymentMethod(e.target.value)} />PayPal</label></h1>
                            <p>Your personal data will be used to process your order, support your <br />
                             experience throughout this website, and for other purposes <br />
                              described in our <span className="text-red-600">privacy policy.</span></p>
                    </div> 
                    <div className={styles.placeOrderBtn}><BlackButton onClick={handleSubmit} disabled={!paymentMethod || cartItems.length === 0}>
                        PLACE ORDER
                    </BlackButton></div>
                </div>
        
        </div>
    )
}