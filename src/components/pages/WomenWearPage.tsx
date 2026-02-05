import { lazy, Suspense } from "react";
import FlatOfferSection from "../molecules/FlatOfferSection";
import WomenHero from "../molecules/WomenHero";
import WomensCollection from "../organisms/WomensCollection";
const WomenProducts = lazy(() => import("../organisms/WomenProducts"));
import { ProductsSkeleton } from "../organisms/ProductsSkeleton";
const WomenWearPage = () => {
  return (
    <>
      <WomenHero />
      <Suspense fallback={<ProductsSkeleton />}>
        <WomenProducts />
      </Suspense>
      <WomensCollection />
      <FlatOfferSection />
    </>
  );
};

export default WomenWearPage;
