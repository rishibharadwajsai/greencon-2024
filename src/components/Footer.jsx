function Footer() {
  return (
    <>
      <footer className="bg-white border-black border-t-2 w-full">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex flex-col justify-center sm:flex-row md:justify-between">
            <a
              href="https://chennai.vit.ac.in/"
              className=" mb-6 md:mb-0 flex justify-center sm:justify-start"
            >
              <img
                src="/logos/vitlogo-white.jpg"
                className="h-12 lg:h-20 me-3"
                alt="FlowBite Logo"
              />
            </a>
            <div className="flex justify-center sm:justify-start">
              <ul className="text-gray-800 grid grid-rows-3 text-sm md:text-base grid-flow-col gap-4">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about-vit" className="hover:underline">
                    About VIT
                  </a>
                </li>
                <li>
                  <button
                    // href="/registration"
                    className="hover:underline"
                    data-modal-target="default-modal"
                    data-modal-toggle="default-modal"
                  >
                    Registration
                  </button>
                </li>
                <li>
                  <button
                    // href="/advisory-board"
                    className="hover:underline"
                    data-modal-target="default-modal"
                    data-modal-toggle="default-modal"
                  >
                    Advisory Board
                  </button>
                </li>
                <li>
                  <button
                    // href="conference-speakers"
                    className="hover:underline"
                    data-modal-target="default-modal"
                    data-modal-toggle="default-modal"
                  >
                    Conference Speakers
                  </button>
                </li>
                <li>
                  <a href="/call-for-papers" className="hover:underline">
                    Call for Papers
                  </a>
                </li>
                <li>
                  <button
                    // href="/paper-submission"
                    className="hover:underline"
                    data-modal-target="default-modal"
                    data-modal-toggle="default-modal"
                  >
                    Paper Submission
                  </button>
                </li>
                <li>
                  <a href="organizing-committee" className="hover:underline">
                    Organizing committee
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <hr className="border-gray-200 sm:mx-auto dark:border-gray-700" />
      <div className="sm:flex sm:items-center sm:justify-between text-sm md:text-base bg-[#3c5a96] p-8">
        <span className="text-sm text-gray-100 sm:text-center dark:text-gray-100">
          © 2024{" "}
          <a href="https://chennai.vit.ac.in/" className="hover:underline">
            VIT Chennai
          </a>
          . All Rights Reserved.
        </span>
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

export default Footer;
