import SectionTitle from "../../Components/SectionTitle";

const About = () => {
  return (
    <div className="container mx-auto">
      <SectionTitle
        title="About Us"
        description="What you want to know about us is here"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-orange-400 font-bold">How we started</p>
          <h1 className="text-6xl flex-wrap my-6 px-6 font-bold">
            Our dream is to make products available for all in the world
          </h1>
          <p className="font-bold mt-12 pr-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
            asperiores animi, quam expedita cumque voluptas. Facere numquam,
            consequuntur optio quidem qui omnis dolorem beatae fuga
            reprehenderit suscipit quisquam molestias error.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-xl"
          />
          <div className="stats my-6 shadow">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Likes</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Page Views</div>
              <div className="stat-value text-secondary">2.6M</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
