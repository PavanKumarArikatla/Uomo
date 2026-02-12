import { useContext, useEffect, useState } from "react";
import { StylesContext } from "../../../contexts/StylesContext";
import Card from "../../../reusedComponents/Card";
import Shopping from "../../../reusedComponents/Shopping";
import Footer from "../../../components/Footer";
import styles from "./SearchResults.module.css";

export default function SearchResults() {
  const { search, searchResults, addItems } = useContext(StylesContext);
  const [sort, setSort] = useState("newest");
  let [sortedResults, setSortedResults] = useState([]);


  useEffect(() => {
    if (searchResults) {
      sortedResults = [...searchResults]; 
      switch (sort) {
        case "newest":
          sortedResults.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));  
          break;
        case "Discount":
          sortedResults.sort((a, b) => b.discount - a.discount);
          break;
        case "priceLowToHigh":
          sortedResults.sort((a, b) => a.price - b.price);
          break;
        case "priceHighToLow":
          sortedResults.sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }
      setSortedResults(sortedResults);
    }
  }, [sort, searchResults]);
  return (
    <div className="homecontainer">

      <div className={styles.beforeSearchContainer}>
        <h1 className="text-3xl font-bold text-center py-5 h-16">YOU MIGHT LIKE</h1>

        <div className={styles.beforeSearch}>
          <div>
            <img src="" />
            <p>Women</p>
            <p>Tops</p>
          </div>
          <div>
            <img src="" />
            <p>Mens</p>
            <p>Jeans</p>
          </div>
          <div>
            <img src="" />
            <p>Women</p>
            <p>Caps</p>
          </div>
          <div>
            <img src="" />
            <p>Kids</p>
            <p>Tops</p>
          </div>
          <div>
            <img src=""/>
            <p>Formal</p>
            <p>Shoes</p>
          </div>
          <div>
            <img src=""/>
            <p>Traditional</p>
            <p>Wear</p>
          </div>
          <div>
            <img src=""/>
            <p>Women</p>
            <p>Tops</p>
          </div>
          <div>
            <img src=""/>
            <p>Kids</p>
            <p>shoes</p>
          </div>
        </div>
      </div>

      <div className={styles.filters}>
        <div>
          <h1>HOME / THE SHOP</h1>
        </div>
        <div className="flex gap-4">
          <p className="w-44 px-2 border-2">
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="newest"><b>Newest</b></option>
              <option value="Discount"><b>Discount</b></option>
              <option value="priceLowToHigh"><b>Price: Low to High</b></option>
              <option value="priceHighToLow"><b>Price: High to Low</b></option>
            </select>
          </p>
          
          <p>|</p>
          <button>Filter</button>
        </div>
      </div>

      {sortedResults.length ? (
        <Shopping>
          {sortedResults.map((card) => (
            <Card
              key={card._id || card.style}
              card={card}
              addItems={addItems}
            />
          ))}
        </Shopping>
      ) : (
        <div className="text-center py-5">
          <p>No item found named <b className="text-red-600">"{search}"</b></p>
          <p>You might also like above styles</p>
        </div>
      )}

      <br />
      <br />
      <Footer />
    </div>
  );
}
