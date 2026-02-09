import { Link } from "react-router-dom";
import styles from "./Eastside.module.css";

export default function Eastside({ products}) {
  return (
    <div className={styles.sixthblock}>
      <b className={styles.text}>UOMO</b>
      <div className={styles.sixth}>{products?.map((pic) => (
              <Link to="men" key={pic.id}>
                <img src={null} alt={pic.style} />
              </Link>
            ))}</div>
    </div>
  );
}
