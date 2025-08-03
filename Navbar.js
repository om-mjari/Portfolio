import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
            OJ
          </span>

          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#home"
              className="hover:text-blue-500 text-white dark:text-gray-100"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-blue-500 text-white dark:text-gray-100"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-blue-500 text-white dark:text-gray-100"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-blue-500 text-white dark:text-gray-100"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-500 text-white dark:text-gray-100"
            >
              Contact
            </a>

            <button
              id="theme-toggle"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <i className="fas fa-moon dark:hidden"></i>
              <i className="fas fa-sun hidden dark:block text-yellow-300"></i>
            </button>
          </div>

          <button id="mobile-menu-button" className="md:hidden p-2">
            <i className="fas fa-bars text-2xl text-white dark:text-gray-200"></i>
          </button>
        </div>

        <div
          id="mobile-menu"
          className="hidden md:hidden bg-white dark:bg-gray-800"
        >
          <div className="px-4 py-3 space-y-2">
            <a
              href="#home"
              className="block hover:text-blue-500 text-white dark:text-gray-100"
            >
              Home
            </a>
            <a
              href="#about"
              className="block hover:text-blue-500 text-white dark:text-gray-100"
            >
              About
            </a>
            <a
              href="#skills"
              className="block hover:text-blue-500 text-white dark:text-gray-100"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block hover:text-blue-500 text-white dark:text-gray-100"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block hover:text-blue-500 text-white dark:text-gray-100"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
