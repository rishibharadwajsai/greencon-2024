import React from 'react'
import VITSection from '../components/aboutvit/VITSection'
import PatronsSection from '../components/aboutvit/PatronSection'
import Slideshow from '../components/aboutvit/Slideshow'
import SchoolsSection from '../components/aboutvit/SchoolsSection'
import ObjectivesSection from '../components/aboutvit/ObjectivesSection'

const AboutVit = () => {
  return (
    <>
    <div className="w-full flex sm:flex-row flex-col mt-8">
        <div className="flex-col w-full sm:w-1/2 justify-center my-auto px-4 mx-auto">
        <img src="/logos/vitlogo-white.jpg" alt="VIT Logo" className="hidden sm:block mx-auto mb-6 w-64 h-auto" />
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center px-2 text-[#3c5a96]">
        VELLORE INSTITUTE OF TECHNOLOGY, CHENNAI
      </h1>
      <h3 className="mt-4 scroll-m-20 text-2xl opacity-80 italic tracking-tight text-center text-[#3c5a96]">
      Transforming life through excellence in education and research.
      </h3>
        </div>
        <div className='w-full sm:w-1/2 m-auto'>
            <Slideshow />
        </div>
    </div>
    <VITSection />
    <PatronsSection />
    <ObjectivesSection />
    <SchoolsSection />
    </>
  )
}

export default AboutVit