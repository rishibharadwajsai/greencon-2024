import React from 'react';

const SchoolsSection = () => {
  const schools = [
    {
      name: 'School of Advance Sciences (SAS)',
      description:
        'The School offers M.Phil and Ph.D programs in Chemistry, Physics, Mathematics, English, French, German, Japanese and Chinese.',
    },
    {
      name: 'School of Electrical Engineering (SELECT)',
      description:
        'The School offers B.Tech, M.Tech, M.Tech by Research and Ph.D programs in Electrical and Electronics streams with various specializations.',
    },
    {
      name: 'School of Electronics Engineering (SENSE)',
      description:
        'The School offers B.Tech, M.Tech, M.Tech by Research and Ph.D programs in Electronics and Communication streams with various specializations.',
    },
    {
      name: 'School of Mechanical Engineering (SMEC)',
      description:
        'The School offers B.Tech, M.Tech, M.Tech by Research and Ph.D programs in Mechanical stream with various specializations.',
    },
    {
      name: 'School of Civil Engineering (SCE)',
      description:
        'The School offers B.Tech, M.Tech, M.Tech by Research and Ph.D programs in Civil stream with various specializations.',
    },
    {
      name: 'School of Computer Science and Engineering (SCOPE)',
      description:
        'The School offers B.Tech, M.Tech programs, M.Tech by Research and Ph.D programs in Computer Science and Engineering with various specializations.',
    },
    {
      name: 'VIT Business School (VITBS)',
      description:
        'The School offers B.Tech, M.Tech, M.Tech by Research and Ph.D in Management.',
    },
    {
      name: 'VIT Law School (VITSOL)',
      description:
        'The school offers Bachelors degree in B.A.LLB (Hons), both integrated and double degree programs.',
    },
    {
      name: 'VIT Fashion Institute of Technology (VFIT)',
      description: 'The school offers fashion technology program.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 mt-16">
      <h2 className="mt-10 scroll-m-20 border-b border-[#3c5a96] pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 w-[50%] mx-auto text-[#3c5a96] mb-16 text-center">
        SCHOOLS AT VIT CHENNAI
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {schools.map((school, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold mb-2">{school.name}</h3>
            <p className='text-lg mb-2'>{school.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolsSection;
