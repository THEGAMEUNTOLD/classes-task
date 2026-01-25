import React from 'react'
import Homeposter from "../assets/Homeposter.jpg";
import HomeContent from './HomeContent';


const HomePage = () => {
  return (
    <div className="h-screen w-full">

      {/* HomePagePoster */}
      
      <div className='w-full h-screen px-10 pt-4 pb-4' >
        <img
          className="w-full h-[95%] object-cover rounded-[40px] brightness-50"
          src={Homeposter}
          alt=""
        />

      </div>
      <HomeContent />
    </div>

  )
}

export default HomePage
