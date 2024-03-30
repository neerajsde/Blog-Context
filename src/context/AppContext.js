import { createContext, useState } from "react";
import baseUrl from '../baseUrl';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages]  = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();

    async function fetchPostData(page=1, tag=null, category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log("API Response: ", data);
            setPosts(data.posts);
            setPage(data.page);
            setTotalPages(data.totalPages);
        }
        catch{
            toast.error('something went wrong');
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
        toast.success('new post loaded');
    }

    function pageChangeHandler(page){
        navigate( { search: `?page=${page}`});
        setPage(page);
    }

    const value = {
        loading,
        setLoading,
        page, 
        setPage,
        posts,
        setPosts,
        totalPages,
        isDarkMode,
        setIsDarkMode,
        setTotalPages, 
        fetchPostData,
        pageChangeHandler
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}