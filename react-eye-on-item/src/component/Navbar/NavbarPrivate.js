import React, {useState} from 'react';
import './NavbarPrivate.css';
import { Link, animateScroll as scroll} from 'react-scroll';

const NavbarPrivate = () => {

  return (
    <nav1 className="nav1">
      <ul1 className="nav__list1">
      <Link to="privatePlace1"  className="nav__link1" spy={true} smooth={true}>
        <i className="fi fi-ss-massage"></i>
        <span className="nav__name">สูดหายใจเข้าลึกๆ</span>
      </Link>
  

      <Link to="privatePlace2"  className="nav__link1" spy={true} smooth={true}>
        <i class="fi fi-bs-marker"></i>
        <span className="nav__name">ใช้ล่าสุดตรงไหน</span>
      </Link>
      

      <Link to="privatePlace3"  className="nav__link1" spy={true} smooth={true}>
        <i class="fi fi-br-distribute-spacing-horizontal"></i>
        <span class="nav__name">ช่องว่างหรือมุม</span>
      </Link>

      <Link to="privatePlace4"  className="nav__link1" spy={true} smooth={true}>
        <i class="fi fi-sr-blanket"></i>
        <span class="nav__name">ใต้ผ้าห่ม</span>
      </Link>

      <Link to="privatePlace5"  className="nav__link1" spy={true} smooth={true}>
        <i class="fi fi-rr-couch"></i>
        <span class="nav__name">พื้นที่ใช้งานบ่อย</span>
      </Link>

      </ul1>
      <div className="nav__circle-1"></div>
      <div className="nav__circle-2"></div>

      <div className="nav__square-1"></div>
      <div className="nav__square-2"></div>
    </nav1>
  );
};

export default NavbarPrivate;