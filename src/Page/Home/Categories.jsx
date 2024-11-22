import CategoryCard from "../../Components/CategoryCard";
import SectionTitle from "../../Components/SectionTitle";

const Categories = () => {
  return (
    <div className="container mx-auto my-6">
      <SectionTitle
        title="Categories"
        description="Our favourite Categories goes here"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
};

export default Categories;
