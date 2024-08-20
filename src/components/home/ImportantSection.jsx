import React, { useEffect, useRef } from 'react';

const ImportantSection = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    let scrollAmount = 0;

    const scrollMarquee = () => {
      scrollAmount += 1;

      // If scrolled past the original content height, reset to top
      if (marquee.scrollTop >= marquee.scrollHeight / 2) {
        scrollAmount = 0;
        marquee.scrollTop = 0;
      } else {
        marquee.scrollTop = scrollAmount;
      }
    };

    const interval = setInterval(scrollMarquee, 20); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-8 mx-auto mt-10">
      <div className="bg-red-500 text-white p-2 rounded-t-lg">
        <h2 className="text-lg font-bold">Important</h2>
      </div>
      <div className="bg-white text-black p-4 rounded-b-lg overflow-hidden h-80 relative">
        <div
          className="overflow-hidden h-80 relative"
          ref={marqueeRef}
        >
          <ul className="list-none m-0 p-0 leading-relaxed">
            <li>Conference schedule</li>
            <li>Invitation for Inaugural function</li>
            <li>Invitation for Valedictory function</li>
            <li>Registration is now open</li>
            <li>Virtual mode of paper presentation for participants across the globe.</li>
            <li>Due to ongoing COVID-19 pandemic situation, updates will be put on the site regularly.</li>
            {/* Duplicate the items to create a seamless loop */}
            <li>Conference schedule</li>
            <li>Invitation for Inaugural function</li>
            <li>Invitation for Valedictory function</li>
            <li>Registration is now open</li>
            <li>Virtual mode of paper presentation for participants across the globe.</li>
            <li>Due to ongoing COVID-19 pandemic situation, updates will be put on the site regularly.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImportantSection;
