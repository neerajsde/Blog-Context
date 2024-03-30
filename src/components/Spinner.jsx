import React from 'react'
import './Spinner.css';

const Spinner = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-2'>
        <div className='spinner'></div>
        <div class="loader"></div>
    </div>
  )
}

export default Spinner;