import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import About from "./components/about";
import Navbar from "./components/navbar";
import Project from "./components/project";
import Contact from "./pages/contact";
import Footer from "./components/footer";

function App() {
  return (
    <Router basename="/Portfolio">
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
