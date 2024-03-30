import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Footer = () => {
  const {page, totalPages, pageChangeHandler, isDarkMode} = useContext(AppContext);

  return (
    <div className={`w-full h-[60px] flex justify-around items-center box-shadow fixed bottom-0 left-0 bg-white ${isDarkMode && 'dark-mode box-shadow-dark'} max-sm:h-[50px]`}>
      <div className='flex items-center gap-4'>
        {
          page > 1 &&
          (<button 
            onClick={() => pageChangeHandler(page - 1)}
            className={`text-base border border-black px-3 py-0 rounded-sm transition-all duration-300 hover:bg-blue-300 ${isDarkMode && 'border-bl'}`}
          >Prev</button>)
        }
        {
          page !== totalPages && 
          (<button 
            onClick={() => pageChangeHandler(page + 1)}
            className={`text-base border border-black px-3 py-0 rounded-sm transition-all duration-300 hover:bg-blue-300 ${isDarkMode && 'border-bl'}`}
          >Next</button>)
        }
      </div>
      <div className='font-bold'>Page {page} of {totalPages}</div>
    </div>
  )
}

export default Footer;