// eslint-disable-next-line react/prop-types
const Searchbar = ({ setSorting, setCategory, setBrand, setSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.searching.value);
  };

  return (
    <div className="flex justify-between items-center my-4">
      <form onSubmit={(e) => handleSearch(e)} className="join">
        <input
          type="text"
          placeholder="Search Here"
          name="searching"
          className="input input-bordered join-item"
        />
        <button className="btn btn-neutral join-item">Search</button>
      </form>
      <select
        className="select select-bordered w-full max-w-40"
        onChange={(e) => setSorting(e.target.value)}
      >
        <option value="asc">Low to high</option>
        <option value="desc">High to low</option>
      </select>
      <select
        className="select select-bordered w-full max-w-40"
        defaultValue="selected"
        onChange={(e) => setBrand(e.target.value)}
      >
        <option disabled value="selected">
          Brand
        </option>
        <option value="samsung">Samsung</option>
        <option value="apple">Apple</option>
      </select>
      <select
        className="select select-bordered w-full max-w-40"
        defaultValue="selected"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option disabled value="selected">
          Category
        </option>
        <option value="mobile">Mobile</option>
        <option value="laptop">Laptop</option>
      </select>
    </div>
  );
};

export default Searchbar;
