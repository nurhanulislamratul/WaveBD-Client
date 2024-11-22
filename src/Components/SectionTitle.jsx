// eslint-disable-next-line react/prop-types
const SectionTitle = ({ title, description }) => {
  return (
    <div className="text-center my-6">
      <h2 className="text-xl lg:text-3xl font-bold ">{title}</h2>
      <p className="font-semibold text-sm max-w-md mx-auto my-2">
        {description && description}
      </p>
    </div>
  );
};

export default SectionTitle;
