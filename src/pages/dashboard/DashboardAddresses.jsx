import { useState } from "react";
import styles from "./DashboardAddresses.module.css";

export default function DashboardAddresses() {

  const [addresses, setAddresses] = useState([
    {
      type: "Billing Address",
      name: "Daniel Robinson",
      street: "1418 River Drive, Suite 35 Cottonhall, CA 9622",
      country: "United States",
      email: "sale@uomo.com",
      phone: "+1 246-345-0695"
    },
    {
      type: "Shipping Address",
      name: "Daniel Robinson",
      street: "1418 River Drive, Suite 35 Cottonhall, CA 9622",
      country: "United States",
      email: "sale@uomo.com",
      phone: "+1 246-345-0695"
    }
  ]);

  const handleEdit = (index) => {
    const updatedStreet = prompt("Enter new  address:");
    if (!updatedStreet) return;
    const updatedAddresses = [...addresses];
    updatedAddresses[index].street = updatedStreet;
    setAddresses(updatedAddresses);
  };

  return (
    <section>

      <p className={styles.note}>
        The following addresses will be used on the checkout page by default.
      </p>
     
      <div className={styles.grid}>
        {addresses.map((item, index) => (
          <article key={index} className={styles.card}>
            <div className={styles.head}>
              <h2>{item.type}</h2>
              <button type="button" onClick={() => handleEdit(index)}>
                Edit
              </button>
            </div>
            <p>{item.name}</p>   
            <p>{item.street}</p>
            <p>{item.country}</p>
            <p className={styles.spacer}>{item.email}</p>
            <p>{item.phone}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

