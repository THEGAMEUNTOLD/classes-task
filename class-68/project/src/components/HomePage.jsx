import React from 'react'
import Homeposter from "../assets/Homeposter.jpg";
import Homepposter from './homepposter';
import HomeContent from './HomeContent';


const HomePage = () => {
  return (
    <div className="h-screen w-full">
      <Homepposter />
      <HomeContent />
    </div>

  )
}

export default HomePage
