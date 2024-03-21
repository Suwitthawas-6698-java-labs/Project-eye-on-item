import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Asset/logo.svg';

function Navbar() {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState('');

  const getPageClass = () => {
    // Map page paths to corresponding class names
    const pageClasses = {
      '/': 'nav-home',
      '/Howto': 'nav-howto',
      '/Prevent': 'nav-prevent',
      '/Mu-Te-Loo': 'nav-muteloo',
      '/Prevent/Electronic/Moblie' : 'nav-PreventElectronic',
      '/Prevent/Electronic/Laptop' : 'nav-PreventElectronic',
      '/Prevent/Electronic/SmartWatch' : 'nav-PreventElectronic',
      '/Prevent/Personal' : 'nav-PreventElectronic',
      '/Prevent/Etc' : 'nav-PreventElectronic',
      '/Prevent/Pet' : 'nav-PreventElectronic',
      // Add more pages and class names as needed
    };

    return pageClasses[location.pathname] || '';
  };

  return (
    <nav className={`nav ${getPageClass()}`}>
      <div className='logo'>
        <img src={logo} alt="Logo" />
        <Link to={"/"}>
          <a >
            EYE ON ITEM
          </a>
        </Link>
      </div>
      <div className='menu'>
        <ul>
          <li>
            <Link to={"/Howto"}>
              <button className='howto'>
                How to
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/Prevent"}>
              <button className='prevent'>
                Prevent
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/Mu-Te-Loo"}>
              <button className='muteloo'>
                Mu-Te-Lu
              </button>
            </Link>
          </li>
          {/* <li>
            <Link to={"/share"}>
              <button className='share'>
                Share
              </button>
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
