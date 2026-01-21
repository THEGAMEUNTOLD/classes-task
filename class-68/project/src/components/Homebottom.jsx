import React from 'react'
import Buttonpage from './Buttonpage'

const Homebottom = () => {
    return (
        <div className='flex flex-row mt-38 ml-200 gap-3'>
            <Buttonpage
                className="'text-white bg-black/80 backdrop-blur-md border border-white/30 rounded-2xl hover:bg-black/40 transition-colors duration-200"
                text="Facebook"
                icon={<i className="ri-arrow-right-up-line"></i>}
            />
            <Buttonpage
                className="'text-white bg-black/80 backdrop-blur-md border border-white/30 rounded-2xl hover:bg-black/40 transition-colors duration-200"
                text="Instagram"
                icon={<i className="ri-arrow-right-up-line"></i>}
            />
            <Buttonpage
                className="'text-white bg-black/80 backdrop-blur-md border border-white/30 rounded-2xl hover:bg-black/40 transition-colors duration-200"
                text="Twitter"
                icon={<i className="ri-arrow-right-up-line"></i>}
            />
        </div>
    )
}

export default Homebottom
