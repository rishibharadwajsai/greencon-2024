import { useEffect } from "react";
import { initFlowbite } from "flowbite";

function MobNavbar() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-flow-col p-4 font-serif">
        <div className="flex justify-between items-center order-1 md:order-none my-auto">
          <img
            src="/logos/vitlogo-blue.jpg"
            alt="vit logo"
            className="w-36 h-16 rounded my-auto"
          />
          <img
            src="/logos/Utar.jpg"
            alt="Utar logo"
            className="w-36 mt-4"
          />
        </div>

        {/* Title below the images */}
        <div className="order-3 md:order-none mt-4 md:mt-0 text-center">
          <h1 className="sm:text-2xl font-semibold">
            VIRTUAL INTERNATIONAL CONFERENCE ON FUTURISTIC COMMUNICATION AND
            NETWORK TECHNOLOGIES
          </h1>
          <h1 className="text-xl mt-2 md:mt-0">
            (VICFCNT-2024) | December 10-11, 2024
          </h1>
          <p className="font-medium mt-2 md:mt-0 text-red-600">
            Vellore Institute of Technology (VIT, Chennai India) in joint
            collaboration with Universiti Tunku Abdul Rahman (UTAR, Sungai Long
            Campus Malaysia)
          </p>
        </div>

        {/* MobNavbar below the title */}
        <nav className="border-gray-200 order-2 md:order-none mt-4 md:mt-0">
          <div className="max-w-screen-xl flex flex-wrap items-center md:justify-center mx-auto p-4">
            <button
              data-collapse-toggle="MobNavbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="MobNavbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="MobNavbar-default">
              <ul className="text-sm flex flex-col p-4 md:p-2 md:text-center mt-4 border border-gray-100 rounded bg-gray-300 md:flex-row md:space-x-4 md:justify-between rtl:space-x-reverse md:mt-0 md:border-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 bg-gray-400-700 rounded md:bg-transparent md:p-0  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    About VIT
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Registration
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Advisory Board
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Conference Speakers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Call for Papers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Paper Submission
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Organizing Committee
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default MobNavbar;
