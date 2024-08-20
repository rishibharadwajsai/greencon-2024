import React from 'react'
import Timeline from '../components/home/Timeline'
import ConferenceAbout from '../components/home/AboutConference'
import ImportantSection from '../components/home/ImportantSection'
import RegistrationFeeSection from '../components/home/RegistrationFeeSection'
import CountdownTimer from '../components/home/CountdownTimer'

const Home = () => {
  return (
    <>
    <section className='flex flex-col sm:flex-row justify-around mx-auto'>
        <div className='md:w-1/4'>
        <Timeline />
        </div>
        <div className='mx-auto w-[95%] md:w-1/2'>
        <ConferenceAbout />
        </div>
        <div className='md:w-1/3'>
        <ImportantSection />
        {/* <RegistrationFeeSection /> */}
        </div>
    </section>
    <CountdownTimer />
    </>

  )
}

export default Home