import { useContext, useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { StylesContext } from "../contexts/StylesContext"
import styles from "./Filters.module.css"
import panelStyles from "../components/navigationComponents/Navigation.module.css"

export default function Filters(){
    const [ searchParams, setSearchParams ] = useSearchParams({})
    const { closePanel, allData } = useContext(StylesContext)
    const [ selectedSizes, setSelectedSizes ] = useState([])
    const [ isFilterButtonOpen, setIsFilterButtonOpen ] = useState({
        productCategory: true,
        sizes: true,
        colors: true,
        brands: true,
        price: true
    })

    function clickedSize(selectSize){
        {setSelectedSizes(prev =>
        prev.includes(selectSize)
        ? prev.filter(s => s !== size)
        : setSearchParams({size: selectSize}) )}
    }

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
                        {isFilterButtonOpen.productCategory ? 
                        <button className="cursor-pointer" onClick={() => setIsFilterButtonOpen(prev => ({
                            ...prev,
                            productCategory: !prev.productCategory
                        }))}><i className="fa-solid fa-angle-up"></i></button>
                        : <button className="cursor-pointer" onClick={() => setIsFilterButtonOpen(prev => ({
                            ...prev,
                            productCategory: !prev.productCategory
                        }))}><i className="fa-solid fa-angle-down"></i></button>}
                    </h1>
                    {isFilterButtonOpen.productCategory && <div className={styles.productCategories}>
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
                        {isFilterButtonOpen.colors ? 
                        <button className="cursor-pointer" onClick={() => setIsFilterButtonOpen(prev => ({
                            ...prev,
                            colors: !prev.colors
                        }))}><i className="fa-solid fa-angle-up"></i></button>
                        : <button className="cursor-pointer" onClick={() => setIsFilterButtonOpen(prev => ({
                            ...prev,
                            colors: !prev.colors
                        }))}><i className="fa-solid fa-angle-down"></i></button>}
                    </h1>
                    {isFilterButtonOpen.colors && <div className={styles.colors}>
                        <input type="checkbox" id="blue" hidden />
                        <label htmlFor="blue" className={`${styles.color} ${styles.blue}`}></label>

                        <input type="checkbox" id="yellow" hidden />
                        <label htmlFor="yellow" className={`${styles.color} ${styles.yellow}`}></label>

                        <input type="checkbox" id="skyblue" hidden />
                        <label htmlFor="skyblue" className={`${styles.color} ${styles.skyblue}`}></label>
                        
                        <input type="checkbox" id="orange" hidden />
                        <label htmlFor="orange" className={`${styles.color} ${styles.orange}`}></label>

                        <input type="checkbox" id="brown" hidden />
                        <label htmlFor="brown" className={`${styles.color} ${styles.brown}`}></label>

                        <input type="checkbox" id="darkkhaki" hidden />
                        <label htmlFor="darkkhaki" className={`${styles.color} ${styles.darkkhaki}`}></label>

                        <input type="checkbox" id="tomato" hidden />
                        <label htmlFor="tomato" className={`${styles.color} ${styles.tomato}`}></label>

                        <input type="checkbox" id="darkseagreen" hidden />
                        <label htmlFor="darkseagreen" className={`${styles.color} ${styles.darkseagreen}`}></label>

                    </div>}

                    
                    <h1 className={styles.titles}>
                        <b>SIZES</b>
                        {isFilterButtonOpen.sizes ? 
                        <button className="cursor-pointer" onClick={() => setIsFilterButtonOpen(prev => ({
                            ...prev,
                            sizes: !prev.sizes
                        }))}><i className="fa-solid fa-angle-up"></i></button>
                        : <button className="cursor-pointer" onClick={() => setIsFilterButtonOpen(prev => ({
                            ...prev,
                            sizes: !prev.sizes
                        }))}><i className="fa-solid fa-angle-down"></i></button>}
                    </h1>
                    {isFilterButtonOpen.sizes && <div className={styles.sizes}>
                        <button className={selectedSizes.includes("xs") ? styles.selectedSize : styles.unselectedSize} onClick={()=> clickedSize("xs")}>XS</button>
                        <button className={selectedSizes.includes("s") ? styles.selectedSize : styles.unselectedSize} onClick={()=> clickedSize("s") }>S</button>
                        <button className={selectedSizes.includes("m") ? styles.selectedSize : styles.unselectedSize} onClick={()=> clickedSize("m") }>M</button>
                        <button className={selectedSizes.includes("l") ? styles.selectedSize : styles.unselectedSize} onClick={()=> clickedSize("l") }>L</button>
                        <button className={selectedSizes.includes("xl") ? styles.selectedSize : styles.unselectedSize} onClick={()=> clickedSize("xl") }>XL</button>
                        <button className={selectedSizes.includes("xxl") ? styles.selectedSize : styles.unselectedSize} onClick={()=> clickedSize("xxl") }>XXL</button>
                    </div>}

                    <h1 className={styles.titles}>
                        <b>BRANDS</b>
                        {isFilterButtonOpen.brands ? 
                        <button className="cursor-pointer" onClick={() => setIsFilterButtonOpen(prev => ({
                            ...prev,
                            brands: !prev.brands
                        }))}><i className="fa-solid fa-angle-up"></i></button>
                        : <button className="cursor-pointer" onClick={() => setIsFilterButtonOpen(prev => ({
                            ...prev,
                            brands: !prev.brands
                        }))}><i className="fa-solid fa-angle-down"></i></button>}
                    </h1>
                    {isFilterButtonOpen.brands && <>
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
                        {isFilterButtonOpen.price ? 
                        <button className="cursor-pointer" onClick={() => setIsFilterButtonOpen(prev => ({
                            ...prev,
                            price: !prev.price
                        }))}><i className="fa-solid fa-angle-up"></i></button>
                        : <button className="cursor-pointer" onClick={() => setIsFilterButtonOpen(prev => ({
                            ...prev,
                            price: !prev.price
                        }))}><i className="fa-solid fa-angle-down"></i></button>}
                    </h1>
                    {isFilterButtonOpen.price && (
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
