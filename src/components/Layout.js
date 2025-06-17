import style from '../App.module.css'
import Bottom from './Bottom'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = ({ handleOnClick, active, navbarRef }) => {
  return (
    <>
      <Navbar handleOnClick={handleOnClick} active={active} navbarRef={navbarRef} />
      <div className={style.mainContent}><Outlet /></div>
      
      <div className={style.bottom}><Bottom/></div>
    </>
  );
};

export default Layout;