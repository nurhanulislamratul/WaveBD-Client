import { useEffect, useState } from "react";
import Searchbar from "../../Components/Searchbar";
import SectionTitle from "../../Components/SectionTitle";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import ProductsCard from "../../Components/ProductsCard";

const Products = () => {
  const axiosCommon = useAxiosCommon();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [sorting, setSorting] = useState("asc");
  // console.log({ search, brand, category, sorting });

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axiosCommon.get(
        `/products?search=${search}&brand=${brand}&category=${category}&sorting=${sorting}`
      );
      setProducts(data);
    };
    fetchProducts();
  }, [axiosCommon, brand, category, search, sorting]);

  return (
    <div className="container mx-auto">
      <SectionTitle
        title="All Products"
        description="See all our products here. Find your favourite"
      />
      <Searchbar
        setSearch={setSearch}
        setBrand={setBrand}
        setCategory={setCategory}
        setSorting={setSorting}
      />
      {products.length === 0 && (
        <>
          <div className="text-center flex justify-center items-center flex-col mt-24">
            <h2 className="text-2xl font-bold">No Products here</h2>
            <p className="font-semibold">
              Filter your search or sorting parameters
            </p>
          </div>
        </>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
