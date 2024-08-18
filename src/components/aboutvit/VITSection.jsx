// src/components/VITSection.js
import React from 'react';

const icons = [
    {
        name: "World class Education",
        image: "../../../public/images/icons/education.png",
    },
    {
        name: "Cutting edge Research",
        image: "../../../public/images/icons/research.jpeg",
    },
    {
        name: "Impactful People",
        image: "../../../public/images/icons/people.avif",
    },
    {
        name: "Rewarding Co-creations",
        image: "../../../public/images/icons/reward.jpg",
    },
    {
        name: "Service to Society",
        image: "../../../public/images/icons/service.jpg",
    },
]
const VITSection = () => {
  return (
    <section className="py-8 mt-16">
      <div className="container mx-auto text-center">
        
      <h2 className="mt-10 scroll-m-20 border-b border-[#3c5a96] pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 w-[50%] mx-auto text-[#3c5a96]">
        ABOUT US
      </h2>
        <p className="mt-8 text-lg sm:text-xl text-gray-600 font-bold px-[7%] sm:px-[15%] text-center sm:text-start">
        VIT, for the past 35 years, has made a mark in the field of higher education in India imparting quality education in a multi-cultural ambience, intertwined with extensive application-oriented research. VIT was established with the aim to provide quality higher education on par with International Standards. It persistently seeks and adopts innovative methods to improve the quality of higher education on a consistent basis. Established by well-known educationalist and former parliamentarian, Dr. G. Viswanathan, Founder and Chancellor, a visionary who transformed VIT into a center of excellence in higher technical education.
        </p>
        <div className="w-full sm:w-[90%] flex flex-wrap justify-center mt-8 mx-auto">
      {icons.map((person, index) => (
        <div
          key={index}
          className="w-48 m-4 border pb-4 border-dotted shadow hover:shadow-lg hover:cursor-pointer px-2"
        >
          <img
            src={person.image}
            alt={person.name}
            className="w-64 h-76 mx-auto py-4"
          />
          <p className="text-md text-[#3c5a96] text-gray-500">{person.name}</p>
        </div>
      ))}
    </div>

        
      </div>
    </section>
  );
};

export default VITSection;
