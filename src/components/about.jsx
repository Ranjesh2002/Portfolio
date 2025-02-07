const About = () => (
  <section
    id="about"
    className="about py-16 px-5 rounded-lg mx-10 my-1 text-center
               dark:from-black dark:via-black dark:to-black/70 
               text-black dark:text-white transition duration-300"
  >
    <div className="container mx-auto bg-gray-200 dark:bg-gray-600 rounded-[15px] py-10 transition duration-300">
      <h2
        className="text-5xl font-bold mb-6 tracking-tight 
                     hover:text-[#ff1f6b] transition-colors duration-300 ease-in-out mx-6"
      >
        About Me
      </h2>
      <p className="max-w-2xl mx-auto text-lg leading-relaxed">
        I'm a passionate web developer with expertise in React, Node.js, and
        modern web technologies. I love creating beautiful, functional websites
        that provide great user experiences.
      </p>
    </div>
  </section>
);

export default About;
