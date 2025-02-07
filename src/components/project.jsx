import ProjectCard from "./projectcard";

const Projects = () => {
  const projects = [
    {
      title: (
        <a
          href="https://ranjesh2002.github.io/todo-list/"
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer"
        >
          {" "}
          Todo-list
        </a>
      ),
      description: "A full-stack web application built with React and Node.js",
      image: "/Portfolio/images/todo.png",
      link: "https://ranjesh2002.github.io/todo-list/",
    },
    {
      title: (
        <a
          href="https://ranjesh2002.github.io/pdfmerger/"
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer"
        >
          {" "}
          PDF-merger
        </a>
      ),
      description: "A full-stack web application built with React and Node.js",
      image: "/Portfolio/images/pdf.png",
      link: "https://ranjesh2002.github.io/pdfmerger/",
    },
    {
      title: (
        <a
          href="https://ranjesh2002.github.io/Pomodoro-clock/"
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer"
        >
          {" "}
          Pomodoro-Clock
        </a>
      ),
      description: "A full-stack web application built with React and Node.js",
      image: "/Portfolio/images/pomodoro.png",
      link: "https://ranjesh2002.github.io/Pomodoro-clock/",
    },
  ];

  return (
    <section id="projects" className="py-16 my-3">
      <div className="container mx-auto px-4 ">
        <h2 className="text-5xl font-bold mb-8  hover:text-[#ff1f6b] transition-colors duration-300 ease-in-out mx-1 text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
