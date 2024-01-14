import SectionTitle from "./SectionTitle";
import VegetableGrid from "./VegetableGrid";

const FeaturedVegs = () => {
  return (
    <div className="pt-24">
      <SectionTitle text="featured vegetables" />
      <VegetableGrid />
    </div>
  );
};

export default FeaturedVegs;
