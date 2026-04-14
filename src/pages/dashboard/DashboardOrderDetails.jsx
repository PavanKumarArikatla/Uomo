import { useLocation } from "react-router-dom";
import styles from "./DashboardOrderDetails.module.css";
import { useState } from "react";

export default function DashboardOrderDetails() {
  const location = useLocation();
  const order = location.state;

   const [ratings, setRatings] = useState({});

   const handleRating = (id, value) => {
    setRatings((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  if (!order) {
    return <p>No order data found</p>;
  }

  return (
    <div>
      <h1 className={styles.orderdetails1}>Order Details</h1>

      {order.cartItems?.map((item) => (
        <div className={styles.orderdetails3} key={item.id} >
          <img src={item.image} alt={item.style} className={styles.orderdetails2}/>
          <div className={styles.orderdetails4}>
            <b>Type : {item.style}</b>
            <h4>Color : {item.color} </h4>
            <h4>Size : L</h4>
            <h1>Price : ${Math.round(item.price)}</h1>

            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={{
                    fontSize: "25px",
                    cursor: "pointer",
                    color:
                      star <= (ratings[item.id] || 0)
                        ? "gold"
                        : "gray",
                  }}
                  onClick={() => handleRating(item.id, star)}
                >
                  {"\u2605"}
                </span>
              ))}
            </div>

            <p>Your Rating: {ratings[item.id] || 0} / 5</p>
          
          </div>  
        </div>
      ))}
    </div>
  );
}