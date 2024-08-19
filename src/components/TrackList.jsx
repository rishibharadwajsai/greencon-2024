import React from "react";

// Sample data
const tracks = [
  {
    trackName: "Sustainable Innovations in VLSI Devices, Circuits, and Systems",
    trackChairs: [
      {
        name: "Dr. Prathiba A",
        image: "/images/prathiba.jpeg",
        college: "VIT Chennai",
      },
      {
        name: "Dr. Umadevi S",
        image: "/images/umadevi.jpg",
        college: "VIT Chennai",
      },
    ],
    topics: [
      "Innovative Material and Devices Technologies",
      "Quantum Computing for VLSI",
      "Emerging Processors for System Design",
      "Analog IC Design, RF and Mixed Signal IC Design",
      "Advances in CAD for VLSI",
      "Automated Electronic Design Techniques for VLSI Systems",
      "Innovative Memory Solutions in Advanced VLSI Systems",
      "Testing and Verification of VLSI circuits",
      "Cutting-Edge MEMS devices and Microfluidic Technologies",
      "Advancements in VLSI Hardware for AI and Machine Learning",
      "Hardware and System Security",
      "Neuromorphic Computing – Spiking Neural Networks, Neuron models",
      "Energy-efficient Reliable System Design",
    ],
  },
  {
    trackName:
      "Microwave and Antenna Green Networks and Emerging Technologies( MAGNET)",
    trackChairs: [
      {
        name: "Dr. Usha Kiran Kommuri",
        image: "/images/ushakiran.jpg",
        college: "VIT Chennai",
      },
      {
        name: "Dr. Niraj Kumar",
        image: "/images/organizing-committee/niraj.jpg",
        college: "VIT Chennai",
      },
    ],
    topics: [
      "Flexible, Wearable and Implantable antennas",
      "Intelligent reflector surfaces for 5G/6G Mobile Networking",
      "Metamaterial, metasurface , FSS and EBG structures",
      "RF energy harvesting and wireless power transfer antennas",
      "3D printed Microwave devices and antennas",
      "Ultra-wideband (UWB) antennas and Dielecric Resonator antenna",
      "Antennas for NexGen Networks: Mobile, Vehicular Communications and UAVs in 5G/6G and Beyond",
      "RF technologies, antennas and devices for space and defence applications",
      "Reconfigurable antennas, adaptive arrays, active and smart antennas",
      "MIMO, Beamforming techniques and phased array antennas for 5G",
      "Antennas for Underwater communication",
      "Integrating RCS Reduction Strategies in Green Engineering",
      "Quantum Computing and AI/ML for Advancing Antenna Design and Optimization",
      "Computational Electromagnetics for Microwave and Antenna Design",
      "Passive/Active Microwave, mm-Wave and THz components and circuits",
      "Compact and Miniaturized TWT Devices for Emerging Technologies",
    ],
  },
  {
    trackName: "Green Innovations in Photonics & Optical Communication",
    trackChairs: [
      {
        name: "Dr. Sivasubramanian A",
        image: "/images/sivasubramanian.jpg",
        college: "VIT Chennai",
      },
      {
        name: "Dr. Ilavarasan T",
        image: "/images/ilavarasan.jpg",
        college: "VIT Chennai",
      },
    ],
    topics: [
      "Energy-Efficient Optical Networks for Carbon Footprint Reduction",
      "Green Photonics: Advancements in Eco-Friendly Light-Based Technologies",
      "Low-Power Optical Communication Systems for Green ICT",
      "Photonic Integration for Green Data Centers",
      "Optical Communication in Smart Grids and Green Energy",
      "Photonic Materials for Eco-Friendly Device Fabrication",
      "Emerging Green Photonics in Smart Cities",
      "Energy-Efficient Optical Amplifiers and Repeaters",
      "Optical Communication Technologies for Low-Energy IoT Solutions",
      "Underwater Optical Communication for Sustainable Marine Technologies",
      "Eco-Conscious Free Space Optical technology",
      "Quantum Photonics and Applications for Sustainable Technologies",
      "Energy-Efficient Optical Signal Processing & Microwave Photonics",
      "Eco-Friendly Optical Sensors for Environmental Monitoring and Sustainability",
      "Ultrafast Photonics and Nonlinear fiber optics",
    ],
  },
  {
    trackName: "Signal and Image Processing for Sustainable development",
    trackChairs: [
      {
        name: "Dr. Vijayarajan R",
        image: "/images/vijayarajan.jpg",
        college: "VIT Chennai",
      },
      {
        name: "Dr. Sankar Ganesh S",
        image: "/images/sss.jpg",
        college: "VIT Chennai",
      },
    ],
    topics: [
      "Audio and Acoustic Signal Processing",
      "AI for Speech and Language Processing",
      "Signal/Image Processing for Healthcare Applications",
      "AI for Signal/ Image Processing and Computer Vision",
      "Ethical Healthcare Intelligence",
      "Reproducible/Responsible AI for Signal and Image Processing",
      "Sensor Array and Multichannel Signal Processing",
      "Computer Vision for Smart Cities",
      "Image Processing for Sustainable and Precision Farming",
      "Signal/Image Processing for Autonomous Robot Navigation and Process Automation	",
      "Signal Processing for Radar and Sonar Applications",
    ],
  },
  {
    trackName: "Sustainable Intelligent Systems",
    trackChairs: [
      {
        name: "Dr. Gugapriya G",
        image: "/images/organizing-committee/gugapriya.jpg",
        college: "VIT Chennai",
      },
      {
        name: "Dr. Abraham Sudharson Ponraj",
        image: "/images/organizing-committee/abraham.jpg",
        college: "VIT Chennai",
      },
    ],
    topics: [
      "Energy-efficient embedded systems",
      "IoT enabled Manufacturing and Industrial Automation",
      "Sustainable Smart City Technologies",
      "Integration of intelligent sensors in embedded systems",
      "Security and privacy in embedded IoT networks",
      "Human-robot interaction in embedded environments",
      "Climate change and sustainability through embedded technologies",
      "Edge computing for healthcare analytics and decision support",
      "Modern embedded technologies for agricultural automation",
      "Adaptive learning algorithms for real time embedded systems",
      "Emerging technologies for sustainable automotive embedded systems",
    ],
  },
  {
    trackName: "Intelligent Wireless Communication system",
    trackChairs: [
      {
        name: "Dr. Vijay Kumar P",
        image: "/images/vijayakumar.jpg",
        college: "VIT Chennai",
      },
      {
        name: "Dr. Berlin Hency V",
        image: "/images/berlin.jpg",
        college: "VIT Chennai",
      },
    ],
    topics: [
      "Cognitive Radio and Dynamic Spectrum Access",
      "Vehicular Ad-Hoc Networks (VANETs)",
      "Wireless Communication for Smart Grids",
      "Millimeter-Wave and Terahertz Communication",
      "Massive MIMO and Beamforming",
      "Wireless Power Transfer and Energy Harvesting",
      "Satellite Communication and Unmanned Aerial Vehicles (UAVs)",
      "Quantum Communication and Cryptography",
      "Mobile Edge Computing and Fog Networks",
      "Reconfigurable Intelligent Surfaces for 5G /6G",
      "Machine and Deep Learning for Wireless Communications",
      "Transfer Learning for Wireless Communications and Networks",
    ],
  },
  {
    trackName: "Data-Driven Innovations in Electronics Engineering",
    trackChairs: [
      {
        name: "Dr. Logesh R",
        image: "/images/logesh.jpg",
        college: "VIT Chennai",
      },
      {
        name: "Dr. Suganthi K",
        image: "/images/suganthi.jpg",
        college: "VIT Chennai",
      },
    ],
    topics: [
      "Machine Learning Algorithms for Enhancing Signal Processing",
      "Predictive Maintenance for Electronic Devices Using Big Data",
      "Edge Computing and Real-Time Data Processing in Electronics",
      "Data Analytics for Enhanced Performance of Semiconductor Devices",
      "Big Data Applications in VLSI Design and Testing",
      "Automated Fault Detection in Electronic Systems Using AI",
      "AI-Enhanced Thermal Management in High-Performance Electronics",
      "Advanced Data Compression Techniques for Electronics Systems",
      "Data-Centric Approaches to Improve Antenna Design",
      "Real-Time Data Acquisition and Processing in Sensor Networks and Wireless Communication Systems",
      "Integration of Big Data Analytics in IoT Devices",
      "Data-Driven Modelling and Simulation of Electronic Systems",
      "AI-Driven Optimization in Consumer Electronics, Robotics and Manufacutring",
      "Data Mining Techniques for Enhancing Electronic Design Automation (EDA)",
    ],
  },
];

