/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const contacts = [
  {
    name: 'Dr. Velmathi G',
    title: 'Program Chair',
    position: 'Professor',
    department: 'School of Electronics Engineering (SENSE), Vellore Institute of Technology',
    location: 'Chennai, Tamil Nadu – 600127',
    email: 'velmathi.g@vit.ac.in',
    image: '/images/velmathi.jpg', 
  },
  {
    name: 'Dr. N. Subhashini',
    title: 'General Chair',
    position: 'Associate Professor',
    department: 'School of Electronics Engineering (SENSE), Vellore Institute of Technology',
    location: 'Chennai, Tamil Nadu – 600127',
    email: 'subhashini.n@vit.ac.in ',
    image: '/images/subhashini.jpg'
  },
  {
    name: 'Dr. R G Sangeetha',
    title: 'Program Chair',
    position: 'Associate Professor',
    department: 'School of Electronics Engineering (SENSE), Vellore Institute of Technology',
    location: 'Chennai, Tamil Nadu – 600127',
    email: 'sangeetha.rg@vit.ac.in',
    image: '/images/sangeetha.jpg'
  },
];

const ContactCard = ({ contact }) => (
  <div className="bg-white pb-8 rounded-lg shadow-md text-center hover:cursor-pointer hover:shadow-lg w-96 mx-auto">
    <img src={contact.image} alt={contact.name} className="w-52 h-60 mx-auto rounded-full mb-4 shadow" />
    <h3 className="text-xl font-bold mb-2">{contact.name}</h3>
    <p className="text-gray-700 mb-2">{contact.title}</p>
    <p className="text-gray-700 mb-2">{contact.position}</p>
    <p className="text-gray-700 mb-2">{contact.department}</p>
    <p className="text-gray-700 mb-2">{contact.location}</p>
    <p className="text-gray-700 mb-2">
      <strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-blue-500">{contact.email}</a>
    </p>
    <a href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer">
      <button className="transition mt-8 bg-[#62b895] text-white text-center px-6 py-2 w-28 font-bold rounded-md hover:bg-[#49886e]">
        Contact
      </button>
    </a>
  </div>
);

const ContactUsSection = () => (
  <div className="w-full mx-auto py-12 px-8 bg-[#f1f7f6] mb-8">
    <div className="max-w-6xl mx-auto">
      <h2 className="mt-10 scroll-m-20 border-b border-[#35575a] pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 w-[50%] mx-auto text-[#35575a] text-center mb-8">
        ORGANIZING COMMITTEE
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 pt-8">
        <div className="flex justify-center">
          <ContactCard contact={contacts[1]} /> {/* General Chair */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <ContactCard contact={contacts[0]} /> {/* Program Chair 1 */}
          <ContactCard contact={contacts[2]} /> {/* Program Chair 2 */}
        </div>
      </div>
    </div>
  </div>
);

export default ContactUsSection;


// transition mt-8 bg-[#62b895] text-white text-center px-6 py-2 w-28 font-bold rounded-md hover:bg-[#49886e]">