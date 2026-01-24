import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import HomePage2 from './components/HomePage2'
import FooterPage from './components/FooterPage'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <HomePage />
      <HomePage2 />
      <FooterPage/>
    </div>
  )
}

export default App
