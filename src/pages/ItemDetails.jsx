import { useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import styles from "./ItemDetails.module.css";
import ProductTabs from "../components/ProductTabs/ProductTabs";
import ProductDetails  from "../components/ProductDetails/ProductDetails";
const sizesList = ["XS", "S", "M", "L", "XL"];
const colorsList = ["#000000", "#ff0000", "#808080"];

const detailsRows = [
  { label: "SKU", value: "UOM-7784" },
  { label: "Categories", value: "Men, Jackets, New Arrivals" },
  { label: "Tags", value: "Hoodie, Lightweight, Winter" },
  { label: "Designer", value: "Trevista Studio" },
];

const reviews = [
  {
    name: "John White",
    rating: 5,
    text: "Looks exactly as pictured. The fabric is lightweight but still holds shape very well.",
  },
  {
    name: "Sophia Rose",
    rating: 4,
    text: "Great fit and very comfortable. I would size up if you plan to wear layers underneath.",
  },
];

const relatedProducts = [
  { name: "Original Fit Jacket", price: "89.99" },
  { name: "Urban Hoodie", price: "74.99" },
  { name: "Core Zip Jacket", price: "79.99" },
  { name: "Cotton Vest", price: "62.99" },
];

function Stars({ count = 0 }) {
  return (
    <span className={styles.stars}>
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </span>
  );
}

function PlaceholderArt({ small = false }) {
  return (
    <div className={small ? styles.thumbArt : styles.mainArt}>
      <span className={styles.shapeCircle} />
      <span className={styles.shapeTriangle} />
      <span className={styles.shapeSmallCircle} />
    </div>
  );
}

function getImageSrc(imagePath = "") {
  if (!imagePath) return "";
  return imagePath.startsWith("./") ? imagePath.slice(1) : imagePath;
}

export default function ItemDetails() {
  const location = useLocation();
  const item = location.state ?? {};

  const galleryImages = useMemo(() => {
    if (Array.isArray(item.images) && item.images.length > 0) return item.images;
    if (item.image) return [item.image];
    return [];
  }, [item.image, item.images]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(0);
  }, [item.id, galleryImages.length]);

  const hasGalleryImages = galleryImages.length > 0;

  function handlePrevImage() {
    if (galleryImages.length <= 1) return;
    setSelectedIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1
    );
  }

  function handleNextImage() {
    if (galleryImages.length <= 1) return;
    setSelectedIndex((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <section className={styles.productSection}>
          
          <div className={styles.gallery}>
            <div className={styles.thumbs}>
              {hasGalleryImages ? (
                galleryImages.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    className={`${styles.thumb} ${
                      index === selectedIndex ? styles.thumbActive : ""
                    }`}
                    onClick={() => setSelectedIndex(index)}
                  >
                    <img
                      src={getImageSrc(image)}
                      alt=""
                      className={styles.thumbImage}
                    />
                  </button>
                ))
              ) : (
                <button className={styles.thumb}>
                  <PlaceholderArt small />
                </button>
              )}
            </div>

            <div className={styles.mainImage}>
              {hasGalleryImages ? (
                <div
                  className={styles.sliderTrack}
                  style={{
                    transform: `translateX(-${selectedIndex * 100}%)`,
                  }}
                >
                  {galleryImages.map((image, index) => (
                    <img
                      key={index}
                      src={getImageSrc(image)}
                      alt=""
                      className={styles.mainProductImage}
                    />
                  ))}
                </div>
              ) : (
                <PlaceholderArt />
              )}

              <button
                className={styles.imageArrowLeft}
                onClick={handlePrevImage}
              >
                &lt;
              </button>

              <button
                className={styles.imageArrowRight}
                onClick={handleNextImage}
              >
                &gt;
              </button>
            </div>
          </div>
<div>
  <ProductDetails/>
</div>

          {/*
          <div className={styles.productDetails}>
            <p className={styles.breadcrumbs}>
              {item?.gender}/ {item.brand} / {item.style}
            </p>

            <h1 className={styles.title}>{item.type}</h1>

            <p className={styles.price}>${item.price}</p>

            <p className={styles.summary}>
              A versatile puffer built for transitional weather.
            </p>

            <div className={styles.optionBlock}>
              <p className={styles.optionTitle}>Size</p>

              <div className={styles.sizeWrap}>
                <button className={styles.sizeBtn}>XS</button>
                <button className={styles.sizeBtn}>S</button>
                <button className={styles.sizeBtn}>M</button>
                <button className={styles.sizeBtn}>L</button>
                <button className={styles.sizeBtn}>XL</button>
              </div>
            </div>

            <div className={styles.buyRow}>
              <button className={styles.addToCart}>Add To Cart</button>
            </div>
          </div>
          */}
        </section>

        <ProductTabs />

        <div className={styles.reviewForm}>
          <h3>Write your review</h3>
          <Stars count={3} />
          <textarea placeholder="Your review" rows="4" />
          <input type="text" placeholder="Name *" />
          <input type="email" placeholder="Email *" />
          <button>Submit</button>
        </div>

        <section className={styles.relatedSection}>
          <h2>Related Products</h2>

          <div className={styles.relatedGrid}>
            {relatedProducts.map((item) => (
              <article key={item.name} className={styles.relatedCard}>
                <PlaceholderArt />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}