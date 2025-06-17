import { useEffect, useRef, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import Featured from './components/Featured';
import Premium from './components/Premium';
import Login from './components/Login';
import Match from './components/Match';
import Video from './components/Video';
import News from './components/News';
import Stats from './components/Stats';

function App() {

  const url="https://cricketscore-2.onrender.com"
  const [news,setNews]=useState("")
  const fetchNews=async()=>{
    const response=await fetch(url)
    const data=await response.json()
    setNews(data)
  }
  useEffect(()=>{
    fetchNews()
  },[])


  
  const [active, setActive] = useState(false);
  const navbarRef = useRef();

  const handleOnClick = (e) => {
    e?.stopPropagation();
    setActive((prev) => !prev);
  };

  // Close navbar on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (active && navbarRef.current && !navbarRef.current.contains(e.target)) {
        setActive(false);
      }
    };

    // Use `click` event, NOT `mousedown` or `pointerdown`
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [active]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout
          handleOnClick={handleOnClick}
          active={active}
          navbarRef={navbarRef}
        />
      ),
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/featured', element: <Featured /> },
        { path: '/premium', element: <Premium /> },
        { path: '/match', element: <Match /> },
        {path:"/video",
        element:<Video/>
        },
        {
          path:"/news",
          element:<News news={news}/>
        },
        {
          path:"/stats/:id",
          element:<Stats/>
        },
        {
          path:"/login",
          element:<Login/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
