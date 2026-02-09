import { useContext } from "react";
import Card from "../../../reusedComponents/Card";
import Shopping from "../../../reusedComponents/Shopping";
import { StylesContext } from "../../../contexts/StylesContext";

export default function More() {
  const { mensStyles, loading, addItems } = useContext(StylesContext);
  return (
    <div className="homecontainer">
      <Shopping>
        {loading
          ? "Loading..."
          : mensStyles?.map((card) => (
              <Card card={card} addItems={addItems} key={card.style} />
            ))}
      </Shopping>
    </div>
  );
}
