const FeaturedProductCard = () => {
  return (
    <div className="card bg-base-100 mb-8 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Featured Product Card"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Title</h2>
        <p>Description goes here. write here</p>
        <div className="card-actions justify-end">
          <button className="btn btn-neutral btn-block btn-sm">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
