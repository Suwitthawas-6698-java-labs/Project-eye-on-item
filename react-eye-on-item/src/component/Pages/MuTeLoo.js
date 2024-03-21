import React from 'react'
import './MuTeLoo.css';
import { useRef } from 'react';
import pray from '../Asset/Mu-first-prayElement.svg';
import head from '../Asset/textColorShirtPic.svg';
import monShirt from '../Asset/ShirtMonday.svg';
import tuesShirt from '../Asset/ShirtTuesday.svg';
import wedShirt from '../Asset/ShirtWednesday.svg';
import thursShirt from '../Asset/ShirtThursday.svg';
import friShirt from '../Asset/ShirtFriday.svg';
import satShirt from '../Asset/ShirtSaturday.svg';
import sunShirt from '../Asset/ShirtSunday.svg';
import prayElementSide from '../Asset/MuElementPray.svg'
import prayCenterElement1 from '../Asset/MuBGElement.svg'
import prayCenterElement2 from '../Asset/MuMunkTable.svg'
// import elementBG from '../Asset/MuElementBG.svg'
import centerBG from '../Asset/MuTable.svg'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import muMonPray from '../Asset/MuMonPray.svg'
import muTuesPray from '../Asset/MuTuesPray.svg'
import muWedPray from '../Asset/MuWedPray.svg'
import muThuPray from '../Asset/MuThuPray.svg'
import muFriPray from '../Asset/MuFriPray.svg'
import muSatPray from '../Asset/MuSatPray.svg'
import muSunPray from '../Asset/MuSunPray.svg'
import muPrayHeader from '../Asset/MuPrayHeader.svg'
import muStar from '../Asset/MuShirtStar.svg'
import SlotGame from '../GameSlot/Slot'
import onSlot from '../Asset/Mu-onSlot.svg'
import bgSlot from '../Asset/mu-bg-slot.svg'
import headerSlot from '../Asset/MuSlotHeader.svg'

function MuTeLoo() {
  {/* Part next and prev button for pray page */ }
  /**/
  const renderCustomPrevArrow = (onClickHandler, hasPrev, label) => (
    <button type="button" onClick={onClickHandler} disabled={!hasPrev} aria-label={label} className='prayPrevArrow'>
      <span className="material-symbols-outlined">
        chevron_left
      </span>
    </button>
  );

  const renderCustomNextArrow = (onClickHandler, hasNext, label) => (
    <button type="button" onClick={onClickHandler} disabled={!hasNext} aria-label={label} className='prayNextArrow'>
      <span className="material-symbols-outlined">
        chevron_right
      </span>
    </button>
  );
  const useRefToSlotPage = useRef(null);
  
  const slideToSlotPage = () => {
    if (useRefToSlotPage.current) {
      useRefToSlotPage.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className='bg-overflow'>
      <div id='1' className='bg-intro-Mu'>
        <div className='introPage'>
          <div className='textInfo'>
            <h1>วิถีสายมู</h1>
            <a>วิถีสายมู จะมีการเล่นเกมเสี่ยงโชคของคุณ ทั้งยังมีบทสวดมนต์เสริมโชคประจำวันเกิด และสุดท้ายจะมีตารางสีเสื้อมงคลนำโชคประจำวัน</a>
            <aside><img src={pray} alt="pray" /></aside>
          </div>
          <button className='button-to-slot'  onClick={slideToSlotPage}>ไปกันเลย!</button>
        </div>
      </div>
      <div className='slotPage' ref={useRefToSlotPage}>
        {/* Slot*/}
        <div className='header-slot'><img src={headerSlot} alt='header'/></div>
        <div className='slot-layout' >
          <SlotGame/>
          <div className='head-slot'><img src= {onSlot} alt='Head slot'/></div>
        </div>
        {/* <div className='textInfo-slotPage'>
            <h1>วันนี้คุณเสี่ยงโชคแล้วหรือยัง</h1>
            <a1>#ขอให้วันนี้เป็นวันที่ดี~</a1>
            <a2>#ทุกปัญหาย่อมมีทางออก ^_^</a2>
            <a3>#Wish you all the best!!</a3>
            <a4>#พบเจอแต่สิ่งดี ๆ นะ ~</a4>
            <a5>#พักผ่อนบ้างนะ</a5>
            <a6>#Hope you do well ^//^</a6>
            <a7>หมายเหตุที่ 1 : เป็นความเชื่อส่วนบุคคล ควรใช้วิจารณญาณในการเล่น</a7>
            <a8>หมายเหตุที่ 2 : การเสี่ยงโชคควรทำแก่พอดี ไม่ควรหลงงมงายจนเกินไป</a8>
          </div> */}
      </div>
      <div className='prayPage'>
        <div className='element-pray-layout'>
          <div className='element-pray-header'>
            <img src={muPrayHeader} alt="Pray Element" />
          </div>
          <div className='elementBG'>
            <img src={centerBG} alt="Table of monk" />
          </div>
        </div>
        <div className='element-side'>
          <div className='element-left-side'>
            <img src={prayElementSide} alt="Pray Element" />
          </div>
          <div className='element-right-side'>
            <img src={prayElementSide} alt="Pray Element" />
          </div>
        </div>

        <div className='pray-layout'>
          <Carousel className='pray-carousel'
            renderArrowPrev={renderCustomPrevArrow}
            renderArrowNext={renderCustomNextArrow}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
          >
            <div className='mon-slide'>
              <div className='mon-pray'>
                <img src={muMonPray} alt="Monday Element" />
              </div>
            </div>
            <div className='tues-slide'>
              <div className='tues-pray'>
                <img src={muTuesPray} alt="Tuesday Element" />
              </div>
            </div>
            <div className='wed-slide'>
              <div className='wed-pray'>
                <img src={muWedPray} alt="Wednesday Element" />
              </div>
            </div>
            <div className='thu-slide'>
              <div className='thu-pray'>
                <img src={muThuPray} alt="Thursday Element" />
              </div>
            </div>
            <div className='fri-slide'>
              <div className='fri-pray'>
                <img src={muFriPray} alt="Friday Element" />
              </div>
            </div>
            <div className='sat-slide'>
              <div className='sat-pray'>
                <img src={muSatPray} alt="Saturn Element" />
              </div>
            </div>
            <div className='sun-slide'>
              <div className='sun-pray'>
                <img src={muSunPray} alt="Pray Element" />
              </div>
            </div>
          </Carousel>
        </div>


      </div>

      {/* colorShirt */}
      <div className='colorShirtPage'>
        <div className='shirt-element'>
          <div className='textHeadColorShirt'>
            <img src={head} alt="Head" /> {/* Header */}
          </div>
          <div className='mu-star'>
            <img src={muStar} alt="Star" />
          </div>
        </div>
        <div className='shirt-box-layout'>
          <div className='sizeBox'>
            <div className='first-line'>
              <div className='monShirt'>
                <img src={monShirt} alt="Monday Shirt" />
              </div>
              <div className='tuesShirt'>
                <img src={tuesShirt} alt="Tuesday Shirt" />
              </div>
              <div className='wedShirt'>
                <img src={wedShirt} alt="Wednesday Shirt" />
              </div>
              <div className='thursShirt'>
                <img src={thursShirt} alt="Thursday Shirt" />
              </div>
            </div>
            <div className='second-line'>
              <div className='friShirt'>
                <img src={friShirt} alt="Friday Shirt" />
              </div>
              <div className='satShirt'>
                <img src={satShirt} alt="Saturday Shirt" />
              </div>
              <div className='sunShirt'>
                <img src={sunShirt} alt="Sunday Shirt" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MuTeLoo
