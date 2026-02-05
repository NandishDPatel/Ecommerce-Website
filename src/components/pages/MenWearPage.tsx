import { Suspense, lazy } from "react";
import FlatOfferSection from "../molecules/FlatOfferSection";
import MenHero from "../molecules/MenHero";
import MensCollection from "../organisms/MensCollection";
import { ProductsSkeleton } from "../organisms/ProductsSkeleton";
const MenProducts = lazy(() => import("../organisms/MenProducts"));

const MenWearPage = () => {
  return (
    <>
      <MenHero />
      <Suspense fallback={<ProductsSkeleton />}>
        <MenProducts />
      </Suspense>
      <MensCollection />
      <FlatOfferSection />
    </>
  );
};

export default MenWearPage;
