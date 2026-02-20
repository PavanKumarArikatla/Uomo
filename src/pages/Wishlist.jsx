import { useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import Item from "./Item";

export default function Wishlist() {
  const { wishlist } = useContext(StylesContext);
  console.log(typeof wishlist);
  return (
    <div className="homecontainer">

      {wishlist.length > 0 ? (
        wishlist.map((item) => (
          <Item item={item} key={item.id} type="wishlist" />
        ))
      ) : (
        <p className="text-center">Your wishlist is empty</p>
      )}
    </div>
  );
}
