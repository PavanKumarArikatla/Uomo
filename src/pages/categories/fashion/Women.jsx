import { useContext } from "react";
import Card from "../../../reusedComponents/Card";
import Shopping from "../../../reusedComponents/Shopping";
import { StylesContext } from "../../../contexts/StylesContext";

export default function Women() {
  const { womenStyles, loading, addItems } = useContext(StylesContext);

  return (
    <div className="homecontainer">
      <Shopping>
        {loading
          ? "Loading..."
          : womenStyles?.map((card) => (
              <Card card={card} addItems={addItems} key={card.style} />
            ))}
      </Shopping>
    </div>
  );
}
