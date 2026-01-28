import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between fixed top-0 left-0 w-full h-15 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg'>
            <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4 w-full'>
                {/* Logo */}
                <div>
                    <h1 className='text-2xl font-semibold text-white tracking-wide'>Contact Management</h1>
                </div>
                   {/* Navigation Links */}
                   
                <div className='hidden md:flex items-center gap-8 text-sm font-medium text-white/80'>
                    <a href="#" className='transition-all duration-300 hover:scale-105 hover:text-white'>Home</a>
                    <a href="#" className='transition-all duration-300 hover:scale-105 hover:text-white'>Contacts</a>
                    <a href="#" className='transition-all duration-300 hover:scale-105 hover:text-white'>+ Add Contact </a>
                    <a href="#" className='transition-all duration-300 hover:scale-105 hover:text-white'> profile </a>
                </div>

                {/* Dark Mode Toggle */}
                <div>
                    <label className='relative inline-flex items-center cursor-pointer'>
                        <input type="checkbox" className='sr-only peer' />
                    </label>
                </div>

            </div>
        </div>
    )
}

export default Navbar
