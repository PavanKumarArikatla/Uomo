import { useContext } from "react"
import styles from "./FiltersSort.module.css"
import { StylesContext } from "../contexts/StylesContext"

export default function FilterSort(){
  const {sort, setSort, togglePanel} = useContext(StylesContext)
    return <div className={styles.filters}>
            <div>
              <h1>HOME / THE SHOP</h1>
            </div>
            <div className="flex gap-4">
              <p className="w-44 px-2 border-2">
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="newest">Newest</option>
                  <option value="Discount">Discount</option>
                  <option value="priceLowToHigh">Price: Low to High</option>
                  <option value="priceHighToLow">Price: High to Low</option>
                </select>
              </p>
              
              <p>|</p>
              <button onClick={() => {togglePanel("filter")}} className="cursor-pointer">Filter</button>
            </div>
          </div>
}