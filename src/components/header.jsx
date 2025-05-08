import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation on page load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16 md:py-24 min-h-[90vh] flex items-center">
      <div
        className={`container mx-auto px-6 md:px-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Left Side - Image with animated container */}
        <div className="flex-shrink-0 relative w-full md:w-auto flex justify-center">
          <div className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full bg-blue-400/30 animate-pulse"></div>
          <div className="relative">
            <img
              src="/Portfolio/images/img.png"
              alt="Ranjesh Thakur"
              className="w-60 h-60 md:w-64 md:h-64 rounded-full border-4 border-white shadow-xl hover:scale-105 transition-transform duration-500 object-cover z-10"
            />
            <div className="absolute -bottom-3 -right-3 bg-white text-blue-600 py-2 px-4 rounded-full shadow-lg font-medium z-20">
              <Link to="/contact">
                <span className="animate-pulse ">Available for Hire</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <span className="inline-block text-sm font-semibold bg-blue-800/50 py-1 px-3 rounded-full mb-4 text-blue-100">
            Welcome to my portfolio
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-white">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              Ranjesh Thakur
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-blue-100 mb-6 h-8">
            I'm a{" "}
            <Typewriter
              words={[
                "React Enthusiast",
                "Web Developer",
                "UI/UX Designer",
                "Frontend Engineer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-base md:text-lg text-blue-100 mb-8 leading-relaxed">
            I build modern, responsive websites and clean user interfaces using
            React, Tailwind CSS, and JavaScript. Let's create something amazing
            together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold py-3 px-6 rounded-full transition duration-300 shadow-lg hover:shadow-xl hover:bg-[blue] hover:text-white "
            >
              <span>View My Projects</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/60 font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-[blue] hover:text-white"
            >
              <span>Contact Me</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center md:justify-start gap-4 mt-8">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors duration-300 "
              aria-label="GitHub Profile"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/yourtwitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors duration-300"
              aria-label="Twitter Profile"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-blue-100 animate-bounce">
        <span className="text-sm font-medium mb-2 text-blue-100">
          Scroll Down
        </span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div> */}
    </header>
  );
};

export default Header;
