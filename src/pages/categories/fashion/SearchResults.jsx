import { useContext } from "react";
import Card from "../../../reusedComponents/Card";
import Shopping from "../../../reusedComponents/Shopping";
import { StylesContext } from "../../../contexts/StylesContext";

export default function SearchResults() {
  const { searchResults, addItems } = useContext(StylesContext);
  return (
    <div className="homecontainer">
      {searchResults ? (
        <Shopping>
          {searchResults.map((card) => (
            <Card card={card} addItems={addItems} key={card.style} />
          ))}
        </Shopping>
      ) : (
        <div className="text-center py-5">Search for an item</div>
      )}
    </div>
  );
}
