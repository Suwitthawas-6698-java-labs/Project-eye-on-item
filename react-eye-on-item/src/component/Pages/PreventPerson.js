import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './PreventPerson.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import PersonImg from '../Asset/PersonImg.png';
import safeCase from '../Asset/safeCase.png';
import { Link } from 'react-router-dom';

function PreventPerson() {
  const renderCustomPrevArrow = (onClickHandler, hasPrev, label) => (
    <button type="button" onClick={onClickHandler} disabled={!hasPrev} aria-label={label} className='Person-PrevArrow'>
      <span className="material-symbols-outlined">
        chevron_left
      </span>
    </button>
  );

  const renderCustomNextArrow = (onClickHandler, hasNext, label) => (
    <button type="button" onClick={onClickHandler} disabled={!hasNext} aria-label={label} className='Person-NextArrow'>
      <span className="material-symbols-outlined">
        chevron_right
      </span>
    </button>
  );

  const renderCustomIndicator = (clickHandler, isSelected, index, label) => (
    <div
      className={`Person-indicator ${isSelected ? 'selected' : ''}`}
      aria-label={`Slide ${index + 1}`}
      onClick={clickHandler}
      onKeyDown={clickHandler}
      role="button"
      tabIndex={0}
      title={`${label} ${index + 1}`}
    />
  );
  return (
    <div className='bg-PreventPerson'>
      <div className='Person-main'>
        <div className='labelPerson'>
          <Link to={'/Prevent'} className='person-backto-prevent'><ion-icon name="arrow-back-circle"></ion-icon></Link>
          <a>ข้อมูลส่วนบุคคล</a>
        </div>
        <div className='flexlayout'>
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
              <img src={PersonImg} className='slideImg' />
              <div className='text-info-element-Person'>
                <div className='text-Person'>
                  <h1>ข้อมูลส่วนบุคคล</h1>
                  <a>คือ ข้อมูลที่ระบุตัวตนของบุคคลนั้นได้ ทั้งทางตรง <br />หรือทางอ้อม</a>
                  <ul>
                    <li>บัตรเครดิต</li>
                    <li>บัตรประชาชน</li>
                    <li>ใบขับขี่</li>
                    <li>พาสปอร์ต</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='slide2'>
              <img src={safeCase} className='slideImg' />
              <div className='text-info-element-Person'>
                <div className='text-Person2'>
                  <p>1.เก็บไว้ให้เป็นระเบียบ เช่น มีกระเป๋าเพื่อเก็บของโดยเฉพาะ</p>
                  <p>2.ใช้ Magsafe Wallet Case เพื่อป้องกันบัตรหาย เช่น บัตรเคดิต บัตรประชาชน</p>
                  <p>3.สำหรับบัตรเครดิต ตอนที่กดเงินที่ตู้ATM ต้องตรวจดูบัตรเสมอ ว่าหยิบออกมาหรือยัง</p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default PreventPerson
