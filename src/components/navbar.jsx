import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to close menu when clicking a link
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 py-4 md:py-4 transition-all duration-300 xl:py-1.5 bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center relative">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-2xl absolute left-4"
            onClick={toggleMenu}
          >
            ☰
          </button>

          {/* Navigation Links (Centered) */}
          <ul
            className={`absolute left-0 right-0 bg-gray-800  p-4 flex flex-col items-center gap-6 transition-all duration-300
              ${
                isOpen
                  ? "top-16 opacity-100"
                  : "top-[-200px] opacity-0 pointer-events-none"
              } 
              lg:relative lg:top-0 lg:opacity-100 lg:pointer-events-auto lg:flex lg:flex-row lg:gap-8`}
          >
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white font-bold transition-all duration-300 px-4 py-2 rounded-md hover:text-[#3498db] hover:bg-white/10"
                  onClick={closeMenu} // Close menu when clicking a link
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
