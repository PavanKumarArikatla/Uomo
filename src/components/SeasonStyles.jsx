import { Link } from "react-router-dom";
import styles from "./SeasonStyles.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { StylesContext } from "../contexts/StylesContext";

export default function SeasonStyles({ season }) {
  const { categories, winterstyles } = useContext(StylesContext);
  const slides = season === "Summer" ? categories || [] : winterstyles || [];
  const intervalRef = useRef(null);
  const sliderRef = useRef(null);
  const isSnappingRef = useRef(false);

  const hasMany = slides.length > 1;

  const [position, setPosition] = useState(1);
  const [resetAutoplayTimer, setResetAutoplayTimer] = useState(false);
  const [noTransition, setNoTransition] = useState(false);

  const extendedSlides = hasMany
    ? [slides[slides.length - 1], ...slides, slides[0]]
    : [...slides];

  useEffect(() => {
    setPosition(1);
  }, [season, slides.length]);

  const handleDotClick = (slideIndex) => {
    setPosition(slideIndex + 1);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setResetAutoplayTimer(true);
  };

  useEffect(() => {
    if (!hasMany || slides.length === 0) return undefined;

    if (resetAutoplayTimer) {
      return undefined;
    }

    function next() {
      setPosition((p) => p + 1);
    }

    intervalRef.current = setInterval(next, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [hasMany, slides.length, resetAutoplayTimer]);

  useEffect(() => {
    if (!resetAutoplayTimer) return;

    const pauseTimer = setTimeout(() => {
      setResetAutoplayTimer(false);
    }, 5000);

    return () => clearTimeout(pauseTimer);
  }, [resetAutoplayTimer]);

  useEffect(() => {
    if (!hasMany || isSnappingRef.current) return;

    let snapToPosition = null;

    if (position === extendedSlides.length - 1) {
      snapToPosition = 1;
    } else if (position <= 0) {
      snapToPosition = extendedSlides.length - 2;
    }

    if (snapToPosition !== null) {
      isSnappingRef.current = true;
      setNoTransition(true);

      setTimeout(() => {
        setPosition(snapToPosition);
        setTimeout(() => {
          setNoTransition(false);
          isSnappingRef.current = false;
        }, 20);
      }, 20);
    }
  }, [position, hasMany, extendedSlides.length]);

  const goPrev = () => {
    setPosition((p) => p - 1);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setResetAutoplayTimer(true);
  };

  const goNext = () => {
    setPosition((p) => p + 1);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setResetAutoplayTimer(true);
  };

  const handleKey = (e) => {
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
  };

  if (!slides.length) return null;

  const actualIndex = hasMany
  ? ((position - 1 + slides.length) % slides.length)
  : 0;

  const translatePercent = position * 100;

  const content = (
    <div
      className={`${styles.slider} ${season !== "Summer" ? styles.small  : ""} `}
      onKeyDown={handleKey}
      tabIndex={0}
      style={season === "Summer" ? { backgroundImage: `${""}`, backgroundSize: 'cover' } : {}}
    >

      <div
        ref={sliderRef}
        className={styles.sliderInner}
        style={{
          transform: `translateX(-${translatePercent}%)`,
          transition: noTransition
            ? "none"
            : "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        {extendedSlides.map((style, i) => (
          <img
            key={i}
            src={style.image}
            alt={`Slide ${i + 1}`}
            className={styles.image}
          />
        ))}
      </div>

      <div className={styles.season}>
        {season === "Summer" ? (
          <>
          <p className="text-xs text-red-700 underline"> NEW TREND</p>
            <p>{`${extendedSlides[actualIndex+1].style || ""}`}</p>
              <strong>{`${extendedSlides[actualIndex+1]?.category || ""}`}</strong>
              <br></br>
              <Link to={`${extendedSlides[actualIndex+1].path || ""}`}>
                <button className={styles.button}>Explore Now</button>
              </Link>
          </>
        ) : (
          <>
            <p className="text-xs text-red-700">DEAL OF THE WEEK</p>
            <p>
              <b>SPRING</b> COLLECTION
            </p>
            <p>{`${extendedSlides[actualIndex+1]?.category || ""}`}</p>
            <Link to={`${extendedSlides[actualIndex].path || ""}`}>
              <button className={styles.span}>SHOP NOW</button>
            </Link>
          </>
        )}
      </div>

      <button onClick={goPrev} className={styles.prevButton} type="button" />
      <button onClick={goNext} className={styles.nextButton} type="button" />
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={
              i === actualIndex
                ? `${styles.dot} ${styles.activeDot}`
                : styles.dot
            }
            onClick={() => handleDotClick(i)}
            type="button"
          />
        ))}
      </div>
    </div>
  );

  return content;
}
