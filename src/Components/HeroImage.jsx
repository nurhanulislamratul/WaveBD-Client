const HeroImage = () => {
  return (
    <div
      className="hero min-h-[70vh]"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1524711212733-10ef1b0bec75?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome there</h1>
          <p className="mb-5">
            Make your purchase for favourite products. All kinds of products
            available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
