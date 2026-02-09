import { useContext } from "react";
import { StylesContext } from "../../../contexts/StylesContext";
import Card from "../../../reusedComponents/Card";
import Shopping from "../../../reusedComponents/Shopping";

export default function Beauty() {
  const { limitedEditionProducts, loading, addItems } =
    useContext(StylesContext);
  return (
    <div className="homecontainer">
      <Shopping>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          limitedEditionProducts?.map((card) => (
            <Card card={card} addItems={addItems} key={card.style} />
          ))
        )}
      </Shopping>
    </div>
  );
}
