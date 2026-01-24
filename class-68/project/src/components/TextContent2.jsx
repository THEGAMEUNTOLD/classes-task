import React from 'react'

const TextContent2 = () => {
    return (
        <div className='flex flex-col md:flex-row items-center md:items-start gap-4 p-6'>
            {/* Left Content  */}
            <div className='md:w-1/2  p-2 rounded'>
                <h1 className='text-4xl font-bold mb-2 '>THEGAMEUNTOLD</h1>
            </div>
            {/* Right Content */}
            <div className='md:1/2 p-2 '>
                <p className='text-xl'>THEGAMEUNTOLD is a journey of hidden struggles, silent battles, unseen sacrifices, and untold victories
                    where every move matters, rules evolve, and only resilience writes the final score.</p>
            </div>
        </div>
    )
}

export default TextContent2
