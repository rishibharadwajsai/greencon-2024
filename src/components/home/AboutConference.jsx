import React from "react";

const ConferenceAbout = () => {
  return (
    <div className="bg-[#edf7f3] p-6 max-w-4xl mx-auto my-10 shadow-xl rounded-xl border-t-4 border-green-500 border-r">
      <h2 className="text-[#35575a] font-bold text-lg md:text-2xl text-center decoration-red-600 mb-6">
        ABOUT THE CONFERENCE
      </h2>
      <p className="text-justify text-gray-700 text-sm md:text-base leading-relaxed">
        Virtual International Conference on Futuristic Communication and Network Technologies (VICFCNT-2021) is scheduled on December 10th and 11th 2021 at Vellore Institute of Technology, Chennai, Tamil Nadu, India. The School of Electronics Engineering at VIT University proudly organizes this conference in joint collaboration with Universiti Tunku Abdul Rahman (UTAR, Sungai Long Campus Malaysia) which would provide a forum for discussing cutting edge research in the field of Communication and Networks to disseminate their ideas and research findings.
      </p>
      <p className="mt-4 text-justify text-gray-700 text-sm md:text-base leading-relaxed">
        This would enrich the knowledge of the intellectuals who are part of this conference and would lead to further exploration and innovative research in the various domains of the conference. This conference would also help the budding engineers and experts working in the same areas of research to network. The world is centred on the various communication technologies and hence the main aim of this conference is to bring leading academic scientists, researchers and research scholars to exchange and share their experiences and research findings on all aspects in the emerging trends and technologies in the field of Optical Communication Networks and Devices, Acoustic, Speech, Video and Signal Processing, Wireless Communication Networks and Systems Antennas, Microwave and RF for Emerging Technologies, Internet of Things/ Internet of Everything/ Internet of Nano things, MEMS/NEMS for Future Networks, Wearable Technologies, Architecture, Applications and Security of Cyber–Physical Systems and Futuristic Technologies. The experts in these domains around the globe would be invited for delivering keynote talks and invited lectures. Research papers presented in this forum would be published in peer-reviewed scopus indexed publications.
      </p>
      <div className="w-full flex flex-col md:flex-row justify-center mt-8 space-y-3 md:space-y-0 md:space-x-4">
        <a
          // href="https://your-register-link.com"
          className="bg-[#62b895] text-white text-center px-6 py-2 w-48 font-semibold rounded-md hover:bg-[#49886e] transition-colors"
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
        >
          Register
        </a>
        <a
          href="/call-for-papers"
          className="bg-[#62b895] text-white text-center px-6 py-2 w-48 rounded-md hover:bg-[#49886e] font-semibold transition-colors"
        >
          Call for Papers
        </a>
        <a
          // href="https://your-paper-submission-link.com"
          className="bg-[#62b895] text-white text-center px-6 py-2 w-48 rounded-md hover:bg-[#49886e]
            transition-colors font-semibold"
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
        >
          Paper Submission
        </a>
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
    </div>
  );
};

export default ConferenceAbout;
