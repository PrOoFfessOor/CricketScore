import { Link } from 'react-router-dom';
import style from '../App.module.css';

const Navbar = ({ handleOnClick, active, navbarRef }) => {
  return (
    <>
      <div className={style.Header}>
        <button className={style.button} onClick={handleOnClick}>
          &#9776;
        </button>
        <span className={style.featured}><Link to="/featured">Featured</Link></span>
        <span className={style.name}>Local Score</span>
        <span className={style.premium}><Link to="/premium">Premium</Link></span>
      </div>

      <div
        ref={navbarRef}
        className={style.Footer}
        style={{ left: `${active ? 0 : -25}vw`, transition: 'left 0.3s ease' }}
        onClick={(e) => e.stopPropagation()} 
      >
        <ul>
          <li><Link to="/" onClick={handleOnClick}>Home</Link></li>
          <li><Link to="/about" onClick={handleOnClick}>About</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/match">Match</Link></li>
          <li><Link to="/video">Video</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;