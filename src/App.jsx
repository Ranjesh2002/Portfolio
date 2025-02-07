import Header from "./components/header";
import Navigation from "./components/navbar";
import About from "./components/about";
import Project from "./components/project";
import Skills from "./components/skill";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ThemeToggle from "./components/theme";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <div className=" max-w-[1200px] mx-auto p-1 ">
        <About />
        <Project />
        <Skills />
        <Contact />
        <ThemeToggle />
      </div>
      <Footer />
    </>
  );
}

export default App;
