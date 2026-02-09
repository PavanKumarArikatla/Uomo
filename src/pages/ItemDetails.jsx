import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import styles from "./ItemDetails.module.css";
import AddItemOrderButton from "../reusedComponents/AddItemOrderButton";
import BackButton from "../reusedComponents/BackButton";

export default function ItemDetails() {
  const { addItems, addItemsToWishlist } = useContext(StylesContext);
  //  receiving props(card as item) through <Link>
  const location = useLocation();
  const item = location.state;
  const images = item.images;

  return (
    <div className="homecontainer">
      <BackButton />

      <div className={styles.item}>
        <div className={styles.images}>
          {/* <img src={item.image} alt={item.style} />
          <img src={item.image} alt={item.style} /> */}
          {images.map((image) => (
            <img src={image} />
          ))}
        </div>

        <div className={styles.details}>
          <strong>{item.brand}</strong>
          {item.type}
          <hr></hr>

          <pre className={styles.price}>
            $
            {(
              Number(item.price) -
              Number(item.price) * (Number(item.discount) / 100)
            ).toFixed(2)}{" "}
            <small className="text-stone-400">
              <span className="line-through"> ${item.price}</span>
            </small>{" "}
            <small>({item.discount}% off)</small>
          </pre>

          <small className="text-teal-700">Inclusive of all taxes</small>
          <ul className={styles.list}>
            <li>XS</li>
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
          </ul>
          <div className={styles.buttons}>
            <AddItemOrderButton onClick={() => addItems(item)}>
              Add to bag
            </AddItemOrderButton>
            <AddItemOrderButton onClick={() => addItemsToWishlist(item)}>
              Move to wishlist
            </AddItemOrderButton>
          </div>
        </div>
      </div>
    </div>
  );
}
