import PropTypes from "prop-types"; // Import PropTypes

const ProjectCard = ({ title, description, image, link }) => (
  <div className="bg-gray-700 bg-opacity-80 rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl hover:scale-95 border border-transparent hover:border-gradient-to-r from-blue-400 to-purple-500">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105 rounded-lg shadow-md"
    />
    <div className="p-5 flex flex-col justify-center items-center backdrop-blur-md">
      <h3 className="mb-2 text-center text-2xl font-bold text-white hover:text-blue-400 hover:underline transition-colors duration-300 ease-in-out">
        {title}
      </h3>
      <p className="text-gray-300 text-center text-sm leading-relaxed">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <button className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md shadow-md hover:shadow-lg hover:brightness-110 transition duration-300 cursor-pointer">
          View Project
        </button>
      </a>
    </div>
  </div>
);

// ✅ Add PropTypes validation
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired, // title must be a string and is required
  description: PropTypes.string.isRequired, // description must be a string and is required
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired, // image must be a string (URL) and is required
};

export default ProjectCard;
