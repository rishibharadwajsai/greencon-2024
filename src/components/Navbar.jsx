import { useEffect } from "react";
import { initFlowbite } from "flowbite";

function Navbar() {
  useEffect(() => {
    initFlowbite();
  });

  return (
    <>
      <div className="flex flex-col md:flex-row items-center p-4 shadow-xl">
        <img
          src="/logos/vitlogo-blue.jpg"
          alt="VIT logo"
          className="w-40 h-16 rounded md:order-1 order-2 mt-2 md:mt-0"
        />
        <div className="md:flex-1 text-center md:order-2 order-1">
          <h1 className="text-lg sm:text-3xl font-bold text-gray-800">
            Green Revolution in Electronics Engineering and Networks Conference
            2025
          </h1>
          <h2 className="text-md sm:text-xl mt-1 text-gray-600">
            (GREENCON 2025) | February 15, 2025
          </h2>
          <p className="text-sm sm:text-base mt-1 font-light text-gray-600">
            Vellore Institute of Technology (VIT, Chennai India) organizes
            GREENCON 2025
          </p>
        </div>
        <img
          src="../../public/images/greencon.png"
          alt="Greencon logo"
          className="w-44 h-28 md:order-3 order-3 mt-2 md:mt-0"
        />
      </div>

      <nav className="bg-[#addfca] shadow-xl shadow-gray-950 rounded-xl">
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
            <div className="hidden md:flex space-x-6" id="navbar-default">
              <a
                href="/"
                className="text-gray-700 hover:text-[#3c5a96] hover:bg-gray-200 px-1 py-1 transition-colors duration-300 font-medium hover:bg-gray-200 px-1 py-1 "
              >
                Home
              </a>
              <a
                href="/about-vit"
                className="text-gray-700 hover:text-[#3c5a96] hover:bg-green-200 px-1 py-1 transition-colors duration-300 font-medium"
              >
                About VIT
              </a>
              <a
                href="/registration"
                className="text-gray-700 hover:text-[#3c5a96] transition-colors duration-300 font-medium hover:bg-gray-200 px-1 py-1 "
              >
                Registration
              </a>
              <a
                href="/advisory-board"
                className="text-gray-700 hover:text-[#3c5a96] transition-colors duration-300 font-medium hover:bg-gray-200 px-1 py-1 "
              >
                Advisory Board
              </a>
              <a
                href="/conference-speakers"
                className="text-gray-700 hover:text-[#3c5a96] transition-colors duration-300 font-medium hover:bg-gray-200 px-1 py-1 "
              >
                Conference Speakers
              </button>
              <a
                href="/call-for-papers"
                className="text-gray-700 hover:text-[#3c5a96] transition-colors duration-300 font-medium hover:bg-green-200 px-1 py-1 "
              >
                Call for Papers
              </a>
              <a
                href="/paper-submission"
                className="text-gray-700 hover:text-[#3c5a96] transition-colors duration-300 font-medium hover:bg-gray-200 px-1 py-1 "
              >
                Paper Submission
              </button>
              <a
                href="/organizing-committee"
                className="text-gray-700 hover:text-[#3c5a96] transition-colors duration-300 font-medium hover:bg-green-200 px-1 py-1 "
              >
                Organizing Committee
              </a>
              <a
                href="/contact-us"
                className="text-gray-700 hover:text-[#3c5a96] transition-colors duration-300 font-medium hover:bg-green-200 px-1 py-1 "
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-900">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Pages
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-200 dark:text-gray-200">
                Updating soon......
              </p>
              {/* <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p> */}
            </div>
            {/* <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"> */}
            {/* <button
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-hide="default-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Decline
              </button> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
