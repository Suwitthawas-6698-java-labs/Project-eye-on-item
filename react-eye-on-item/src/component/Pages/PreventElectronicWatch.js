import React from 'react'
import NavbarElectronic from '../Navbar/NavbarElectronic';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './PreventElectronicWatch.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import appleWatch from '../Asset/appleWatch.png';
import exSmartWatch from '../Asset/ExSmartWatch.png';
import watchHeart from '../Asset/watchHeart.png';
import watchOrange from '../Asset/watchOrange.png';
import watchChic from '../Asset/watchChic.png';
import watchGhost from '../Asset/watchGhost.png';
import appWear from '../Asset/appWear.svg';
import watchUi from '../Asset/watchUi.svg';
import navi from '../Asset/navi.svg';
import ring from '../Asset/ring.svg';

function PreventElectronicWatch() {
  const renderCustomPrevArrow = (onClickHandler, hasPrev, label) => (
    <button type="button" onClick={onClickHandler} disabled={!hasPrev} aria-label={label} className='PrevArrow'>
      <span className="material-symbols-outlined">
        chevron_left
      </span>
    </button>
  );

  const renderCustomNextArrow = (onClickHandler, hasNext, label) => (
    <button type="button" onClick={onClickHandler} disabled={!hasNext} aria-label={label} className='NextArrow'>
      <span className="material-symbols-outlined">
        chevron_right
      </span>
    </button>
  );

  const renderCustomIndicator = (clickHandler, isSelected, index, label) => (
    <div
      className={`indicator ${isSelected ? 'selected' : ''}`}
      aria-label={`Slide ${index + 1}`}
      onClick={clickHandler}
      onKeyDown={clickHandler}
      role="button"
      tabIndex={0}
      title={`${label} ${index + 1}`}
    />
  );

  return (
    <div className='bg-PreventElectronic'>
      <div className='Electronic-main'>
        <div className='label'>
          <Link to={'/Prevent'} className='backto-prevent'><ion-icon name="arrow-back-circle"></ion-icon></Link>
          <a>อุปกรณ์อิเล็กทรอนิกส์</a>
        </div>
        <div className='flexlayout'>
          <NavbarElectronic />
          <Carousel
            renderArrowPrev={renderCustomPrevArrow}
            renderArrowNext={renderCustomNextArrow}
            renderIndicator={renderCustomIndicator}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            width={1236}
          >
            <div className='slide1'>
              <img src={appleWatch} className='slideImg' />
              <div className='text-info-element'>
                <div className='textCenter'>
                  <h1>ใช้สายทีโดดเด่นและเป็นเอกลักษณ์</h1>
                  <div className='watchBand'>
                    <img src={watchHeart} />
                    <img src={watchOrange} />
                    <img src={watchChic} />
                    <img src={watchGhost} />
                  </div>
                  <a>เพื่อแสดงความเป็นเจ้าของมีชื่อหรือเบอร์โทรศัพท์อยู่บนสาย</a>
                </div>
              </div>
            </div>
            <div className='slide2'>
              <img src={exSmartWatch} className='slideImg' />
              <div className='text-info-element'>
                <div className='text-smartWatch'>
                  <h1>โหลดแอปพลิเคชัน Smart Watch</h1>
                  <div className='galaxyWatch'>
                    <a>เช่น <span>Galaxy Wearable</span></a>
                    <img src={appWear} className='appWear' />
                  </div>
                  <a>ที่มีฟังก์ชันการใช้งานคล้ายกับ Apple Watch
                    สามารถตามหาอุปกรณ์และควบคุมระยะไกลได้</a>
                </div>
                <div className='main-wearUi'>
                  <div className='wearUi'>
                    <div className='bar'></div>
                    <div className='watch-info-ui'>
                        <div className='contain-logo-watch'>
                          <img src={watchUi} className='watch-logo'/>
                        </div>
                        <div className='contain-text-info'>
                          <h4>Galaxy Watch</h4>
                          <h5>******************</h5>
                          <h6>Last updated Now</h6>
                        </div>
                    </div>
                    <div className='option-ui'>
                      <div className='contain-navi'>
                        <div className='navi-logo'>
                          <img src={navi} className='navi'/>
                        </div>
                        <a>Navigate</a>
                      </div>
                      <div className='contain-ring'>
                        <div className='ring-logo'>
                          <img src={ring} className='ring'/>
                        </div>
                        <a>Ring</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default PreventElectronicWatch
