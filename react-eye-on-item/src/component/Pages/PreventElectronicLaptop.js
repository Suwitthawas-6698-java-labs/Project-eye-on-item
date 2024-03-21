import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './PreventElectronicLaptop.css';
import NavbarElectronic from '../Navbar/NavbarElectronic';
import laptopSticker from '../Asset/laptopSticker.png';
import laptopBag from '../Asset/laptopBag.png';
import pSt from '../Asset/pSt.png';
import tSt from '../Asset/tSt.png';
import fSt from '../Asset/fSt.png';
import rabbitSt from '../Asset/rabbitSt.png';
import corgiSt from '../Asset/corgiSt.png';
import flowerSt from '../Asset/flowerSt.png';
import bagstudio7 from '../Asset/bagstudio7.png';
import bagsamsonite from '../Asset/bagsamsonite.png';
import bag425degree from '../Asset/bag425degree.png';
import { Link } from 'react-router-dom';

function PreventElectronicLaptop() {
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
              <img src={laptopSticker} alt='laptopSticker' className='slideImg' />
              <div className='text-info-element'>
                <div className='textCenter'>
                  <h1>ตกแต่งโน้ตบุ๊คด้วยสติ๊กเกอร์ที่คุณชอบ</h1>
                  <div className='sticker'>
                    <img src={pSt} alt='' className='pSt' />
                    <img src={tSt} alt='' className='tSt' />
                    <img src={fSt} alt='' className='fSt' />
                    <img src={rabbitSt} alt='' className='rabbitSt' />
                    <img src={corgiSt} alt='' className='corgiSt' />
                    <img src={flowerSt} alt='' className='flowerSt' />
                  </div>
                  <a>เพื่อแสดงถึงตัวตนของคุณและง่ายต่อการจดจำ</a>
                  <div className='stickerShop'>
                    <a href='https://www.punpro.com/p/Shopee-sticker-cute-5-baht'>
                      <button>รวมร้านสติ๊กเกอร์น่ารักๆ <i class="far fa-heart"></i></button>
                    </a>
                    <a href='https://www.wongnai.com/articles/laptop-decor-sticker-shops'>
                      <button>รวมร้านสติ๊กเกอร์แต่งโน้ตบุ๊กสุดคิ้วท์ใน IG <i class="fa-regular fa-heart"></i></button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='slide2'>
              <img src={laptopBag} alt='laptopBag' className='slideImg' />
              <div className='text-info-element'>
                <div className='text'>
                  <h1>หากระเป๋าโน้ตบุ๊คมาใส่</h1>
                  <a>เมื่อใช้งานเสร็จแล้ว ควรจัดเก็บใส่กระเป๋าให้เรียบร้อย
                    เพื่อให้ง่าย และสะดวกต่อการพกพา  ทริค : อาจจะหาพวง
                    กุญแจที่ชอบมาใส่กระเป๋าเพื่อแสดงความเป็นเจ้าของเพิ่มได้</a>
                </div>
                <div className='caseShop'>
                    <div className='caseElement'>
                      <div className='caseElement-info'>
                          <img src={bagsamsonite}/>
                          <a>Samsonite</a>
                      </div>
                      <a href='https://www.samsonite.co.th/th/backpacks/business/?start=0&sz=30'><button>ซื้อ</button></a>
                    </div>
                    <div className='caseElement'>
                      <div className='caseElement-info'>
                          <img src={bagstudio7} />
                          <a>Studio7</a>
                      </div>
                      <a href='https://www.studio7thailand.com/th/p/apple-lifestyle-gadget/gadget-bag'><button>ซื้อ</button></a>
                    </div>
                    <div className='caseElement'>
                      <div className='caseElement-info'>
                          <img src={bag425degree}/>
                          <a>425 Degree</a>
                      </div>
                      <a href='https://www.425degree.com/brand/tomtoc-slash-t64-laptop-backpack-16-green.html'><button>ซื้อ</button></a>
                    </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default PreventElectronicLaptop
