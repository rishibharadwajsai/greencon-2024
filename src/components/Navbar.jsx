import { useEffect } from "react";
import { initFlowbite } from "flowbite";

function Navbar() {
  useEffect(() => {
    initFlowbite();
  });

  return (
    <>
      <div className="flex flex-col md:flex-row items-center p-4 shadow-lg">
        <img
          src="/logos/vitlogo-blue.jpg"
          alt="VIT logo"
          className="w-40 h-20 rounded md:order-1 order-2 mt-2 md:mt-0"
        />
        <div className="md:flex-1 text-center md:order-2 order-1">
          <h1 className="text-lg sm:text-3xl font-bold text-gray-800">
          Green Revolution in Electronics Engineering and Networks Conference 2025
          </h1>
          <h2 className="text-md sm:text-xl mt-1 text-gray-600">
          (GREENCON 2025) | February 15, 2025
          </h2>
          <p className="text-sm sm:text-base mt-1 font-light text-gray-600">
            Vellore Institute of Technology (VIT, Chennai India) organizes GREENCON 2025
          </p>
        </div>
        <img
          src="/logos/Utar.jpg"
          alt="UTAR logo"
          className="w-40 h-20 md:order-3 order-3 mt-2 md:mt-0"
        />
      </div>

      <nav className="bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="md:hidden">
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div
              className="hidden md:flex space-x-6"
              id="navbar-default"
            >
              <a
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Home
              </a>
              <a
                href="/about-vit"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                About VIT
              </a>
              <a
                href="/registration"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Registration
              </a>
              <a
                href="/advisory-board"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Advisory Board
              </a>
              <a
                href="/conference-speakers"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Conference Speakers
              </a>
              <a
                href="/call-for-papers"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Call for Papers
              </a>
              <a
                href="/paper-submission"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Paper Submission
              </a>
              <a
                href="/organizing-committee"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Organizing Committee
              </a>
              <a
                href="/contact-us"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

