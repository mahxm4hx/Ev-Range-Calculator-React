import React from 'react'
import Calculation from './Calculation.jsx'
import Footer from './Footer.jsx'

const HomeSection = () => {
  return (
    <div>
    <div>
      <h1 className='text-center sm:font-bold sm:pt-12 sm:text-5xl text-blue-800 text-3xl pt-20'>Electric Vehicle Range Calculator</h1>
      <p className='sm:px-20 sm:text-lg sm:pt-5 px-5 pt-12 text-lg'>Use our electric car range calculator to estimate how far you can go with your vehicle. Follow the instructions below the tool if you need further assistance.</p>
      </div>
      <div>
        <h2 className='sm:px-20 sm:font-bold sm:text-3xl sm:pt-5 px-5 pt-14 font-bold text-2xl'>How far can an electric car go?</h2>
        <p className='sm:px-20 sm:text-lg sm:pt-5 px-5 pt-8 text-lg'>Our interactive online tool helps you estimate the range of your EV based on the battery size, the state of charge, and the vehicle’s energy consumption. You can calculate the range left based on the actual state of charge or you can also calculate the distance you’ll be able to drive after charging your car to a certain battery level.</p>
      </div>
      
      <Calculation />
      
</div>

  )
}

export default HomeSection
