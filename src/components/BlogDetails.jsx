import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { NavLink } from 'react-router-dom';

const BlogDetails = ({post}) => {
    const {isDarkMode} = useContext(AppContext);

  return (
    <div className={`w-full flex flex-col border border-black p-4 rounded-md gap-4 ${isDarkMode && 'border-bl'}`}>

        <div className='flex gap-2 items-center w-full'>
        <img src={post.img} alt='Not Found' className='w-[60px] h-[60px] rounded-full max-sm:w-[40px] max-sm:h-[40px]'/>
        <div className='flex flex-col w-full'>
            <NavLink 
                className='text-xl font-bold max-sm:text-sm hover:underline'
                to={`/blog/${post.id}`}
            >{post.title}</NavLink>
            <div className='flex justify-between max-sm:flex-col'>
            <p className='text-sm max-sm:text-xs'>
                By <i>{post.author}</i> {`on `}
                <NavLink 
                    className='underline font-bold'
                    to={`/categories/${post.category.replaceAll(" ","-")}`}
                >{post.category}</NavLink>
            </p>
            <p className='text-sm max-sm:text-xs'>Posted on {post.date}</p>
            </div>
        </div>
        </div>

        <div>
        <div className='text-md max-sm:text-sm'>{post.content}</div>

        <div className='flex gap-2 flex-wrap'>
            {post.tags.map((tag, index) => {
            return (
                <NavLink 
                    key={index} 
                    className='text-xs font-bold text-blue-700 underline'
                    to={`/tags/${tag.replaceAll(" ","-")}`}
                >#{tag}</NavLink>
            )
            })}
        </div>
        </div>
    </div>
  )
}

export default BlogDetails;