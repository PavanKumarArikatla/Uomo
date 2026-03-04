import styles from "./DashboardOrders.module.css";

const orders = [
  { id: "#2418", date: "October 27, 2020", status: "On hold", total: "$1,200.65 for 3 items" },
  { id: "#2418", date: "October 27, 2020", status: "On hold", total: "$1,200.65 for 3 items" },
  { id: "#2418", date: "October 27, 2020", status: "On hold", total: "$1,200.65 for 3 items" },
  { id: "#2418", date: "October 27, 2020", status: "On hold", total: "$1,200.65 for 3 items" },
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

