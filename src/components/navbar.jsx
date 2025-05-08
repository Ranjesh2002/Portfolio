import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 py-4 md:py-4 transition-all duration-300 xl:py-1.5 bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center relative">
          <button
            className="lg:hidden text-white text-2xl absolute left-4"
            onClick={toggleMenu}
          >
            ☰
          </button>

          <ul
            className={`absolute left-0 right-0 bg-gray-800 p-4 flex flex-col items-center gap-6 transition-all duration-300
              ${
                isOpen
                  ? "top-16 opacity-100"
                  : "top-[-200px] opacity-0 pointer-events-none"
              } 
              lg:relative lg:top-0 lg:opacity-100 lg:pointer-events-auto lg:flex lg:flex-row lg:gap-8`}
          >
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className={`text-white font-bold transition-all duration-300 px-4 py-2 rounded-md hover:text-[#3498db] hover:bg-white/10 ${
                    location.pathname === path ? "text-[#3498db]" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
