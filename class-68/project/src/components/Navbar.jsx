import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Linkspages from './Linkspages'
import Buttonpage from './Buttonpage'

const Navbar = () => {
    return (
        <div className='px-2 py-2 flex items-center justify-between'>
            <h1 className='text-xl'>THEGAMEUNTOLD</h1>
            <Linkspages />
           <Buttonpage 
           className=" bg-black text-white rounded-2xl"
           text="Book Now" 
           icon={<i className="ri-arrow-right-up-long-line"></i>} 
           />
        </div>
    )
}

export default Navbar

