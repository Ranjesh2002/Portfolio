import PropTypes from "prop-types";
import { useState } from "react";

const ProjectCard = ({ title, description, image, link, tags }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="bg-gray-700 bg-opacity-80 rounded-xl shadow-xl overflow-hidden 
                  transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl 
                  border border-transparent hover:border-blue-400 
                  w-full sm:w-80 md:w-96"
    >
      <div className="relative w-full h-48">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-300">
            <span>{title}</span>
          </div>
        ) : (
          <img
            src={image}
            alt={`Screenshot of ${title} project`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={() => setImageError(true)}
          />
        )}
      </div>

      <div className="p-5 flex flex-col justify-center items-center backdrop-blur-md">
        <h3
          className="mb-2 text-center text-2xl font-bold text-white hover:text-blue-400 
                      transition-colors duration-300 ease-in-out"
        >
          {title}
        </h3>

        <p className="text-gray-300 text-center text-sm leading-relaxed">
          {description}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3 justify-center">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-gray-800 text-blue-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full"
          aria-label={`View ${title} project`}
        >
          <button
            className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 
                      text-white rounded-md shadow-md hover:shadow-lg hover:brightness-110 
                      transition duration-300 focus:outline-none focus:ring-2 
                      focus:ring-blue-400 focus:ring-opacity-50"
          >
            View Project
          </button>
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

ProjectCard.defaultProps = {
  tags: [],
};

export default ProjectCard;
