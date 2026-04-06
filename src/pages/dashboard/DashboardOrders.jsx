import styles from "./DashboardOrders.module.css";

const orders = [
  { id: "#2218", date: "March 27, 2025", status: "On hold", total: "$5,200.65 for 3 items" },
  { id: "#2118", date: "October 27, 2024", status: "On hold", total: "$1,600.5 for 2 items" },
  { id: "#2018", date: "September 27, 2023", status: "On hold", total: "$1,200.65 for 1 items" },
  { id: "#2318", date: "October 27, 2026", status: "On hold", total: "$3,800.65 for 4 items" },
];

export default function DashboardOrders() {
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
                <button type="button" className={styles.actionBtn}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

