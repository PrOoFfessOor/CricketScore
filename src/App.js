import { useEffect, useRef, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import Featured from './components/Featured';
import Premium from './components/Premium';
import Match from './components/Match';
import Video from './components/Video';
import News from './components/News';

function App() {
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
          element:<News/>
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;