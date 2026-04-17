import { useLocation } from "react-router-dom";
import styles from "./DashboardOrderDetails.module.css";
import { useState } from "react";

export default function DashboardOrderDetails() {
  const location = useLocation();
  const order = location.state || {};
  const cartItems = order.cartItems || [];

  const [ratings, setRatings] = useState({});

  const handleRating = (id, value) => {      
    setRatings((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  if (cartItems.length === 0) {
    return <p>No order data found</p>;
  }

 const updatedItems = order.cartItems.map(item => ({
  ...item,
  status: item.status ? item.status : item.isCancelled ? 
  "Cancelled" : item.isDelivered ? "Delivered" : "Arriving"
}));

  return (
    <div>
      <h1 className={styles.orderdetails1}>Order Details</h1>
        {updatedItems.map((item, index)=>(
        <div className={styles.orderdetails3} key={index} >
          <div>
          <b>Status : {item.status} </b>
          </div>
          <div className={styles.row}>
          <img src={item.image} alt={item.style} className={styles.orderdetails2}/>
          <div className={styles.orderdetails4}>
            <b>Type : {item.style}</b>
            <h4>Color : {item.color} </h4>
            <h4>Size : L</h4>
            <h1>Price : ${Math.round(item.price)}</h1>
          </div>
          <div>
            
          </div>
          </div>
               <div>
              {[1,2,3,4,5].map((star)=>( 
              <span key={star} onClick={()=>handleRating(index, star)} 
              style={{cursor:"pointer", color: "star <= (ratings[index] || 0)" ? "gold" : "gray"}}>
               {star <= (ratings[index] || 0) ? "\u2605" : "\u2606"} </span>
               ))}
            </div>
            <p>Your Rating : {ratings[index] || 0}/5</p>
        </div> 
      ))}
      
    </div>
  );
}