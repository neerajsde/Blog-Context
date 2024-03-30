import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Content from '../components/Content';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CategoryPage = () => {
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
    const navigate = useNavigate();


  return (
    <div>
        <Navbar/>
        <div className='w-full mt-[100px] mb-[30px] flex flex-col gap-4 items-center max-sm:mt-[70px]'>
            <div className='w-full flex justify-between items-center max-sm:flex-col gap-y-4'>
                <button
                    className='w-[120px] px-2 py-1 border-2 rounded font-semibold'
                    onClick={() => navigate(-1)}
                >Back</button>
                <p className='text-xl font-semibold max-sm:text-sm'>Blogs on <span className='font-bold underline text-gray-500'>{category}</span></p>
            </div>
            <Content/>
        </div>
        <Footer/>
    </div>
  )
}

export default CategoryPage