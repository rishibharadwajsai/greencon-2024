// src/components/VITSection.js
import React from 'react';

const VITSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <img src="path_to_vit_logo" alt="VIT Logo" className="mx-auto mb-6 w-48 h-auto" />
        <h1 className="text-4xl font-bold text-gray-800">Vellore Institute of Technology</h1>
        <p className="mt-4 text-lg text-gray-600">
          Description or additional information about the Vellore Institute of Technology.
        </p>
      </div>
    </section>
  );
};

export default VITSection;
