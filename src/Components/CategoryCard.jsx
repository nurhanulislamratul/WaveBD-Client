const CategoryCard = () => {
  return (
    <div className="card bg-base-100 transform hover:scale-105 duration-500 hover:bg-amber-500 transition-transform shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <h2 className="text-2xl font-bold text-center my-4">Category</h2>
    </div>
  );
};

export default CategoryCard;
