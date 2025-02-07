import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to apply the theme to the body
  const applyTheme = (theme) => {
    if (theme === "dark-theme") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  };

  // Check for saved theme in localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light-theme";
    setIsDarkMode(savedTheme === "dark-theme");
    applyTheme(savedTheme);
  }, []);

  // Toggle theme and save preference in localStorage
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev ? "dark-theme" : "light-theme";
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
      return !prev;
    });
  };

  return (
    <button
      className="theme-toggle fixed bottom-4 right-4 p-3 rounded-full bg-gray-800 text-white"
      onClick={toggleTheme}
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
