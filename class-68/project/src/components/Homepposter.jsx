import React from 'react'
import Homeposter from "../assets/Homeposter.jpg";


const Homepposter = () => {
    return (
        <div className='w-full h-screen px-10 pt-4 pb-4' >
            <img
                className="w-full h-[95%] object-cover rounded-[40px]"
                src={Homeposter}
                alt=""
            />
        </div>
    )
}

export default Homepposter
