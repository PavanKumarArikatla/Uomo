import { useContext } from "react";
import Card from "../../../reusedComponents/Card";
import Shopping from "../../../reusedComponents/Shopping";
import { StylesContext } from "../../../contexts/StylesContext";
import useFilteredSortedProducts from "../../../utils/useFilteredSortedProducts";

export default function More() {
  const { mensStyles, loading, addItems } = useContext(StylesContext);
  const filteredProducts = useFilteredSortedProducts(mensStyles);

  return (
    <div className="homecontainer">
      <Shopping>
        {loading ? (
          "Loading..."
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
