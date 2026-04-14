import { useState } from "react";
import OrderTracking from "./DashboardOrderTracking";
import styles from "./DashboardOrders.module.css";
import { useNavigate } from "react-router-dom";

const orders = [
  { id: "#2418", date: "October 27, 2020", status: "On hold", total: "$1,200.65 for 3 items" },
  { id: "#2418", date: "October 27, 2020", status: "Placed", total: "$1,200.65 for 3 items" },
  { id: "#2418", date: "October 27, 2020", status: "On hold", total: "$1,200.65 for 3 items" },
  { id: "#2418", date: "October 27, 2020", status: "On hold", total: "$1,200.65 for 3 items" },
];

export default function DashboardOrders() {

  const navigate = useNavigate();

  const handleAction = (order) => {
    if (order.status === "On hold") {
      navigate("/dashboard/order-tracking", {state: order})
    } else{
      navigate("/dashboard/order-details", {state: order})
    }
  }

  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Order</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={`${order.id}-${index}`}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>{order.total}</td>
              <td>
                <button type="button" className={styles.actionBtn} onClick={()=>handleAction(order)}>
                  {order.status === "Placed" ? "View" : "Track"}
                </button>
                {order.status === "Delivered"
                ? "View Details"
                : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

