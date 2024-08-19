import React from 'react';

const ConferenceAbout = () => {
  return (
    <div className="bg-yellow-50 p-6 max-w-4xl mx-auto my-10 rounded-md shadow-md border-t-4 border-yellow-400">
      <h2 className="text-[#3c5a96] font-bold text-lg md:text-2xl text-center underline decoration-red-600 mb-6">
        ABOUT THE CONFERENCE
      </h2>
      <p className="text-justify text-gray-700 text-sm md:text-base leading-relaxed">
        Virtual International Conference on Futuristic Communication and Network Technologies (VICFCNT-2021) is scheduled on December 10th and 11th 2021 at Vellore Institute of Technology, Chennai, Tamil Nadu, India. The School of Electronics Engineering at VIT University proudly organizes this conference in joint collaboration with Universiti Tunku Abdul Rahman (UTAR, Sungai Long Campus Malaysia) which would provide a forum for discussing cutting edge research in the field of Communication and Networks to disseminate their ideas and research findings.
      </p>
      <p className="mt-4 text-justify text-gray-700 text-sm md:text-base leading-relaxed">
        This would enrich the knowledge of the intellectuals who are part of this conference and would lead to further exploration and innovative research in the various domains of the conference. This conference would also help the budding engineers and experts working in the same areas of research to network. The world is centred on the various communication technologies and hence the main aim of this conference is to bring leading academic scientists, researchers and research scholars to exchange and share their experiences and research findings on all aspects in the emerging trends and technologies in the field of Optical Communication Networks and Devices, Acoustic, Speech, Video and Signal Processing, Wireless Communication Networks and Systems Antennas, Microwave and RF for Emerging Technologies, Internet of Things/ Internet of Everything/ Internet of Nano things, MEMS/NEMS for Future Networks, Wearable Technologies, Architecture, Applications and Security of Cyber–Physical Systems and Futuristic Technologies. The experts in these domains around the globe would be invited for delivering keynote talks and invited lectures. Research papers presented in this forum would be published in peer-reviewed scopus indexed publications.
      </p>
      <div className="flex flex-col md:flex-row justify-center mt-6 space-y-3 md:space-y-0 md:space-x-4">
        <a
          href="https://your-register-link.com"
          className="bg-[#3c5a96] text-white text-center px-6 py-2 w-48 rounded-md hover:bg-[#2e4778] transition-colors"
        >
          Register
        </a>
        <a
          href="https://your-call-for-papers-link.com"
          className="bg-[#3c5a96] text-white text-center px-6 py-2 w-48 rounded-md hover:bg-[#2e4778] transition-colors"
        >
          Call for Papers
        </a>
        <a
          href="https://your-paper-submission-link.com"
          className="bg-[#3c5a96] text-white text-center px-6 py-2 w-48 rounded-md hover:bg-[#2e4778] transition-colors"
        >
          Paper Submission
        </a>
      </div>
    </div>
  );
};

export default ConferenceAbout;
