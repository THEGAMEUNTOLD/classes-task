import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Buttonpage from './Buttonpage'

const Navbar = () => {
    return (


        <div className='px-2 py-2 flex items-center justify-between'>

            {/* logo */}

            <h1 className='text-xl'>THEGAMEUNTOLD</h1>

            {/* Navber links */}

            <div className="flex flex-wrap items-center gap-3">
                {["About Us", "Services", "Coaches", "Events", "Contact"].map(
                    (item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="relative px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-full overflow-hidden transition-all duration-300 ease-in-out hover:text-black hover:border-black">
                            <span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
                            <span className="relative z-10">{item}</span>
                        </a>
                    )
                )}
            </div>

            {/* Button */}
            
            <Buttonpage
                className=" bg-black text-white rounded-2xl"
                text="Book Now"
                icon={<i className="ri-arrow-right-up-long-line"></i>}
            />
        </div>
    )
}

export default Navbar

