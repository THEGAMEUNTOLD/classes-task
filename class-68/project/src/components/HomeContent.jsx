import React from 'react'
import TextContent from './TextContent'
import Homebottom from './Homebottom'
import Buttonpage from './Buttonpage'

const HomeContent = () => {
    return (
        <div className="absolute inset-0 flex flex-col items-center  text-center text-white py-20 px-6">

            <TextContent />

           
            <Homebottom />
        </div>
    )
}

export default HomeContent
