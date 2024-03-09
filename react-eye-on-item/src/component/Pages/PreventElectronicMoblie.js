import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './PreventElectronicMoblie.css';
import NavbarElectronic from '../Navbar/NavbarElectronic';
import phoneImg from '../Asset/phone-img.svg';
import phoneGps from '../Asset/phoneGps.svg';
import apple from '../Asset/apple.svg';
import findMy from '../Asset/findMy.svg';
import android from '../Asset/android.svg';
import findMyDevice from '../Asset/findMyDevice.svg';
import phoneCase from '../Asset/phoneCase.svg';
import { Link } from 'react-router-dom';


function PreventElectronicMoblie() {
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
          <NavbarElectronic/>
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
              <img src={phoneImg} alt='phoneImg' className='slideImg' />
              <div className='text-info-element'>
                <div className='text'>
                  <h1>ซอฟแวร์</h1>
                  <a>สามารถเชื่อมข้อมูลอุปรณ์เข้ากับแอพได้ ควรจะเชื่อมไว้เพื่อเป็นการเก็บข้อมูล และเพื่อสั่งล้างข้อมูลเครื่องได้ในกรณีที่มีเหตุฉุกเฉิน</a>
                </div>
                <div className='os-element'>
                  <div className='apple-os'>
                    <div className='os-bg'>
                      <img src={apple} alt='apple' className='apple' />
                    </div>
                    <a href='https://www.apple.com/icloud/find-my/'>Find My<i class="fi fi-br-arrow-up-right-from-square"></i></a>
                    <img src={findMy} className='findMy' />
                  </div>
                  <div className='android-os'>
                    <div className='os-bg'>
                      <img src={android} alt='android' className='android' />
                    </div>
                    <a href='https://support.google.com/android/answer/6160491?hl=en'>Find My Device<i class="fi fi-br-arrow-up-right-from-square"></i></a>
                    <img src={findMyDevice} alt='findMyDevice' className='findMyDevice' />
                  </div>
                </div>
              </div>
            </div>
            <div className='slide2'>
              <img src={phoneCase} className='slideImg' />
              <div className='text-info-element'>
                <div className='text'>
                  <h1>เคสโทรศัพท์ที่มีสายห้อย</h1>
                  <a>เพื่อป้องกันการวางโทรศัพท์ไว้ที่ใดที่หนึ่งแล้วลืม และสามารถป้องกันการถูกขโมยจากบุคคลได้อีกด้วย</a>
                </div>
              </div>
            </div>
            <div className='slide3'>
              <img src={phoneGps} className='slideImg' />
              <div className='text-info-element'>
                <div className='text'>
                  <h1>เปิด Gps </h1>
                  <a>การเปิด GPS ไว้ สามารถระบุตำแหน่งของ
                    อุปกรณ์อิเล็กทรอนิกส์ได้แบบreal time</a>
                </div>
                <div className='text2'>
                  <h1>Strong Password</h1>
                  <a>การตั้งรหัสผ่านที่เดายาก จะเป็นการป้องกันข้อมูล
                    ชั้นแรก เพราะการเข้าโทรศัพท์ก็ต้องใส่รหัสผ่าน
                    เข้ามาก่อน</a>
                </div>
              </div>
            </div>
          </Carousel>

        </div>
      </div>
    </div>
  );
}

export default PreventElectronicMoblie;
