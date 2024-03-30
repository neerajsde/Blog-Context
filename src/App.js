import { Toaster } from 'react-hot-toast';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage';
import './App.css';

export default function App() {
  const {fetchPostData, isDarkMode} = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get('page') ?? 1;
    
    if(location.pathname.includes('tags')){
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchPostData(Number(page), tag);
    }
    else if(location.pathname.includes('categories')){
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchPostData(Number(page), null, category);
    }
    else{
      fetchPostData(Number(page));
    }
  },[location.pathname, location.search]);

  return (
    <div className={`w-[100vw] min-h[100vh] flex flex-col justify-center items-center ${isDarkMode && 'dark-mode'}`}>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:blogId' element={<BlogPage/>}/>
        <Route path='/tags/:tag' element={<TagPage/>}/>
        <Route path='/categories/:category' element={<CategoryPage/>}/>
      </Routes>
    </div>
  );
}
