import { useContext, useEffect, useMemo } from "react";
import { StylesContext } from "../contexts/StylesContext";
import { useSearchParams } from "react-router-dom";
import Card from "../reusedComponents/Card";
import Shopping from "../reusedComponents/Shopping";
import styles from "./SearchResults.module.css";

function parseFilters(searchParams) {
  return {
    categories: searchParams.get("category")?.split(",").filter(Boolean) || [],
    sizes: searchParams.get("size")?.split(",").filter(Boolean) || [],
    brands: searchParams.get("brand")?.split(",").filter(Boolean) || [],
    color: searchParams.get("color")?.split(",").filter(Boolean) || [],
    minPrice: searchParams.get("minPrice")
      ? Number(searchParams.get("minPrice"))
      : null,
    maxPrice: searchParams.get("maxPrice")
      ? Number(searchParams.get("maxPrice"))
      : null,
  };
}

export default function SearchResults() {
  const { sort, search, searchResults, addItems, setFilters } = useContext(StylesContext);
  const [searchParams] = useSearchParams();

  const appliedFilters = useMemo(
    () => parseFilters(searchParams),
    [searchParams],
  );

  useEffect(() => {
    setFilters((prev) => {
      const isUnchanged =
        JSON.stringify(prev) === JSON.stringify(appliedFilters);

      return isUnchanged ? prev : appliedFilters;
    });
  }, [appliedFilters, setFilters]);

  const filteredResults = useMemo(
    () =>
      (searchResults || []).filter((item) => {
        const price = Number(item.price || 0);
        const category = item.style || "";
        const color = item.color || "";
        const brand = item.brand || "";
        const sizes = item.size || [];

        if (
          appliedFilters.categories.length &&
          !appliedFilters.categories.includes(category)
        ) {
          return false;
        }

        if (
          appliedFilters.color.length &&
          !appliedFilters.color.includes(color)
        ) {
          return false;
        }

        if (
          appliedFilters.brands.length &&
          !appliedFilters.brands.includes(brand)
        ) {
          return false;
        }

        if (
          appliedFilters.sizes.length &&
          !sizes.some((size) => appliedFilters.sizes.includes(size))
        ) {
          return false;
        }

        if (
          appliedFilters.minPrice !== null &&
          price < appliedFilters.minPrice
        ) {
          return false;
        }

        if (
          appliedFilters.maxPrice !== null &&
          price > appliedFilters.maxPrice
        ) {
          return false;
        }

        return true;
      }),
    [appliedFilters, searchResults],
  );

  const sortedResults = useMemo(() => {
    const filteredProducts = [...filteredResults];

    switch (sort) {
      case "newest":
        filteredProducts.sort((a, b) => {
          const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;

          if (dateA !== dateB) {
            return dateB - dateA;
          }

          return Number(b.id || 0) - Number(a.id || 0);
        });
        break;
      case "Discount":
        filteredProducts.sort(
          (a, b) => Number(b.discount || 0) - Number(a.discount || 0),
        );
        break;
      case "priceLowToHigh":
        filteredProducts.sort(
          (a, b) => Number(a.price || 0) - Number(b.price || 0),
        );
        break;
      case "priceHighToLow":
        filteredProducts.sort(
          (a, b) => Number(b.price || 0) - Number(a.price || 0),
        );
        break;
      default:
        break;
    }

    return filteredProducts;
  }, [filteredResults, sort]);

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

      {sortedResults.length ? (
        <Shopping>
          {sortedResults.map((card) => (
            <Card
              key={card.id}
              card={card}
              addItems={addItems}
            />
          ))}
        </Shopping>
      ) : (
        <div className="text-center py-5">
          {search ? (
            <p>No item found named <b className="text-red-600">"{search}"</b></p>
          ) : (
            <p>No items match the selected filters.</p>
          )}
          <p>You might also like above styles.</p>
        </div>
      )}
    </div>
  );
}
