import DiscountBanner from "../molecules/DiscountBanner";
import FallAheadSection from "../molecules/FallAheadSection";
import Hero from "../molecules/Hero";
import SalePromoSection from "../molecules/SalePromoSection";
import TrendingSection from "../molecules/TrendingSection";

const HomeContent = () => {
  return (
    <>
      <Hero />
      <FallAheadSection />
      <SalePromoSection />
      <TrendingSection />
      <DiscountBanner />
    </>
  );
};

export default HomeContent;
