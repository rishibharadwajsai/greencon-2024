import React from 'react';

const ConferenceAbout = () => {
  return (
    <div className="bg-[#edf7f3] p-6 max-w-4xl mx-auto my-10 rounded-md shadow-xl rounded-xl border-t-4 border-green-500 border-r">
      <h2 className="text-[#35575a] font-bold text-lg md:text-2xl text-center decoration-red-600 mb-6">
        ABOUT THE CONFERENCE
      </h2>
      <p className="text-justify text-gray-700 text-sm md:text-base leading-relaxed">
      Green Revolution in Electronics Engineering and Networks CONference 2025 is slated for March 6th and 7th, 2025, at Vellore Institute of Technology in Chennai, Tamil Nadu, India. The School of Electronics Engineering at VIT University is proud to organise this conference, which will provide a forum for discussing cutting-edge research in the field of Communication and Networks, focusing on sustainable and eco-friendly advancements and disseminating their ideas and research findings.
      </p>
      <p className="mt-4 text-justify text-gray-700 text-sm md:text-base leading-relaxed">
      This would enhance the knowledge of the intellectuals attending this conference, leading to further investigation and innovative research in the conference's different disciplines. This conference would also allow aspiring engineers and experts in similar research fields to network. The world is centered on various communication technologies, so the main aim of this conference is to bring leading academic scientists, researchers, and research scholars to exchange and share their experiences and research findings on all aspects of the emerging trends and technologies in the field of Optical  Communication Networks and Devices, Acoustic, Speech, Video, and Signal Processing, Wireless Communication Networks and Systems Antennas, Microwave, and RF. Experts in these disciplines from around the world will be invited to provide keynote speeches and invited lectures. Research articles presented in this forum will be published in peer-reviewed, scopus-indexed journals.

      </p>
      <div className="w-full flex flex-col md:flex-row justify-center mt-8 space-y-3 md:space-y-0 md:space-x-4">
        <a
          href="https://your-register-link.com"
          className="bg-[#62b895] text-white text-center px-6 py-2 w-48 font-semibold rounded-md hover:bg-[#49886e] transition-colors"
        >
          Register
        </a>
        <a
          href="https://your-call-for-papers-link.com"
          className="bg-[#62b895] text-white text-center px-6 py-2 w-48 rounded-md hover:bg-[#49886e] font-semibold transition-colors"
        >
          Call for Papers
        </a>
        <a
          href="https://your-paper-submission-link.com"
          className="bg-[#62b895] text-white text-center px-6 py-2 w-48 rounded-md hover:bg-[#49886e]
            transition-colors font-semibold"
        >
          Paper Submission
        </a>
      </div>
    </div>
  );
};

export default ConferenceAbout;
