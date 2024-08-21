import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faIndustry, 
  faCogs, 
  faSearch, 
  faLightbulb, 
  faUsers, 
  faGlobe 
} from '@fortawesome/free-solid-svg-icons';

const ObjectivesSection = () => {
  const objectives = [
    { icon: faIndustry, text: 'To maximize the Industrial connectivity' },
    { icon: faCogs, text: 'To enrich Technological and Managerial Human Capital nurtured in a multicultural ambience' },
    { icon: faSearch, text: 'To create Centers of Excellence in contemporary areas of research.' },
    { icon: faLightbulb, text: 'To provide a common platform for the agglomeration of ideas of personnel from various walks of life for learning enrichment' },
    { icon: faUsers, text: 'To create opportunities and exploit the available resources to benefit industry/society' },
    { icon: faGlobe, text: 'To encourage participation in the National Agenda of knowledge building to foster International collaborations for mutual benefits in areas of research.' },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 mt-10">
        <h2 className="mt-10 scroll-m-20 border-b border-[#2b4a4d] pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 w-[50%] mx-auto text-[#2b4a4d] mb-16 text-center">
        FOCUS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {objectives.map((objective, index) => (
          <div key={index} className="flex items-start space-x-12">
            <FontAwesomeIcon icon={objective.icon} className="text-4xl text-gray-800" />
            <p className="text-lg">{objective.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObjectivesSection;
