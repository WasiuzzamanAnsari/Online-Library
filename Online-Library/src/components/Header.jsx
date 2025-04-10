import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between px-4 sm:px-10 py-4 bg-gray-900 bg-opacity-90 backdrop-blur-lg shadow-lg border-b border-gray-800">
      {/* Logo Section */}
      <div className="flex items-center">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png" 
          alt="Library Logo"
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full border-2 border-blue-400 shadow-md transition-transform duration-300 hover:rotate-12 hover:scale-110"
        />
        <h1 className="ml-3 sm:ml-4 text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide">
          Online Library System
        </h1>
      </div>

      {/* Hamburger Button */}
      <button
        className="sm:hidden text-gray-300 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Links */}
      <nav
        className={`w-full sm:w-auto ${
          isOpen ? "block" : "hidden"
        } sm:flex flex-col sm:flex-row gap-4 sm:gap-8 text-base sm:text-lg font-semibold mt-4 sm:mt-0`}
      >
        <Link 
          to="/" 
          className="text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:shadow-pink-400/50"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link 
          to="/browsebook" 
          className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:shadow-blue-400/50"
          onClick={() => setIsOpen(false)}
        >
          Browse Books
        </Link>
        <Link 
          to="/addbook" 
          className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:shadow-green-400/50"
          onClick={() => setIsOpen(false)}
        >
          Add Books
        </Link>
      </nav>
    </header>
  );
}

export default Header;
