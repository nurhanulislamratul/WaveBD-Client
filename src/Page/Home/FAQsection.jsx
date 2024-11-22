import SectionTitle from "../../Components/SectionTitle";

const FAQsection = () => {
  return (
    <div className="container mx-auto flex flex-col gap-2 my-4">
      <SectionTitle
        title="Frequently Asked Questions"
        description="You may find your question from here"
      />
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What services do you offer?
        </div>
        <div className="collapse-content">
          <p>
            We specialize in [list your services, e.g., web development, design,
            consultation, etc.].
          </p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          How long does it take to complete a project?
        </div>
        <div className="collapse-content">
          <p>
            The timeline depends on the project&apos;s complexity. Most projects
            take 3 weeks to complete.
          </p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Do you provide support after the project is completed?
        </div>
        <div className="collapse-content">
          <p>
            Yes, we offer post-project support and maintenance services to
            ensure everything runs smoothly.
          </p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          What is your pricing structure?
        </div>
        <div className="collapse-content">
          <p>
            Pricing varies based on the scope of the project. Contact us for a
            detailed quote.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQsection;
