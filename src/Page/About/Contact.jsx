import SectionTitle from "../../Components/SectionTitle";

const Contact = () => {
  return (
    <div className="bg-base-200">
      <SectionTitle
        title="Get in touch"
        description="contact us for any kind of need"
      />
      <div className="hero container mx-auto  min-h-[75vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center mb-6">Contact us</h1>
            <img
              src="https://media.istockphoto.com/id/1168945108/photo/close-up-image-of-male-hands-using-smartphone-with-icon-telephone-email-mobile-phone-and.jpg?s=612x612&w=0&k=20&c=aVojLzP1n3XNxuRdy7Pqdzo6OyRAVanOWDUWjbu3R8Q="
              alt=""
              className="rounded-md"
            />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Write what you want to say"
              ></textarea>
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Send Email</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
