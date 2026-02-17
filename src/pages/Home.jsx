import { useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import SeasonStyles from "../components/SeasonStyles";
import CollectionStyles from "../components/CollectionStyles";
import TrendyLimited from "../components/TrendyLimited";
import WinterStyles from "../components/WinterStyles";
import Uomo from "../components/Uomo";
import SocialMedia from "./SocialMedia";
import styles from "./Home.module.css";
import Services from "../components/Services";

export default function Home() {
  const { trendyProducts, limitedEditionProducts, eastsideProducts } =
    useContext(StylesContext);
  return (
    <div className={styles.page}>
      <div className={styles.centerWrapper}>
        <div className="homecontainer">
          <div className={styles.firstSeason}>
            <SeasonStyles season="Summer" />
            <SocialMedia />
          </div>

          <CollectionStyles />

          <TrendyLimited style="trendyProducts" products={trendyProducts} />

          <SeasonStyles season="Winter" />

          <WinterStyles />

          <TrendyLimited products={limitedEditionProducts} />

          <Uomo products={eastsideProducts} />

          <Services />
        </div>
      </div>
    </div>
  );
}
