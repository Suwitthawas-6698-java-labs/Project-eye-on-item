import React from 'react';
import './NavbarElectronic.css';
import { Link, useLocation } from 'react-router-dom';

function NavbarElectronic() {
    const location = useLocation();

    const getPageClass = () => {
        // Map page paths to corresponding class names
        const pageClasses = {
          '/Prevent/Electronic/Moblie' : 'nav-Moblie',
          '/Prevent/Electronic/Laptop' : 'nav-Laptop',
          '/Prevent/Electronic/SmartWatch' : 'nav-Watch',
        };

        return pageClasses[location.pathname] || '';
    }

    return (
        <div className={`navbar-preventElectronic ${getPageClass()}`}>
            <Link to={'/Prevent/Electronic/Moblie'}><button className='phone-icon'>
                <i className="fi fi-tr-mobile-button"></i>
            </button></Link>
            <Link to={'/Prevent/Electronic/Laptop'}><button className='laptop-icon'>
                <i className="fi fi-rs-laptop"></i>
            </button></Link>
            <Link to={'/Prevent/Electronic/SmartWatch'}><button className='watch-icon'>
                <i className="fi fi-tr-watch-smart"></i>
            </button></Link>
        </div>
    );
}

export default NavbarElectronic;
