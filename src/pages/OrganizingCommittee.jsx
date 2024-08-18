import React from "react";
import MainSection from "../components/organizingcommittee/MainSection";

const OrganizingCommittee = () => {
  const OCSec = [
    {
      title: "Convener",
      imgObj: [
        { imgSrc: "/images/organizing-committee/reena.jpg", name: "Dr. Reena Monica" },
        { imgSrc: "/images/organizing-committee/johnalex.jpg", name: "Dr. John Sahaya Rani Alex" },
      ],
    },
    {
      title: "General Chair",
      imgObj: [
        { imgSrc: "/images/organizing-committee/subhashini.jpg", name: "Dr. Subhashini N" },
      ],
    },
    {
      title: "Program Chair 1",
      imgObj: [
        { imgSrc: "/images/velmathi.jpg", name: "Dr. Velmathi G" },
      ],
    },
    {
      title: "Program Chair 2",
      imgObj: [
        { imgSrc: "/images/sangeetha.jpg", name: "Dr. Sangeetha R G" },
      ],
    },
    {
      title: "Programme Scientific committee",
      imgObj: [
        { imgSrc: "/images/organizing-committee/Thiripura.jpg", name: "Dr. Thiripurasundari D" },
        { imgSrc: "/images/organizing-committee/augusta.jpg", name: "Dr. Augusta Sophy Beulet P" },
        { imgSrc: "/images/organizing-committee/durai.jpg", name: "Dr. Ananiah Durai S" },
        { imgSrc: "/images/organizing-committee/laxmi.jpg", name: "Dr. Lakshmi B" },
      ],
    },
    {
      title: "Outreach",
      imgObj: [
        { imgSrc: "/images/organizing-committee/vydeki.jpg", name: "Dr. Vydeki D" },
        { imgSrc: "/images/Track-chair/jagannath.jpg", name: "Dr. Jagannath M" },
      ],
    },
    {
      title: "sponsorship",
      imgObj: [
        { imgSrc: "/images/organizing-committee/sathiya.jpg", name: "Dr. Sathiya Narayanan S" },
        { imgSrc: "/images/organizing-committee/srm.jpg", name: "Dr. Soumya Ranjan Mahapatro" },
        { imgSrc: "/images/organizing-committee/prasanna.jpg", name: "Dr. Prasanna Bharathi S" },
      ],
    },
    {
      title: "Treasurer",
      imgObj: [
        { imgSrc: "/images/organizing-committee/annis.jpg", name: "Dr. Annis Fathima A" },
        { imgSrc: "/images/organizing-committee/usha.jpg", name: "Dr. Usha Rani S" },
      ],
    },
    {
      title: "Registration Committee",
      imgObj: [
        { imgSrc: "/images/organizing-committee/muthulakshmi.jpg", name: "Dr. Muthulakshmi S" },
        { imgSrc: "/images/organizing-committee/anita.jpg", name: "Dr. Anita Angeline A" },
        { imgSrc: "/images/organizing-committee/dkm.jpg", name: "Dr. Dheeren Ku Mahapatra A" },
        { imgSrc: "/images/organizing-committee/ssj.jpg", name: "Dr. Sathya Sree J" },
      ],
    },
    {
      title: "CMT & Publication",
      imgObj: [
        { imgSrc: "/images/organizing-committee/muthulakshmi.jpg", name: "Dr. Sasipriya P" },
        { imgSrc: "/images/organizing-committee/mohana.jpg", name: "Dr. Mohanaprasad" },
        { imgSrc: "/images/organizing-committee/nair.jpg", name: "Dr. Saranya Nair M" },
        { imgSrc: "/images/organizing-committee/pritamb.jpg", name: "Dr. Pritam Bhattacharjee" },
      ],
    },
    {
      title: "Website",
      imgObj: [
        { imgSrc: "/images/organizing-committee/richards.jpg", name: "Dr. Richards Joe Stanislaus" },
        { imgSrc: "/images/organizing-committee/kalaivanan.jpg", name: "Dr. Kalaivanan K" },
        { imgSrc: "/images/organizing-committee/nitish.jpg", name: "Dr. Nitish Katal" },
      ],
    },
    {
      title: "Endorsement",
      imgObj: [
        { imgSrc: "/images/organizing-committee/hemanth.jpg", name: "Dr. Hemanth C" },
        { imgSrc: "/images/Track-chair/vetrivelen.jpg", name: "Dr. Vetrivelen P" },
        { imgSrc: "/images/organizing-committee/nirmala.jpg", name: "Dr. Nirmala P" },
        { imgSrc: "/images/organizing-committee/rajup.jpg", name: "Dr. Raju Patel" },
      ],
    },
    {
      title: "Event mangament",
      imgObj: [
        { imgSrc: "/images/organizing-committee/nagajayanthi.jpg", name: "Dr. Nagajayanthi B" },
        { imgSrc: "/images/organizing-committee/sasithradevi.jpg", name: "Dr. Sasithra Devi" },
        { imgSrc: "/images/organizing-committee/florence.jpg", name: "Dr. Florence Gnana Poovathy J" },
        { imgSrc: "/images/organizing-committee/kiran.jpg", name: "Dr. Kiran Kumar M" },
      ],
    },
    {
      title: " Design & Printing",
      imgObj: [
        { imgSrc: "/images/organizing-committee/vignesh.jpg", name: "Dr. Jaya Vignesh T" },
        { imgSrc: "/images/organizing-committee/chanthini.jpg", name: "Dr. Chanthini Baskar" },
        { imgSrc: "/images/organizing-committee/kiruthika.jpg", name: "Dr. Kiruthika S" },
      ],
    },
    {
      title: " Hospitality",
      imgObj: [
        { imgSrc: "/images/organizing-committee/ravipd.jpg", name: "Dr. Ravi Prakash Dwivedi" },
        { imgSrc: "/images/organizing-committee/rahuln.jpg", name: "Dr. Rahul Narasimhan A" },
        { imgSrc: "/images/organizing-committee/jena.jpg", name: "Dr. Biswajit Jena" },
        { imgSrc: "/images/organizing-committee/skp.jpg", name: "Dr. Sunil Kumar Pradhan" },
        { imgSrc: "/images/organizing-committee/ranjeet.jpg", name: "Dr. Ranjeet Kumar" },
        { imgSrc: "/images/organizing-committee/suman.jpg", name: "Dr. Suman Saha" },
      ],
    },
    {
      title: "purchase",
      imgObj: [
        { imgSrc: "/images/organizing-committee/arivarasi.jpg", name: "Dr. Arivarasi A" },
        { imgSrc: "/images/organizing-committee/papa.jpg", name: "Dr. Papanasam E" },
        { imgSrc: "/images/organizing-committee/shiba.jpg", name: "Dr. Shoba S" },
      ],
    },
  ];

  return (
    <div>
      <h2 className="mt-10 scroll-m-20 border-b border-[#3c5a96] pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 w-[50%] mx-auto text-[#3c5a96] text-center">
        ORGANIZING COMMITTEE
      </h2>
      {OCSec.map((obj, index) => (
        <MainSection key={index} title={obj.title} imgSrc={obj.imgObj} />
      ))}
    </div>
  );
};

export default OrganizingCommittee;
