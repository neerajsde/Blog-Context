import React, { useContext } from 'react'
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {isDarkMode, setIsDarkMode} = useContext(AppContext);
  return (
    <div 
      className={`w-full h-[70px] flex justify-around items-center shadow-lg fixed top-0 left-0 bg-white ${isDarkMode && 'dark-mode box-shadow-dark'} max-sm:h-[50px]`}
    >
        <Link to="/">
          <h1 
            className='text-3xl font-bold uppercase max-sm:text-xl'
          >Code<span className='text-blue-700'>help</span> blogs</h1>
        </Link>
        {!isDarkMode ? 
          (<MdDarkMode 
            className='text-3xl cursor-pointer transition-all duration-300 hover:text-blue-700 max-sm:text-xl' 
            onClick={() => setIsDarkMode(!isDarkMode)}
          />)
          :
          (<MdLightMode 
            className='text-3xl cursor-pointer transition-all duration-300 hover:text-blue-700 max-sm:text-xl' 
            onClick={() => setIsDarkMode(!isDarkMode)}
          />)
        }
    </div>
  )
}

export default Navbar;