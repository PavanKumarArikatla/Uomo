import { useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Footer from "../components/Footer";
import styles from "./ItemDetails.module.css";

const detailsRows = [
  { label: 'SKU', value: 'UOM-7784' },
  { label: 'Categories', value: 'Men, Jackets, New Arrivals' },
  { label: 'Tags', value: 'Hoodie, Lightweight, Winter' },
  { label: 'Designer', value: 'Trevista Studio' },
]

const reviews = [
  {
    name: 'John White',
    rating: 5,
    text: 'Looks exactly as pictured. The fabric is lightweight but still holds shape very well.'
  },
  {
    name: 'Sophia Rose',
    rating: 4,
    text: 'Great fit and very comfortable. I would size up if you plan to wear layers underneath.'
  },
]

const relatedProducts = [
  { name: 'Original Fit Jacket', price: '$89' },
  { name: 'Urban Hoodie', price: '$74' },
  { name: 'Core Zip Jacket', price: '$79' },
  { name: 'Cotton Vest', price: '$62' },
]

function Stars({ count = 0 }) {
  return (
    <span className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {'\u2605'.repeat(count)}
      {'\u2606'.repeat(5 - count)}
    </span>
  )
}

function PlaceholderArt({ small = false }) {
  return (
    <div className={small ? styles.thumbArt : styles.mainArt}>
      <span className={styles.shapeCircle} />
      <span className={styles.shapeTriangle} />
      <span className={styles.shapeSmallCircle} />
    </div>
  )
}

function getImageSrc(imagePath = "") {
  if (!imagePath) return "";
  return imagePath.startsWith("./") ? imagePath.slice(1) : imagePath;
}

export default function ItemDetails() {
  //  receiving props(card as item) through <Link>
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
                        aria-label={`View image ${index + 1}`}
                        onClick={() => setSelectedIndex(index)}
                      >
                        <img
                          src={getImageSrc(image)}
                          alt={`${item.style ?? "Product"} thumbnail ${index + 1}`}
                          className={styles.thumbImage}
                          loading="eager"
                          decoding="async"
                        />
                      </button>
                    ))
                  ) : (
                    <button className={styles.thumb} aria-label="No image available">
                      <PlaceholderArt small />
                    </button>
                  )}
                </div>
                <div className={styles.mainImage}>
                  {hasGalleryImages ? (
                    <div
                      className={styles.sliderTrack}
                      style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                    >
                      {galleryImages.map((image, index) => (
                        <img
                          key={`${image}-main-${index}`}
                          src={getImageSrc(image)}
                          alt={`${item.style ?? "Product"} image ${index + 1}`}
                          className={styles.mainProductImage}
                          loading="eager"
                          decoding="async"
                        />
                      ))}
                    </div>
                  ) : (
                    <PlaceholderArt />
                  )}
                  <button
                    className={styles.imageArrowLeft}
                    aria-label="Previous image"
                    onClick={handlePrevImage}
                    disabled={galleryImages.length <= 1}
                  >
                    &lt;
                  </button>
                  <button
                    className={styles.imageArrowRight}
                    aria-label="Next image"
                    onClick={handleNextImage}
                    disabled={galleryImages.length <= 1}
                  >
                    &gt;
                  </button>
                </div>
              </div>
    
              <div className={styles.productDetails}>
                <p className={styles.breadcrumbs}>{item?.gender}/ {item.brand} / {item.style}</p>
                <h1 className={styles.title}>{item.type}</h1>
                <p className={styles.price}>${item.price}</p>
                <p className={styles.summary}>
                  A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.
                </p>
                

                <div className={styles.buyRow}>
                  <div className={styles.qty}>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <button className={styles.addToCart}>Add to Cart</button>
                </div>
                <div className={styles.meta}>
                  <p>
                    <strong>SKU:</strong> UOM-7784
                  </p>
                  <p>
                    <strong>Category:</strong> Men, Jackets
                  </p>
                  <p>
                    <strong>Tags:</strong> Hooded, Lightweight, New
                  </p>
                </div>
              </div>
            </section>
    
            <section className={styles.tabsSection}>
              <div className={styles.tabs}>
                <button className={styles.tabActive}>Description</button>
                <button>Additional Information</button>
                <button>Reviews (2)</button>
              </div>
              <div className={styles.description}>
                <h2>Light and weather-ready made for movement</h2>
                <p>
                  Designed for city commutes and weekend travel, this jacket uses high-loft insulation with a breathable shell and adjustable hood.
                  The finish is matte and minimal, giving it an elevated everyday look.
                </p>
                <div className={styles.bullets}>
                  <div>
                    <h3>Why you will love it</h3>
                    <ul>
                      <li>Soft lightweight shell</li>
                      <li>Insulated core without bulk</li>
                      <li>Hidden zip hand pockets</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Fabric and care</h3>
                    <ul>
                      <li>Shell: 100% nylon</li>
                      <li>Lining: 100% polyester</li>
                      <li>Machine wash cold, tumble dry low</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
    
            <section className={styles.infoSection}>
              <div className={styles.tabs}>
                <button>Description</button>
                <button className={styles.tabActive}>Additional Information</button>
                <button>Reviews (2)</button>
              </div>
              <div className={styles.infoTable}>
                {detailsRows.map((row) => (
                  <div className={styles.infoRow} key={row.label}>
                    <span>{row.label}</span>
                    <span>{row.value}</span>
                  </div>
                ))}
              </div>
            </section>
    
            <section className={styles.reviewSection}>
              <div className={styles.tabs}>
                <button>Description</button>
                <button>Additional Information</button>
                <button className={styles.tabActive}>Reviews (2)</button>
              </div>
              <div className={styles.reviews}>
                {reviews.map((review) => (
                  <article key={review.name} className={styles.reviewCard}>
                    <div className={styles.avatar}>{review.name.charAt(0)}</div>
                    <div>
                      <h3>{review.name}</h3>
                      <Stars count={review.rating} />
                      <p>{review.text}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className={styles.reviewForm}>
                <h3>Write your review &quot;Vintage Collar Tee 1984&quot;</h3>
                <Stars count={3} />
                <textarea placeholder="Your review" rows="4" />
                <input type="text" placeholder="Name *" />
                <input type="email" placeholder="Email *" />
                <button>Submit</button>
              </div>
            </section>
    
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

          <Footer />
        </div>
  );
}
