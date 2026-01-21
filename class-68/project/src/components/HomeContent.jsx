import React from 'react'
import TextContent from './TextContent'
import Homebottom from './Homebottom'
import Buttonpage from './Buttonpage'

const HomeContent = () => {
    return (
        <div className="absolute inset-0 flex flex-col items-center  text-center text-white py-20 px-6">

            <TextContent />

            <Buttonpage
                className="mt-45 px-5 py-1 text-2xl text-white bg-black/80 backdrop-blur-md border border-white/30 rounded-2xl hover:bg-black/40 transition-colors duration-300"
                style={{ fontFamily: '"Dancing Script", cursive' }}
                text="Give a chance to You're in a child"
            />

            <Homebottom />
        </div>
    )
}

export default HomeContent
