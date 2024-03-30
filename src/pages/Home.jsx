import React from 'react'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='mt-[100px] w-full flex justify-center max-sm:mt-[70px]'>
          <Content/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home;