const Skills = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "UI/UX Design",
    "Responsive Design",
  ];

  return (
    <section id="skills" className="py-16 text-white my-6 ">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 hover:text-[#ff1f6b] transition-colors duration-300 ease-in-out mx-1">
          Skills
        </h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-600 px-6 py-3 rounded-full text-white 
                         text-lg font-medium transition-all duration-300 
                          shadow-lg hover:transform hover:translate-y-[-2px] hover:shadow-2xl hover:text-[#3498db]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
