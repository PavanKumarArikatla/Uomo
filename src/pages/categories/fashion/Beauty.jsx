import { useContext } from "react";
import { StylesContext } from "../../../contexts/StylesContext";
import Card from "../../../reusedComponents/Card";
import Shopping from "../../../reusedComponents/Shopping";
import useFilteredSortedProducts from "../../../utils/useFilteredSortedProducts";

export default function Beauty() {
  const { limitedEditionProducts, loading, addItems } =
    useContext(StylesContext);
  const filteredProducts = useFilteredSortedProducts(limitedEditionProducts);

  return (
    <div className="homecontainer">
      <Shopping>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : filteredProducts.length ? (
          filteredProducts.map((card) => (
            <Card card={card} addItems={addItems} key={card.id} />
          ))
        ) : (
          <p className="text-center col-span-full">No items match the selected filters.</p>
        )}
      </Shopping>
    </div>
  );
}
