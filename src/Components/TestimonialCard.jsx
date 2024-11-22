import { FaQuoteRight } from "react-icons/fa";

const TestimonialCard = () => {
  return (
    <div>
      <div className="w-full max-w-md px-8 border py-4 mt-16 bg-white rounded-lg shadow-lg ">
        <div className="flex justify-center -mt-16 md:justify-end">
          <img
            className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full "
            alt="Testimonial avatar"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
          />
        </div>

        <div className="flex justify-between items-center">
          <h2 className="mt-2 text-xl font-semibold text-gray-800  md:mt-0">
            Nice Website
          </h2>
          <FaQuoteRight size={24} />
        </div>
        <p className="mt-2 text-sm text-gray-600 ">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </span>
        </p>

        <div className="flex justify-end mt-4">
          <a className="text-lg font-medium text-blue-600 " role="link">
            John Doe
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
