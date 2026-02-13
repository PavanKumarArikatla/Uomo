import { useContext } from "react";
import Card from "../reusedComponents/Card";
import styles from "./TrendyLimited.module.css";
import { StylesContext } from "../contexts/StylesContext";
import { Link } from "react-router-dom";

export default function TrendyLimited({ style, products }) {
  const { addItems } = useContext(StylesContext);

  return (
    <div className={styles.mainthird}>
      <div className={styles.maintitle}>
        {style == "trendyProducts" ? (
          <>
            <p>OUR TRENDY <b>PRODUCTS</b></p>
            <div className={styles.categories}>
              <Link to="/" className="text-xl">ALL</Link>
              <Link to="/" className="text-xl">NEW ARRIVALS</Link>
              <Link to="/" className="text-xl">BEST SELLER</Link>
              <Link to="/" className="text-xl">TOP</Link>
            </div>
          </>
        ) : (
          <b>LIMITED EDITION</b>
        )}
      </div>
      <div className={styles.thirdblock}>
        {products?.map((card) => (
          <Card
            card={card}
            // image={card.image}
            addItems={addItems}
            // style={card.style}
            // price={card.price}
            key={card.style}
          />
        ))}

      </div>
        <small className={styles.seeAll}>{style == "trendyProducts" ? <Link to="/products" className="text-xs"><b>SEE ALL PRODUCTS</b> <hr></hr></Link> : ""}</small>
    </div>
  );
}
