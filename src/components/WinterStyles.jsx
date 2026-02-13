import { Link } from "react-router-dom";
import styles from "./WinterStyles.module.css";

export default function WinterStyles() {
  return (
    <div className={styles.fifth} id="root">
      <div className="bg-red-700">
          <p className="bg-black opacity-50"><img src={"../../image.jpg"} alt="Jackets"/></p>
          <span className={styles.text}>
            <p>STARTING AT $19</p>
            <b>Jackets</b>
            <p><Link to="/beauty" className="text-xs underline">Shop Now</Link></p>
          </span>
      </div>

      <div>
          <img src={"../../image.jpg"} alt="Hoodie" />
          <span className={styles.text}>
            <p>STARTING AT $39</p>
            <b>Hoodies</b>
            <p><Link to="/more" className="text-xs underline">Shop Now</Link></p>
          </span>
      </div>
    </div>
  );
}
