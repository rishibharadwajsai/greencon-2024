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
          <img src="/logos/Utar.jpg" alt="Utar logo" className="w-36 mt-4" />
        </div>

        {/* Title below the images */}
        <div className="order-3 md:order-none mt-4 md:mt-0 text-center">
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
            <div
              className="hidden w-full md:block md:w-auto"
              id="MobNavbar-default"
            >
              <ul className="text-sm flex flex-col p-4 md:p-2 md:text-center mt-4 border border-gray-100 rounded bg-gray-300 md:flex-row md:space-x-4 md:justify-between rtl:space-x-reverse md:mt-0 md:border-0">
                <li>
                  <a
                    href="/"
                    className="block py-2 px-3 text-gray-900 bg-gray-400-700 rounded md:bg-transparent md:p-0  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about-vit"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    About VIT
                  </a>
                </li>
                <li>
                  <button
                    // href="/registration"
                    data-modal-target="default-modal"
                    data-modal-toggle="default-modal"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Registration
                  </button>
                </li>
                <li>
                  <button
                    // href="/advisory-board"
                    data-modal-target="default-modal"
                    data-modal-toggle="default-modal"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Advisory Board
                  </button>
                </li>
                <li>
                  <button
                    // href="conference-speakers"
                    data-modal-target="default-modal"
                    data-modal-toggle="default-modal"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Conference Speakers
                  </button>
                </li>
                <li>
                  <a
                    href="/call-for-papers"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Call for Papers
                  </a>
                </li>
                <li>
                  <button
                    // href="/paper-submission"
                    data-modal-target="default-modal"
                    data-modal-toggle="default-modal"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Paper Submission
                  </button>
                </li>
                <li>
                  <a
                    href="organizing-committee"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Organizing Committee
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-us"
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
              <p className="text-base leading-relaxed text-gray-500 dark:text-white">
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

export default MobNavbar;
