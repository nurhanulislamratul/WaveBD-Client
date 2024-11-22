const ContactUs = () => {
  return (
    <div
      className="hero min-h-[70vh] container rounded-[20px] mx-auto my-8"
      style={{
        borderRadius: "20px",
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1682125235036-d1ab54136ff4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-[20px]"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="font-bold text-white">What is your name?</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="font-bold text-white">What is your Email?</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Your bio</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>
          <button className="btn btn-block my-4 btn-neutral">Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
