// src/components/PatronsSection.js
import React from 'react';
const vp = [
    {
        name: "Mr. Sankar Viswanathan",
        title: "Vice-President, VIT",
        image: "../../public/images/partons/vp.jpg"
    },
    {
        name: "Dr. Sekar Viswanathan",
        title: "Vice-President, VIT",
        image: "../../public/images/partons/vp1.jpg"
    },
    {
        name: "Mr. G V Selvam",
        title: "Vice-President, VIT",
        image: "../../public/images/partons/vp3.jpg"
    },
]

const vc = [
    {
        name: "Dr. Rambabu Kodali",
        title: "Vice Chancellor, VIT",
        image: "../../../public/images/partons/vc.jpg"
    },
    {
        name: "Dr. V. S. Kanchana Bhaaskaran",
        title: "Vice Chancellor, VIT",
        image: "../../public/images/partons/provc.jpg"
    },
]

const others = [
    {
        name: "Ms. Kadhambari S. Viswanathan",
        title: "Assistant Vice-President, VIT",
        image: "../../../public/images/partons/avp.jpg"
    },
    {
        name: "Dr. Sandhya Pentareddy",
        title: "Executive Director, VIT",
        image: "../../public/images/partons/ed.jpg"
    },
]
const PatronsSection = () => {
  return (
    <section className="bg-white py-12 mt-8">
      <div className="container mx-auto text-center">
      <h2 className="mt-10 scroll-m-20 border-b border-[#3c5a96] pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 w-[50%] mx-auto text-[#3c5a96]">
        PATRONS
      </h2>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="w-72 m-4 border pb-4 border-dotted shadow hover:shadow-lg hover:cursor-pointer">
            <img src="../../../public/images/partons/chancellor.jpg" alt="Patron Name" className="w-64 h-76 mx-auto py-4" />
            <h3 className="mt-4 text-lg font-medium text-gray-700">Dr. </h3>
            <p className="text-sm text-gray-500">Chancellor</p>
          </div>
        </div>

  {/* Vice President */}
        <div className="flex flex-wrap justify-center mt-8">
      {vp.map((person, index) => (
        <div
          key={index}
          className="w-72 m-4 border pb-4 border-dotted shadow hover:shadow-lg hover:cursor-pointer"
        >
          <img
            src={person.image}
            alt={person.name}
            className="w-64 h-76 mx-auto py-4"
          />
          <h3 className="mt-4 text-lg font-medium text-gray-700">{person.name}</h3>
          <p className="text-sm text-gray-500">{person.title}</p>
        </div>
      ))}
    </div>

  {/* ED and Assistant VP */}
    <div className="flex flex-wrap justify-center mt-8">
      {others.map((person, index) => (
        <div
          key={index}
          className="w-72 m-4 border pb-4 border-dotted shadow hover:shadow-lg hover:cursor-pointer"
        >
          <img
            src={person.image}
            alt={person.name}
            className="w-64 h-76 mx-auto py-4"
          />
          <h3 className="mt-4 text-lg font-medium text-gray-700">{person.name}</h3>
          <p className="text-sm text-gray-500">{person.title}</p>
        </div>
      ))}
    </div>


  {/* Vc and ProVC */}
    <div className="flex flex-wrap justify-center mt-8">
      {vc.map((person, index) => (
        <div
          key={index}
          className="w-72 m-4 border pb-4 border-dotted shadow hover:shadow-lg hover:cursor-pointer"
        >
          <img
            src={person.image}
            alt={person.name}
            className="w-64 h-76 mx-auto py-4"
          />
          <h3 className="mt-4 text-lg font-medium text-gray-700">{person.name}</h3>
          <p className="text-sm text-gray-500">{person.title}</p>
        </div>
      ))}
    </div>
        </div>

        
    </section>
  );
};

export default PatronsSection;
