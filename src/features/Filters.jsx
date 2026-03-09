import { useContext } from "react"
import { StylesContext } from "../contexts/StylesContext"
import styles from "./Filters.module.css"
import panelStyles from "../components/navigationComponents/Navigation.module.css"

export default function Filters(){
    const { closePanel, allData } = useContext(StylesContext)
    const brandCounts = Object.entries(
    allData.reduce((acc, { brand }) => {
        acc[brand] = (acc[brand] || 0) + 1;
        return acc;
    }, {})
    ).sort((a, b) => a[0].localeCompare(b[0]));
    return(
        <div className={panelStyles.overlay}>
            <div className={`${panelStyles.modal} ${styles.filterModal}`}>
                <div className={panelStyles.head}>
                    <b>FILTER BY</b>
                    <button onClick={closePanel} className="cursor-pointer">&#x1D5B7;</button>
                </div>

                <div className={styles.filters}>
                    
                    <h1 className={styles.titles}><b>PRODUCT CATEGORIES</b><button onClick={(cur) => !cur}>^</button></h1>
                    <div className={styles.productCategories}>
                        <section>
                            <p>Dresses</p>
                            <p>Sweatshirts</p>
                            <p>Jackets</p>
                            <p>Jeans</p>
                            <p>Man</p>
                        </section>
                        <section>
                            <p>Shorts</p>
                            <p>Swimwear</p>
                            <p>T-shirts & Tops</p>
                            <p>Trousers</p>
                            <p>Jumpers & Cardigans</p>
                        </section>
                    </div>

                    <h1 className={styles.titles}><b>COLORS</b><button onClick={(cur) => !cur}>^</button></h1>
                    <div className={styles.colors}>
                        <input type="checkbox" name="color" id="blue"/>
                        <label htmlFor="blue" hidden></label>

                        <input type="checkbox" name="color" id="yellow"/>
                        <label htmlFor="yellow" hidden></label>

                        <input type="checkbox" name="color" id="black"/>
                        <label htmlFor="black" hidden></label>

                        <input type="checkbox" name="color" id="lightblue"/>
                        <label htmlFor="lightblue" hidden></label>

                        <input type="checkbox" name="color" id="brown"/>
                        <label htmlFor="brown" hidden></label>

                        <input type="checkbox" name="color" id="orange"/>
                        <label htmlFor="orange" hidden></label>

                        <input type="checkbox" name="color" id="peach"/>
                        <label htmlFor="peach" hidden></label>

                        <input type="checkbox" name="color" id="white"/>
                        <label htmlFor="white" hidden></label>

                        <input type="checkbox" name="color" id="red"/>
                        <label htmlFor="red" hidden></label>

                        <input type="checkbox" name="color" id="green"/>
                        <label htmlFor="green" hidden></label>
                    </div>

                    
                    <h1 className={styles.titles}><b>SIZES</b><button onClick={(cur) => !cur}>^</button></h1>
                    <div className={styles.sizes}>
                        <button>XS</button>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                        <button>XXL</button>
                    </div>

                    <h1 className={styles.titles}><b>BRANDS</b><button onClick={(cur) => !cur}>^</button></h1>
                    <div className={styles.searchBrand}>
                        <input type="text" placeholder="Search" className={styles.searchInput} />
                        <i className="fa-brands fa-sistrix cursor-pointer"></i>
                    </div>
                    
                    <div className={styles.brandsList}>
                        {brandCounts.map(([brand, count]) => (
                            <div key={brand} className="flex justify-between w-[99%]">

                                <nav className="flex gap-1 items-center">
                                <input type="checkbox" id={brand} name="brand" />
                                <label htmlFor={brand}>{brand}</label>
                                </nav>

                                <p>{count}</p>

                            </div>
                        ))}                        
                    </div>

                </div>


            </div>
        </div>
    )
} 
