import { useContext, useEffect, useMemo, useState } from "react"
import { useSearchParams, NavLink } from "react-router-dom";
import { defaultFilters, StylesContext } from "../contexts/StylesContext"
import BlackButton from "../reusedComponents/BlackButton"
import styles from "./Filters.module.css"
import panelStyles from "../components/navigationComponents/Navigation.module.css"

export default function Filters(){
    const [, setSearchParams] = useSearchParams()
    const { closePanel, allData, filters, setFilters } = useContext(StylesContext)
    const [ isFilterButtonOpen, setIsFilterButtonOpen ] = useState({
        productCategory: true,
        sizes: true,
        colors: true,
        brands: true,
        price: true
    })
    const [serachBrand, setSearchBrand] = useState("")

    function selectedFilter(filterType, selectedFilterType) {
    setFilters((prev) => {
        const updatedFilters = prev[filterType].includes(selectedFilterType)
        ? prev[filterType].filter((s) => s !== selectedFilterType)
        : [...prev[filterType], selectedFilterType];

        return {
        ...prev,
        [filterType]: updatedFilters,
        };
    });
    }

    const { minPrice, maxPrice } = useMemo(() => {
        const prices = allData.map(item => Number(item?.price)).filter(Number.isFinite)
        if (!prices.length) return { minPrice: 0, maxPrice: 0 }
        return { minPrice: Math.min(...prices), maxPrice: Math.max(...prices) }
    }, [allData])
    const [priceMin, setPriceMin] = useState(minPrice)
    const [priceMax, setPriceMax] = useState(maxPrice)
    useEffect(() => {
        setPriceMin(filters.minPrice ?? minPrice)
        setPriceMax(filters.maxPrice ?? maxPrice)
    }, [filters.minPrice, filters.maxPrice, minPrice, maxPrice])
    const rangeSpan = Math.max(maxPrice - minPrice, 1)
    const minPercent = ((priceMin - minPrice) / rangeSpan) * 100
    const maxPercent = ((priceMax - minPrice) / rangeSpan) * 100

    function applyFilters() {
    const nextMinPrice = priceMin <= minPrice ? null : priceMin;
    const nextMaxPrice = priceMax >= maxPrice ? null : priceMax;
    const params = new URLSearchParams();

    if (filters.categories !== "") {params.set("category", filters.categories);}
    if (filters.sizes.length > 0) {params.set("size", filters.sizes.join(","));}
    if (filters.color.length > 0) {params.set("color", filters.color.join(","));}
    if (filters.brands.length > 0) {params.set("brand", filters.brands.join(","));}
    if (nextMinPrice !== null) {params.set("minPrice", nextMinPrice);}
    if (nextMaxPrice !== null) {params.set("maxPrice", nextMaxPrice);}

    setFilters((prev) => {
        if (prev.minPrice === nextMinPrice && prev.maxPrice === nextMaxPrice) {
            return prev;
        }
        return {
            ...prev,
            minPrice: nextMinPrice,
            maxPrice: nextMaxPrice,
        };
    });

    setSearchParams(params);

    closePanel();
}

    function clearFilters() {
        setFilters(defaultFilters());
        setPriceMin(minPrice);
        setPriceMax(maxPrice);
        setSearchParams(new URLSearchParams());
    }
    
    const brandCounts = Object.entries(
    allData.reduce((acc, { brand }) => {
        acc[brand] = (acc[brand] || 0) + 1;
        return acc;
    }, {})
    ).sort((a, b) => a[0].localeCompare(b[0]));

    const filteredBrandCounts = brandCounts.filter(([brand]) =>
        brand.toLowerCase().includes(serachBrand.toLowerCase()),
    );
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
                            <NavLink to="category/dresses"><p>Dresses</p></NavLink>
                            <NavLink to="category/sweatshirts"><p>Sweatshirts</p></NavLink>
                            <NavLink to="category/jackets"><p>Jackets</p></NavLink>
                            <NavLink to="category/jeans"><p>Jeans</p></NavLink>
                            <NavLink to="category/men"><p>Men</p></NavLink>
                        </section>
                        <section>
                            <NavLink to="category/shorts"><p>Shorts</p></NavLink>
                            <NavLink to="category/swimwear"><p>Swimwear</p></NavLink>
                            <NavLink to="category/tshirts&tops"><p>T-shirts & Tops</p></NavLink>
                            <NavLink to="category/trousers"><p>Trousers</p></NavLink>
                            <NavLink to="category/jumpers&cardigans"><p>Jumpers & Cardigans</p></NavLink>
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
                        <input type="checkbox" id="blue" hidden checked={filters.color.includes("blue")} onChange={() => selectedFilter("color", "blue")} />
                        <label htmlFor="blue" className={`${styles.color} ${styles.blue}`}></label>

                        <input type="checkbox" id="yellow" hidden checked={filters.color.includes("yellow")} onChange={() => selectedFilter("color", "yellow")} />
                        <label htmlFor="yellow" className={`${styles.color} ${styles.yellow}`}></label>

                        <input type="checkbox" id="skyblue" hidden checked={filters.color.includes("skyblue")} onChange={() => selectedFilter("color", "skyblue")} />
                        <label htmlFor="skyblue" className={`${styles.color} ${styles.skyblue}`}></label>
                        
                        <input type="checkbox" id="orange" hidden checked={filters.color.includes("orange")} onChange={() => selectedFilter("color", "orange")} />
                        <label htmlFor="orange" className={`${styles.color} ${styles.orange}`}></label>

                        <input type="checkbox" id="brown" hidden checked={filters.color.includes("brown")} onChange={() => selectedFilter("color", "brown")} />
                        <label htmlFor="brown" className={`${styles.color} ${styles.brown}`}></label>

                        <input type="checkbox" id="darkkhaki" hidden checked={filters.color.includes("darkkhaki")} onChange={() => selectedFilter("color", "darkkhaki")} />
                        <label htmlFor="darkkhaki" className={`${styles.color} ${styles.darkkhaki}`}></label>

                        <input type="checkbox" id="tomato" hidden checked={filters.color.includes("tomato")} onChange={() => selectedFilter("color", "tomato")} />
                        <label htmlFor="tomato" className={`${styles.color} ${styles.tomato}`}></label>

                        <input type="checkbox" id="darkseagreen" hidden checked={filters.color.includes("darkseagreen")} onChange={() => selectedFilter("color", "darkseagreen")} />
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
                        <button className={filters.sizes.includes("xs") ? styles.selectedSize : styles.unselectedSize} onClick={()=> selectedFilter("sizes" ,"xs")}>XS</button>
                        <button className={filters.sizes.includes("s") ? styles.selectedSize : styles.unselectedSize} onClick={()=> selectedFilter("sizes" ,"s") }>S</button>
                        <button className={filters.sizes.includes("m") ? styles.selectedSize : styles.unselectedSize} onClick={()=> selectedFilter("sizes" ,"m") }>M</button>
                        <button className={filters.sizes.includes("l") ? styles.selectedSize : styles.unselectedSize} onClick={()=> selectedFilter("sizes" ,"l") }>L</button>
                        <button className={filters.sizes.includes("xl") ? styles.selectedSize : styles.unselectedSize} onClick={()=> selectedFilter("sizes" ,"xl") }>XL</button>
                        <button className={filters.sizes.includes("xxl") ? styles.selectedSize : styles.unselectedSize} onClick={()=> selectedFilter("sizes" ,"xxl") }>XXL</button>
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
                            <input
                                type="text"
                                placeholder="Search"
                                className={styles.searchInput}
                                value={serachBrand}
                                onChange={(event) => setSearchBrand(event.target.value)}
                            />
                            <i className="fa-brands fa-sistrix cursor-pointer"></i>
                        </div>
                        <div className={styles.brandsList}>
                            {filteredBrandCounts.map(([brand, count]) => (
                                <div key={brand} className="flex justify-between w-[99%]">
                                    <nav className="flex gap-1 items-center">
                                        <input type="checkbox" id={brand} name="brand" checked={filters.brands.includes(brand)} onChange={() => selectedFilter("brands", brand)} />
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

                    <div className={styles.actions}>
                        <button onClick={clearFilters} className={styles.resetButton}>Clear Filters</button>
                        <BlackButton onClick={applyFilters}>Apply Filters</BlackButton>
                    </div>
                </div>


            </div>
        </div>
    )
} 
