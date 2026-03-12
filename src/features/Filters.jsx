import { useContext, useEffect, useMemo, useState } from "react"
import { StylesContext } from "../contexts/StylesContext"
import styles from "./Filters.module.css"
import panelStyles from "../components/navigationComponents/Navigation.module.css"

export default function Filters(){
    const { closePanel, allData } = useContext(StylesContext)
    const [ openFilterButton, setOpenFilterButton ] = useState({
        productCategory: true,
        sizes: true,
        colors: true,
        brands: true,
        price: true
    })
    const { minPrice, maxPrice } = useMemo(() => {
        const prices = allData.map(item => Number(item?.price)).filter(Number.isFinite)
        if (!prices.length) return { minPrice: 0, maxPrice: 0 }
        return { minPrice: Math.min(...prices), maxPrice: Math.max(...prices) }
    }, [allData])
    const [priceMin, setPriceMin] = useState(minPrice)
    const [priceMax, setPriceMax] = useState(maxPrice)
    useEffect(() => {
        setPriceMin(minPrice)
        setPriceMax(maxPrice)
    }, [minPrice, maxPrice])
    const rangeSpan = Math.max(maxPrice - minPrice, 1)
    const minPercent = ((priceMin - minPrice) / rangeSpan) * 100
    const maxPercent = ((priceMax - minPrice) / rangeSpan) * 100
    
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
                    
                    <h1 className={styles.titles}>
                        <b>PRODUCT CATEGORIES</b>
                        {openFilterButton.productCategory ? 
                        <button onClick={() => setOpenFilterButton(prev => ({
                            ...prev,
                            productCategory: !prev.productCategory
                        }))}><i class="fa-solid fa-angle-up"></i></button>
                        : <button onClick={() => setOpenFilterButton(prev => ({
                            ...prev,
                            productCategory: !prev.productCategory
                        }))}><i class="fa-solid fa-angle-down"></i></button>}
                    </h1>
                    {openFilterButton.productCategory && <div className={styles.productCategories}>
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
                    }

                    <h1 className={styles.titles}>
                        <b>COLORS</b>
                        {openFilterButton.colors ? 
                        <button onClick={() => setOpenFilterButton(prev => ({
                            ...prev,
                            colors: !prev.colors
                        }))}><i class="fa-solid fa-angle-up"></i></button>
                        : <button onClick={() => setOpenFilterButton(prev => ({
                            ...prev,
                            colors: !prev.colors
                        }))}><i class="fa-solid fa-angle-down"></i></button>}
                    </h1>
                    {openFilterButton.colors && <div className={styles.colors}>
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
                    </div>}

                    
                    <h1 className={styles.titles}>
                        <b>SIZES</b>
                        {openFilterButton.sizes ? 
                        <button onClick={() => setOpenFilterButton(prev => ({
                            ...prev,
                            sizes: !prev.sizes
                        }))}><i class="fa-solid fa-angle-up"></i></button>
                        : <button onClick={() => setOpenFilterButton(prev => ({
                            ...prev,
                            sizes: !prev.sizes
                        }))}><i class="fa-solid fa-angle-down"></i></button>}
                    </h1>
                    {openFilterButton.sizes && <div className={styles.sizes}>
                        <button>XS</button>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                        <button>XXL</button>
                    </div>}

                    <h1 className={styles.titles}>
                        <b>BRANDS</b>
                        {openFilterButton.brands ? 
                        <button onClick={() => setOpenFilterButton(prev => ({
                            ...prev,
                            brands: !prev.brands
                        }))}><i class="fa-solid fa-angle-up"></i></button>
                        : <button onClick={() => setOpenFilterButton(prev => ({
                            ...prev,
                            brands: !prev.brands
                        }))}><i class="fa-solid fa-angle-down"></i></button>}
                    </h1>
                    {openFilterButton.brands && <>
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
                    </>}

                    <h1 className={styles.titles}>
                        <b>PRICE</b>
                        {openFilterButton.price ? 
                        <button onClick={() => setOpenFilterButton(prev => ({
                            ...prev,
                            price: !prev.price
                        }))}><i class="fa-solid fa-angle-up"></i></button>
                        : <button onClick={() => setOpenFilterButton(prev => ({
                            ...prev,
                            price: !prev.price
                        }))}><i class="fa-solid fa-angle-down"></i></button>}
                    </h1>
                    {openFilterButton.price && (
                        <div className={styles.priceSection}>
                            <div className={styles.rangeWrap}>
                                <div className={styles.sliderTrack}></div>
                                <div className={styles.sliderFill} style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}></div>
                                <input type="range" min={minPrice} max={maxPrice} value={priceMin} step="1" onChange={(event) => setPriceMin(Math.min(Number(event.target.value), priceMax - 1))} className={styles.range} />
                                <input type="range" min={minPrice} max={maxPrice} value={priceMax} step="1" onChange={(event) => setPriceMax(Math.max(Number(event.target.value), priceMin + 1))} className={styles.range} />
                            </div>
                            <div className={styles.priceLabels}>
                                <span>Min Price: ${priceMin}</span>
                                <span>Max Price: ${priceMax}</span>
                            </div>
                        </div>
                    )}
                    

                </div>


            </div>
        </div>
    )
} 
