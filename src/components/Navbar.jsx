import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-black py-4 px-6">
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8" />
        <h1 className="text-white text-lg ml-2">My Website</h1>
      </div>
      <div className="md:hidden">
        <button
          type="button"
          className="text-white hover:text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg viewBox="0 0 20 20" fill="#ffffff">
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 6a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm1 5a1 1 0 100 2h10a1 1 0 100-2H5z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`${isOpen ? "" : "hidden"} md:flex items-center space-x-4`}
      >
        <a href="#" className="text-white hover:text-gray-300">
          Home
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          About
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Services
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
