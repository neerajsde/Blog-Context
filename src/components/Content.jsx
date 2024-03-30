import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Content = () => {
  const {loading, posts} = useContext(AppContext);
  return (
    <div className='w-[620px] mb-[80px] flex flex-col gap-5 max-sm:w-[90%]'>
      {loading ? (<Spinner/>) : (
        posts.map((post, id) => {
          return (
            <BlogDetails key={id} post={post}/>
          )
        })
      )}
    </div>
  )
}

export default Content;