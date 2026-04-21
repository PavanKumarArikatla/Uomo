import { useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import Card from "../reusedComponents/Card";
import Shopping from "../reusedComponents/Shopping";
import styles from "./SearchResults.module.css";
import useFilteredSortedProducts from "../utils/useFilteredSortedProducts";
import { useParams } from "react-router-dom";

export default function SearchResults() {

  const { allData, searchResults, loading, addItems } = useContext(StylesContext);
  const {type} = useParams()
  const categoryProducts = allData.filter(item => item.style === type)
  const filteredProducts = type ? useFilteredSortedProducts(categoryProducts) : useFilteredSortedProducts(searchResults);
  
  return (
    <div className="homecontainer">
      
      <div className={styles.beforeSearchContainer}>
        <h1 className="text-3xl font-bold text-center py-5 h-16">YOU MIGHT LIKE</h1>

        <div className={styles.beforeSearch}>
          <div>
            <img src={null} />
            <p>Women</p>
            <p>Tops</p>
          </div>
          <div>
            <img src={null} />
            <p>Mens</p>
            <p>Jeans</p>
          </div>
          <div>
            <img src={null} />
            <p>Women</p>
            <p>Caps</p>
          </div>
          <div>
            <img src={null} />
            <p>Kids</p>
            <p>Tops</p>
          </div>
          <div>
            <img src={null}/>
            <p>Formal</p>
            <p>Shoes</p>
          </div>
          <div>
            <img src={null}/>
            <p>Traditional</p>
            <p>Wear</p>
          </div>
          <div>
            <img src={null}/>
            <p>Women</p>
            <p>Tops</p>
          </div>
          <div>
            <img src={null}/>
            <p>Kids</p>
            <p>shoes</p>
          </div>
        </div>
      </div>

      <Shopping>
        {loading ? (
          "Loading..."
        ) : filteredProducts.length ? (
            filteredProducts.map((card) => (
                <Card card={card} addItems={addItems} searchRoute={card.type} key={card.id} />
              ))
        ) : <p className="text-center col-span-full">No items match the selected filters.</p>
        }
      </Shopping>
    </div>
  );
}
