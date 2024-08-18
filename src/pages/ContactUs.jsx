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
    // phone1: '+91 94875 26097',
    // phone2: '+91 99444 03862',
    image: '../../public/images/velmathi.jpg', 
  },
  {
    name: 'Dr. N. Subhashini',
    title: 'General Chair',
    position: 'Associate Professor',
    department: 'School of Electronics Engineering (SENSE), Vellore Institute of Technology',
    location: 'Chennai, Tamil Nadu – 600127',
    email: 'subhashini.n@vit.ac.in ',
    // phone1: '+91 97907 84855',
    // phone2: null,
    image: '../../public/images/subhashini.jpg'
  },
  {
    name: 'Dr. R G Sangeetha',
    title: 'Program Chair',
    position: 'Associate Professor',
    department: 'School of Electronics Engineering (SENSE), Vellore Institute of Technology',
    location: 'Chennai, Tamil Nadu – 600127',
    email: 'sangeetha.rg@vit.ac.in',
    // phone1: '+91 97907 84855',
    // phone2: null,
    image: '../../public/images/sangeetha.jpg'
  },
];

const ContactCard = ({ contact }) => (
  <div className="bg-white pb-8 rounded-lg shadow-md text-center hover:cursor-pointer hover:shadow-lg">
    <img src={contact.image} alt={contact.name} className="w-52 h-60 mx-auto rounded-full mb-4 shadow" />
    <h3 className="text-xl font-bold mb-2">{contact.name}</h3>
    <p className="text-gray-700 mb-2">{contact.title}</p>
    <p className="text-gray-700 mb-2">{contact.position}</p>
    <p className="text-gray-700 mb-2">{contact.department}</p>
    <p className="text-gray-700 mb-2">{contact.location}</p>
    <p className="text-gray-700 mb-2">
      <strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-blue-500">{contact.email}</a>
    </p>
    {/* <p className="text-gray-700 mb-4">
      <strong>Phone:</strong> {contact.phone1} {contact.phone2 && ` / ${contact.phone2}`}
    </p> */}
    <a href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer">
      <button className="bg-[#3c5a96] text-white px-6 py-2 rounded hover:bg-blue-600 transition mt-8">
        Contact
      </button>
    </a>
  </div>
  
);

const ContactUsSection = () => (
  <>
  {/* <div className="flex flex-wrap justify-center mt-8">
<div className="w-72 m-4 border pb-4 border-dotted shadow hover:shadow-lg hover:cursor-pointer">
  <img src="../../../public/images/partons/chancellor.jpg" alt="Patron Name" className="w-64 h-76 mx-auto py-4" />
  <h3 className="mt-4 text-lg font-medium text-gray-700">Dr. </h3>
  <p className="text-sm text-gray-500">Chancellor</p>
</div>
</div> */}
  <div className="max-w-6xl mx-auto py-12 px-8">
  <h2 className="mt-10 scroll-m-20 border-b border-[#3c5a96] pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 w-[50%] mx-auto text-[#3c5a96] text-center mb-8">
        ORGAINIZING COMMITTEE
      </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
      {contacts.map((contact, index) => (
        <ContactCard key={index} contact={contact} />
      ))}
    </div>
  </div>
  </>
);

export default ContactUsSection;
