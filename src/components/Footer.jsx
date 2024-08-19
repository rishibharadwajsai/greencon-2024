function Footer() {
  return (
    <>
      <footer className="bg-white border-black border-t-2 w-full">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex flex-col justify-center sm:flex-row md:justify-between">
            <a href="https://chennai.vit.ac.in/" className=" mb-6 md:mb-0 flex justify-center sm:justify-start">
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
                  <a href="/registration" className="hover:underline">
                    Registration
                  </a>
                </li>
                <li>
                  <a href="/advisory-board" className="hover:underline">
                    Advisory Board
                  </a>
                </li>
                <li>
                  <a href="conference-speakers" className="hover:underline">
                    Conference Speakers
                  </a>
                </li>
                <li>
                  <a href="/call-for-papers" className="hover:underline">
                    Call for Papers
                  </a>
                </li>
                <li>
                  <a href="/paper-submission" className="hover:underline">
                    Paper Submission
                  </a>
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
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between text-sm md:text-base">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="https://chennai.vit.ac.in/" className="hover:underline">
                VIT Chennai
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
