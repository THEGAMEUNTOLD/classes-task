import React from 'react'
import Buttonpage from './Buttonpage'

const Homebottom = () => {
    return (
        <div className="flex justify-between items-start mt-90 mx-10 gap-8">
            {/* Left Section: Motivational Quote */}
            <div className="flex-1 mr-70">
                <Buttonpage
                    className="w-full text-white bg-black/80 backdrop-blur-md border border-white/30 rounded-4xl px-6 py-4 text-lg hover:bg-black/40 hover:scale-105 transform transition-all duration-300"
                    text="Chase your dreams, conquer every challenge."
                />
            </div>

            {/* Right Section: Social Buttons */}
            <div className="flex flex-row gap-4 flex-1 ml-30 mt-7">
                <Buttonpage className="text-white bg-black/80 backdrop-blur-md border border-white/30 rounded-4xl hover:bg-black/40 transition-colors duration-200" text="Facebook" icon={<i className="ri-arrow-right-up-line"></i>} />
                <Buttonpage className="text-white bg-black/80 backdrop-blur-md border border-white/30 rounded-4xl hover:bg-black/40 transition-colors duration-200" text="Instagram" icon={<i className="ri-arrow-right-up-line"></i>} />
                <Buttonpage className="text-white bg-black/80 backdrop-blur-md border border-white/30 rounded-4xl hover:bg-black/40 transition-colors duration-200" text="Twitter" icon={<i className="ri-arrow-right-up-line"></i>} />
            </div>
        </div>

    )
}

export default Homebottom
