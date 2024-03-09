import React from 'react'
import './MuTeLoo.css';
import pray from '../Asset/pray.svg';
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


  {/*part slot*/ }
  // Mapping of indexes to icons: start from banana in middle of initial position and then upwards
  //   const  iconMap = ["banana", "seven", "cherry", "plum", "orange", "bell", "bar", "lemon", "melon"],
  //   // Width of the icons
  //   icon_width = 79,
  //   // Height of one icon in the strip
  //   icon_height = 79,
  //   // Number of icons in the strip
  //   num_icons = 9,
  //   // Max-speed in ms for animating one icon down
  //   time_per_icon = 100,
  //   // Holds icon indexes
  //   indexes = [0, 0, 0];


  // /** 
  //  * Roll one reel
  //  */
  // const roll = (reel, offset = 0) => {
  //   // Minimum of 2 + the reel offset rounds
  //   const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons);

  //   // Return promise so we can wait for all reels to finish
  //   return new Promise((resolve, reject) => {

  //     const style = getComputedStyle(reel),
  //       // Current background position
  //       backgroundPositionY = parseFloat(style["background-position-y"]),
  //       // Target background position
  //       targetBackgroundPositionY = backgroundPositionY + delta * icon_height,
  //       // Normalized background position, for reset
  //       normTargetBackgroundPositionY = targetBackgroundPositionY % (num_icons * icon_height);

  //     // Delay animation with timeout, for some reason a delay in the animation property causes stutter
  //     setTimeout(() => {
  //       // Set transition properties ==> https://cubic-bezier.com/#.41,-0.01,.63,1.09
  //       reel.style.transition = `background-position-y ${(8 + 1 * delta) * time_per_icon}ms cubic-bezier(.41,-0.01,.63,1.09)`;
  //       // Set background position
  //       reel.style.backgroundPositionY = `${backgroundPositionY + delta * icon_height}px`;
  //     }, offset * 150);

  //     // After animation
  //     setTimeout(() => {
  //       // Reset position, so that it doesn't get higher without limit
  //       reel.style.transition = `none`;
  //       reel.style.backgroundPositionY = `${normTargetBackgroundPositionY}px`;
  //       // Resolve this promise
  //       resolve(delta % num_icons);
  //     }, (8 + 1 * delta) * time_per_icon + offset * 150);

  //   });
  // };


  // /**
  //  * Roll all reels, when promise resolves roll again
  //  */
  // function rollAll() {

  //   // debugEl.textContent = 'rolling...';

  //   const reelsList = document.querySelectorAll('.slots > .reel');

  //   Promise

  //     // Activate each reel, must convert NodeList to Array for this with spread operator
  //     .all([...reelsList].map((reel, i) => roll(reel, i)))

  //     // When all reels done animating (all promises solve)
  //     .then((deltas) => {
  //       // add up indexes
  //       deltas.forEach((delta, i) => indexes[i] = (indexes[i] + delta) % num_icons);
  //       // debugEl.textContent = indexes.map((i) => iconMap[i]).join(' - ');

  //       // Win conditions
  //       if (indexes[0] == indexes[1] || indexes[1] == indexes[2]) {
  //         const winCls = indexes[0] == indexes[2] ? "win2" : "win1";
  //         document.querySelector(".slots").classList.add(winCls);
  //         setTimeout(() => document.querySelector(".slots").classList.remove(winCls), 2000)
  //       }

  //       // Again!
  //       setTimeout(rollAll, 3000);
  //     });
  // };

  // // Kickoff
  // setTimeout(rollAll, 1000);


  return (
    <div className='bg-overflow'>
      <div id='1' className='bg-intro-Mu'>
        <div className='introPage'>
          <div className='textInfo'>
            <h1>วิถีสายมู</h1>
            <a>วิถีสายมู จะมีการเล่นเกมเสี่ยงโชคของคุณ ทั้งยังมีบทสวดมนต์เสริมโชคประจำวันเกิด และสุดท้ายจะมีตารางสีเสื้อมงคลนำโชคประจำวัน</a>
            <aside><img src={pray} alt="pray" /></aside>
          </div>
          <button>Scroll down</button>
        </div>
      </div>
      <div className='slotPage'>
        {/* Slot*/}
        <div className='slots'>
          <div className='reel'></div>
          <div className='reel'></div>
          <div className='reel'></div>

          <img
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              height: '100vh',
              width: 'auto',
              display: 'none' //make image disappear
            }}
            src="https://assets.codepen.io/439000/slotreel.webp"
            alt="Slot Reel"
          />
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
