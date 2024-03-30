import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Footer from '../components/Footer';

const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");

  return (
    <div>
      <Navbar/>
      <div className='w-full min-h-screen flex justify-center'>
        <div className='w-[620px] mt-[100px] flex flex-col items-center gap-5 max-sm:w-[90%]'>

          <div className='w-full flex justify-between items-center gap-y-2 max-sm:flex-col'>
            <button
              className='w-[120px] px-2 py-1 border-2 rounded font-semibold'
              onClick={() => navigate(-1)}
            >Back</button>

            <h1 className='text-xl font-semibold max-sm:text-sm'>Blogs Tagged <span className='text-blue underline font-bold'>#{tag}</span></h1>
          </div>

          <Content/>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default TagPage