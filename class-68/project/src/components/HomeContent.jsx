import React from 'react'
import Buttonpage from './Buttonpage'

const HomeContent = () => {
    return (
        <div className="absolute inset-0 flex flex-col items-center  text-center text-white py-20 px-6">
            {/* Text content */}
            <div >
                <h1 className="text-3xl text-white font-bold tracking-tight">
                    THEGAMEUNTOLD
                </h1>

                <p className="mt-4  text-3xl  font-bold text-white ">
                    This is Where Your Inner Warrior Rises
                </p>
            </div>

            {/* Home option Buttons */}
            <div className="flex justify-between items-start mt-90 mx-10 gap-8">

                {/* Left Section */}

                <div className="flex-1 mr-70">
                    <Buttonpage
                        className="w-full text-white bg-black/80 backdrop-blur-md border border-white/30 rounded-4xl px-6 py-4 text-lg hover:bg-black/40 hover:scale-105 transform transition-all duration-300"
                        text="Chase your dreams, conquer every challenge."
                    />
                </div>

                {/* Right Section */}

                <div className="flex flex-row gap-4 flex-1 ml-30 mt-7">
                    <Buttonpage className="text-white bg-black/80 backdrop-blur-md border border-white/30 rounded-4xl hover:bg-black/40 transition-colors duration-200" text="Facebook" icon={<i className="ri-arrow-right-up-line"></i>} />
                    <Buttonpage className="text-white bg-black/80 backdrop-blur-md border border-white/30 rounded-4xl hover:bg-black/40 transition-colors duration-200" text="Instagram" icon={<i className="ri-arrow-right-up-line"></i>} />
                    <Buttonpage className="text-white bg-black/80 backdrop-blur-md border border-white/30 rounded-4xl hover:bg-black/40 transition-colors duration-200" text="Twitter" icon={<i className="ri-arrow-right-up-line"></i>} />
                </div>
            </div>

        </div>
    )
}

export default HomeContent
