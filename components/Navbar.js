'use client';

import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 bg-navy p-6 z-10">
      <div className="flex justify-between items-center text-lg 2xl:text-2xl">
        <div className="hover:text-green">
          <a href="#intro">Alexis Lay Vu</a>
        </div>
        <div className="hidden space-x-4 md:flex">
          <a href="#about" className="hover:text-green">
            About
          </a>

          <a href="#experience" className="hover:text-green">
            Experience
          </a>
          <a href="#projects" className="hover:text-green">
            Projects
          </a>
          <a
            href="../resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green"
          >
            Resume
          </a>
        </div>
        <div className="relative md:hidden" ref={dropdownRef}>
          <button onClick={toggleMenu} className="relative focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}
              ></path>
            </svg>
            {isOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-light-navy rounded-md shadow-lg z-10">
                <a href="#about" className="block px-4 py-2 hover:text-green">
                  About
                </a>
                <a href="#experience" className="block px-4 py-2 hover:text-green">
                  Experience
                </a>
                <a href="#projects" className="block px-4 py-2 hover:text-green">
                  Projects
                </a>
                <a
                  href="../resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:text-green"
                >
                  Resume
                </a>
              </div>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
