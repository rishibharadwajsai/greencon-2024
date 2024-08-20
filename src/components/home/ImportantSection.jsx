import React, { useRef, useEffect } from "react";

const ImportantSection = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const marqueeContent = marquee.querySelector("ul");

    // Clone the content to create a seamless scrolling effect
    const clone = marqueeContent.cloneNode(true);
    marquee.appendChild(clone);

    marquee.scrollTop = marquee.scrollHeight; // Start at the bottom
  }, []);

  return (
    <div className="w-full px-8 mx-auto mt-10">
      <div className="bg-red-500 text-white p-2 rounded-t-lg">
        <h2 className="text-lg font-bold">Important</h2>
      </div>
      <div
        className="bg-white text-black p-4 rounded-b-lg overflow-hidden h-80 relative"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div
          ref={marqueeRef}
          className="marquee h-80"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            animation: "scrollUp 40s linear infinite",
          }}
        >
          <ul className="list-none m-0 p-0 leading-relaxed">
            <li>Conference schedule</li>
            <li>Invitation for Inaugural function</li>
            <li>Invitation for Valedictory function</li>
            <li>Registration is now open</li>
            <li>
              Virtual mode of paper presentation for participants across the
              globe.
            </li>
            <li>
              Due to ongoing COVID-19 pandemic situation, updates will be put on
              the site regularly.
            </li>
            {/* Duplicate the items to create a seamless loop */}
            <li>Conference schedule</li>
            <li>Invitation for Inaugural function</li>
            <li>Invitation for Valedictory function</li>
            <li>Registration is now open</li>
            <li>
              Virtual mode of paper presentation for participants across the
              globe.
            </li>
            <li>
              Due to ongoing COVID-19 pandemic situation, updates will be put on
              the site regularly.
            </li>
          </ul>
        </div>
      </div>
      <style>
        {`
          @keyframes scrollUp {
            0% { transform: translateY(100%); }
            100% { transform: translateY(-500%); }
          }
        `}
      </style>
    </div>
  );
};

export default ImportantSection;
