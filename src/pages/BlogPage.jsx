import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import Navbar from '../components/Navbar';
import BlogDetails from '../components/BlogDetails';
import Spinner from '../components/Spinner';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const {loading, setLoading} = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRealedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log("API Response: ",data);

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch{
            toast.error("Data Not Found");
            toast.error("Something went wrong");
            setBlog(null);
            setRelatedBlogs([]);
        }
    }

    useEffect(() => {
        if(blogId){
            fetchRealedBlogs();
        }
    },[location.pathname]);


  return (
    <div className='w-full flex flex-col items-center'>
        <Navbar/>
        <div className='w-[620px] mt-[100px] mb-[30px] flex flex-col items-center gap-5 max-sm:w-[90%]'>
            <div className='w-full flex justify-start items-center'>
                <button
                    className='w-[120px] px-2 py-1 border-2 rounded font-semibold'
                    onClick={() => navigate(-1)}
                >Back</button>
            </div>
            {
                loading ? 
                (<Spinner/>)
                :
                (
                    blog ? 
                    (
                        <div className='w-full flex flex-col gap-4'>
                            <BlogDetails post={blog} />
                            <h2 className='text-2xl font-bold'>Related Blogs</h2>
                            {
                                relatedBlogs.map((post) => {
                                    return (
                                        <div key={post.id}>
                                            <BlogDetails post={post}/>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    )
                    :
                    (<div>No Blog Found</div>)
                )
            }
        </div>
    </div>
  )
}

export default BlogPage