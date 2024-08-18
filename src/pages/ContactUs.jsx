import React from 'react';

const contacts = [
  {
    name: 'Dr. K. Mohanaprasad',
    title: 'Post-Doctorate Research Fellow–UTAR, Malaysia',
    position: 'Associate Professor',
    department: 'School of Electronics Engineering (SENSE), Vellore Institute of Technology',
    location: 'Chennai, Tamil Nadu – 600127',
    email: 'secretariat.vicfcnt2021@vit.ac.in',
    phone1: '+91 94875 26097',
    phone2: '+91 99444 03862',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    name: 'Dr. N. Subhashini',
    title: 'Organizing Secretary',
    position: 'Associate Professor',
    department: 'School of Electronics Engineering (SENSE), Vellore Institute of Technology',
    location: 'Chennai, Tamil Nadu – 600127',
    email: 'secretariat.vicfcnt2021@vit.ac.in',
    phone1: '+91 97907 84855',
    phone2: null,
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
];

const ContactCard = ({ contact }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <img src={contact.image} alt={contact.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
    <h3 className="text-xl font-bold mb-2">{contact.name}</h3>
    <p className="text-gray-700 mb-2">{contact.title}</p>
    <p className="text-gray-700 mb-2">{contact.position}</p>
    <p className="text-gray-700 mb-2">{contact.department}</p>
    <p className="text-gray-700 mb-2">{contact.location}</p>
    <p className="text-gray-700 mb-2">
      <strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-blue-500">{contact.email}</a>
    </p>
    <p className="text-gray-700 mb-4">
      <strong>Phone:</strong> {contact.phone1} {contact.phone2 && ` / ${contact.phone2}`}
    </p>
    <a href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Contact via Email
      </button>
    </a>
  </div>
);

const ContactUsSection = () => (
  <div className="max-w-6xl mx-auto py-12 px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {contacts.map((contact, index) => (
        <ContactCard key={index} contact={contact} />
      ))}
    </div>
  </div>
);

export default ContactUsSection;
