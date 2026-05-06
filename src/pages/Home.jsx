import { useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import SeasonStyles from "../components/homeComponents/SeasonStyles";
import CollectionStyles from "../components/homeComponents/CollectionStyles";
import TrendyLimited from "../components/homeComponents/TrendyLimited";
import WinterStyles from "../components/homeComponents/WinterStyles";
import Uomo from "../components/homeComponents/Uomo";
import Services from "../components/homeComponents/Services";
import SocialMedia from "../components/homeComponents/SocialMedia";
import Loading from "../reusedComponents/Loading"
import styles from "./Home.module.css";

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
