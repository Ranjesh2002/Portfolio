import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { RiDeviceLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const About = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-cyan-500" /> },
    {
      name: "UI/UX Design",
      icon: <MdDesignServices className="text-pink-500" />,
    },
    {
      name: "Responsive Design",
      icon: <RiDeviceLine className="text-green-500" />,
    },
  ];

  return (
    <section
      id="about"
      className="py-16 px-4 md:px-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition duration-300"
    >
      <div className="container mx-auto bg-gray-100 dark:bg-gray-800 rounded-xl p-6 md:p-10 shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left - Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="relative">
              <img
                src="/Portfolio/images/image.png"
                alt="About Me"
                className=" md:w-64 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300 h-[300px]"
                loading="lazy"
              />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                2+ yrs
              </div>
            </div>
          </div>

          {/* Right - Text and Skills */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400 text-center md:text-left">
              About Me
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center md:text-left mb-8">
              I'm a passionate web developer with experience in building
              responsive, user-focused websites using modern technologies like{" "}
              <span className="font-medium text-indigo-600 dark:text-indigo-400">
                React
              </span>
              ,{" "}
              <span className="font-medium text-indigo-600 dark:text-indigo-400">
                Node.js
              </span>
              , and{" "}
              <span className="font-medium text-indigo-600 dark:text-indigo-400">
                Tailwind CSS
              </span>
              . I enjoy transforming ideas into beautiful digital products that
              enhance user experience and solve real-world problems.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400 text-center md:text-left">
              Skills
            </h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-full 
                  text-gray-800 dark:text-gray-100 text-sm font-medium shadow-md hover:-translate-y-1 
                  hover:shadow-lg hover:bg-indigo-500 hover:text-white transition-all duration-300"
                  aria-label={`Skill: ${skill.name}`}
                >
                  <span className="text-lg" aria-hidden="true">
                    {skill.icon}
                  </span>
                  {skill.name}
                </div>
              ))}
            </div>

            <div className="text-center md:text-left mt-8">
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg 
  transition duration-300 shadow-md hover:shadow-lg font-medium"
              >
                Let's Connect
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