const TrackList = () => {
  return (
    <div className="w-full">
      {tracks.map((track, index) => (
        <div
          className="flex flex-wrap flex-col items-center justify-center mt-10 mb-20"
          key={index}
        >
          <h2 className="text-3xl font-semibold text-center ">
            {track.trackName}
          </h2>
          <h3 className="text-2xl font-normal text-center ">Track Chairs</h3>
          <div className="mt-2 h-0.5 w-[50%] bg-[#3c5a96] rounded-md"></div>
          <div className="flex flex-row flex-wrap mt-5 justify-around  items-center w-full border-2 border-black">
            {track.trackChairs.map((chair, i) => (
              <div
                key={i}
                className="flex flex-col mx-10 mt-10 mb-5 items-center"
              >
                <img
                  src={chair.image}
                  alt={chair.name}
                  className="w-40 border-2 border-black"
                />
                <div className="text-center mt-5 text-xl w-full">
                  <div className="font-semibold">{chair.name}</div>
                  <div>{chair.college}</div>
                </div>
              </div>
            ))}
          </div>
          <h3 className="mt-10 w-full text-center text-2xl bg-[#3c5a96] py-2 font-bold text-white">
            Topics
          </h3>
          <ul className="text-start w-full">
            {track.topics.map((topic, i) => (
              <li
                key={i}
                className="text-xl my-2 hover:bg-gray-300 p-2 font-medium shadow-md"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
