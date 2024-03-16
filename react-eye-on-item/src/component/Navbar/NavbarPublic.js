import React from 'react';
import './NavbarPublic.css';
import { Link, animateScroll as scroll} from 'react-scroll';

const NavbarPublic = () => {

  /*<Link to="publicPlace1"  className="nav__link" spy={true} smooth={true}></Link>*/
  return (
    <nav2 className="nav">
      <ul2 className="nav__list">
      <Link to="publicPlace1"  className="nav__link" spy={true} smooth={true}>
          <i className="fi fi-ss-massage"></i>
          <span className="nav__name">ตั้งสติ</span>
      </Link>
  

      <Link to="publicPlace2"  className="nav__link" spy={true} smooth={true}>
          <i className="fi fi-sr-megaphone"></i>
          <span className="nav__name">แจ้งประชาสัมพันธ์</span>
      </Link>
      

      <Link to="publicPlace3"  className="nav__link" spy={true} smooth={true}>
          <i class="fi fi-br-search"></i>
          <span class="nav__name">ลองดูก่อน</span>
      </Link>

      <Link to="publicPlace4"  className="nav__link" spy={true} smooth={true}>
          <i class="fi fi-rr-id-card-clip-alt"></i>
          <span class="nav__name">ของสำคัญ</span>
      </Link>

      <Link to="publicPlace5"  className="nav__link" spy={true} smooth={true}>
          <i class="fi fi-rr-share"></i>
          <span class="nav__name">โซเซียลมีเดีย</span>
      </Link>

      <Link to="publicPlace6"  className="nav__link" spy={true} smooth={true}>
          <i class="fi fi-br-apps"></i>
          <span class="nav__name">ใช้ซอฟต์แวร์</span>
      </Link>

      <Link to="publicPlace7"  className="nav__link" spy={true} smooth={true}>
          <i class="fi fi-rr-meeting"></i>
          <span class="nav__name">ลองถามก่อน</span>
      </Link>

      </ul2>
      <div className="nav__circle-1"></div>
      <div className="nav__circle-2"></div>

      <div className="nav__square-1"></div>
      <div className="nav__square-2"></div>
    </nav2>
  );
};

export default NavbarPublic;