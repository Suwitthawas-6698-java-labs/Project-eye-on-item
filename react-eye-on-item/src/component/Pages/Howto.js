import React, { useRef} from 'react'
import './Howto.css'
import teach from '../Asset/missingItem.svg';
import calm1 from '../Asset/calm-Public.svg';
import reception1 from '../Asset/reception1.svg';
import try1 from '../Asset/try1.svg';
import important1 from '../Asset/important1.svg';
import social from '../Asset/social.svg';
import softwaer from '../Asset/software.svg';
import ask from '../Asset/ask.svg';
import calmpv from '../Asset/calm-pv.svg';
import lastActive from '../Asset/lastactive.svg';
import area from '../Asset/area.svg';
import space from '../Asset/space.svg';
import blanket from '../Asset/blanket.svg';
import NavbarPublic from '../Navbar/NavbarPublic';
import { Carousel } from 'react-responsive-carousel';

function Howto() {

  const renderCustomPrevArrow = (onClickHandler, hasPrev, label) => (
    <button type="button" onClick={onClickHandler} disabled={!hasPrev} aria-label={label} className='PrivatePrevArrow'>
      <span className="material-symbols-outlined">
        chevron_left
      </span>
    </button>
  );

  const renderCustomNextArrow = (onClickHandler, hasNext, label) => (
    <button type="button" onClick={onClickHandler} disabled={!hasNext} aria-label={label} className='PrivateNextArrow'>
      <span className="material-symbols-outlined">
        chevron_right
      </span>
    </button>
  );

  const renderCustomIndicator = (clickHandler, isSelected, index, label) => (
    <div
      className={`indicatorPrivateplace ${isSelected ? 'selected' : ''}`}
      aria-label={`Slide ${index + 1}`}
      onClick={clickHandler}
      onKeyDown={clickHandler}
      role="button"
      tabIndex={0}
      title={`${label} ${index + 1}`}
    />
  );

  const publicPlaceRef = useRef(null);
  const privatePlaceRef = useRef(null);

  const handleButtonClick = () => {
    if (publicPlaceRef.current) {
      publicPlaceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleButton2Click = () => {
    if (privatePlaceRef.current) {
      privatePlaceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const specialButtonStyle = {
    background: 'white',  
    color: '#B2442B',      
    fontSize: '18px',
    border: '2px solid #B2442B', 
    borderRadius: '39px',          
    padding: '20px 60px',         
    cursor: 'pointer',
    marginLeft: '30px', 
    marginTop: '500px',
  };

  return (
    <div>
      <div className='bg-overflow'>
        <div className='text-intro'>
          <h1>How to ของหายทำอย่างไร?</h1>
          <a>เมื่อของหายตามสถานที่ต่างๆว่าด้วยเรื่องของหาย บางครั้งอาจจะได้ของคืน หรืออาจจะต้องทำใจ<br /> ในส่วนนี้จะมีการบอกวิธีปฏิบัติตัวคร่าวๆ เมื่อของหายตามสถานที่ต่างๆ ซึ่งแบ่งออกเป็น ที่สาธารณะ<br />และพื้นที่ส่วนตัว </a>
          <aside><img src={teach} alt="teach" /></aside>
        </div>
        <button style={specialButtonStyle} onClick={handleButtonClick}>Public Place</button>
        <button style={specialButtonStyle} onClick={handleButton2Click}>Private Place</button>
      </div>
      <div className='publicplace' ref={publicPlaceRef}>
        <div className='text-public'>
          <h2><span>PUBLIC PLACE</span></h2>
          <h1>PUBLIC PLACE</h1>
          <h3><span>PUBLIC PLACE</span></h3>
        </div>
      </div>
      <div className='publicplace1' id='publicPlace1'>
        <NavbarPublic/>
        <h1>ตั้งสติไม่ร้อนรน</h1>
        <a>ตั้งสติ มีสมาธิ เช่น แหวนแต่งงานหาย แหวนเป็นของชิ้นเล็ก หากไม่มีสติ ใจร้อน อาจทำให้คุณมองข้ามสถานที่ที่คุณนึกไม่ถึง หรือคุณอาจจะค้นหาของได้อย่างไม่ละเอียดพอ</a>
        <aside2><img src={calm1} alt="calm1" /></aside2>
      </div>
      <div className='publicplace2' id='publicPlace2'>
        <NavbarPublic/>
        <h1>แจ้งประชาสัมพันธ์</h1>
        <a>แจ้งประชาสัมพันธ์ในแต่ละพื้นที่ให้ประกาศตามหาของ หรืออาจจะมีคนนำของมาแจ้งไว้ที่ประชาสัมพันธ์แล้ว เช่น หากของหายในห้างสรรพสินค้า ให้ไปที่ Reception เพื่อให้ช่วยประกาศตามหาของ</a>
        <aside><img src={reception1} alt="reception1" /></aside>
      </div>
      <div className='publicplace3' id='publicPlace3'>
      <NavbarPublic/>
        <h1>ลองดูก่อน</h1>
        <a>เดินดูบริเวณสุดท้ายที่จำได้ว่าเห็นของชิ้นนั้น หรือเส้นทางที่เดินผ่านมา และสอบถามผู้คนบริเวณรอบๆ เช่น ถ้าไปวิ่งที่สวนสาธารณะแล้วทำหูฟังหล่นหาย ลองเดินดูตามเส้นทางที่วิ่งมา หรือสอบถามคนที่มาวิ่งที่สวนสาธารณะ</a>
        <aside><img src={try1} alt="try1" /></aside>
      </div>
      <div className='publicplace4' id='publicPlace4'>
      <NavbarPublic/>
        <h1>ของสำคัญ</h1>
        <a>ถ้าหากเป็นของที่สำคัญ เช่น บัตรเครดิต ต้องโทรไปที่ธนาคารเพื่อระงับการใช้งานก่อน หรือเป็นของที่มีมูลค่ามากเราสามารถไปสถานีตำรวจเพื่อลงบันทึกประจำวันได้</a>
        <aside><img src={important1} alt="important1" /></aside>
        </div>
      <div className='publicplace5' id='publicPlace5'>
      <NavbarPublic/>
          <h1>โซเซียลมีเดีย</h1>
          <a>เมื่อจนแล้วจนรอดยังหาของไม่เจอ เราสามารถโพสต์ลงบนโซเซียลมีเดียเพื่อตามหาของชิ้นนั้นได้ หรือคอยดูความเคลื่อนไหวว่ามีใครเก็บของของเราได้หรือไม่</a>
          <aside><img src={social} alt="social" /></aside>
        </div>
      <div className='publicplace6' id='publicPlace6'>
      <NavbarPublic/>
          <h1>ใช้ซอฟต์แวร์</h1>
          <a>ถ้าเป็นอุปกรณ์อิเล็กทรอนิกส์สามารถใช้แอพพลิเคชันที่เชื่อมต่อกับอุปกรณ์เพื่อค้นหาตำแหน่งได้ เช่น find my app ของ IOS หรือ find my device ของ Android</a>
          <aside><img src={softwaer} alt="softwaer" /></aside>
        </div>
      <div className='publicplace7' id='publicPlace7'>
      <NavbarPublic/>
          <h1>ลองถามก่อน</h1>
          <a>สำหรับร้านอาหาร ร้านคาราโอเกะ หรือร้านสถานบันเทิง คุณสามารถไปสอบถามที่ร้านได้ เพราะถ้าหากเป็นของที่ลูกค้าลืมไว้ทางร้านจะเก็บไว้ให้แยกอยู่แล้ว</a>
          <aside><img src={ask} alt="ask" /></aside>
      </div>
      <div className='privateplace' ref={privatePlaceRef}>
          <h2><span>PRIVATE PLACE</span></h2>
          <h1>PRIVATE PLACE</h1>
          <h3><span>PRIVATE PLACE</span></h3>
      </div>
      <div className='privateplace1' id='privatePlace1'>
          <div className='privateplace-label'>
            <h1>วิธีปฏิบัติตัวเบื้องต้นเมื่อรู้ว่า<span>ของหายในพื้นที่ส่วนตัว</span></h1>
          <h2>เช่น บ้าน หอพัก</h2>
          </div>

          <Carousel className='private-carousel'
            renderIndicator={renderCustomIndicator}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            renderArrowNext={renderCustomNextArrow}
            renderArrowPrev={renderCustomPrevArrow}
            width={1320}
          >
            <div className='private-slide'>
              <div className='element-private'>
                <h3>สูดหายใจเข้าลึก ๆ ใจเย็นๆ</h3>
                <a>การหาของที่หายไป แบบลกหรือรีบร้อนจะทำให้ <br/>เรายิ่งหาไม่เจอกว่าเดิม ดังนั้นการหายใจเข้าลึกๆ <br/>ช่วยให้เรามีสมาธิมากยิ่งขึ้น</a>
                <img src={calmpv} alt="calmpv" />
              </div>
              <div className='element-private'>
                <h3>ใช้ล่าสุดตรงไหน ไปดูตรงนั้น</h3>
                <a>ดูบริเวณบนที่วางไว้หรือ อาจจะหล่น ของที่หาย<br/>อาจจะอยู่ในที่ที่เราคาดไม่ถึง เช่น หากใช้งาน<br/>ล่าสุดอยู่บนโต๊ะอ่านหนังสือ ของชิ้นนั้น<br/>อาจจะอยู่บนโต๊ะอ่านหนังสือโต๊ะนั้น <br/>แต่โดนกองหนังสือทับไว้อยู่ก็เป็นได้</a>
                <img className='last' src={lastActive} alt="lastActive" />
              </div>
            </div>
            <div className='private1-slide'>
              <div className='element1-private'>
                <h3>ลองดูที่ซอกที่นอนหรือบริเวณที่มีช่องว่าง</h3>
                <a>ที่ที่มีช่องว่างมักจะเป็นที่ดึงดูดของสิ่งของ<br/>ที่เราต้องการใช้งานมากที่สุด บางครั้ง<br/>เราอาจจะใช้งานอยู่ แต่พอรู้ตัว<br/>อีกทีก็หาไม่เจอแล้วซึ่งการหาตาม<br/>ที่ที่มีช่องว่างเล็กๆ <br/>อาจจะเป็นตัวเลือกที่ดี</a>
                <img src={space} alt="space" />
              </div>
              <div className='element1-private'>
                <h3>ดูในผ้าปูที่นอนหรือผ้าห่ม </h3>
                <a>สำหรับคนที่ชอบวางอะไรไว้บนที่นอน ทางเลือกนี้<br/>จะเป็นทางเลือกหนึ่งที่มีประโยชน์มากเราจะ<br/>จำว่าเราวางอะไรบนที่นอนได้แค่ใน<br/>ตอนแรก แต่ถ้าผ่านไป 3-4 ชั่วโมง<br/>เราก็อาจจะลืมได้โดยที่เราไม่รู้ตัว</a>
                <img className='blanket' src={blanket} alt="blanket" />
              </div>
            </div>
            <div className='private2-slide'>
              <div className='element2-private'>
                <h3>พื้นที่ที่ใช้งานบ่อย ๆ</h3>
                <a>เช่น ระเบียง หน้าต่าง โต๊ะ เพราะพื้นที่<br/>ส่วนตัวของเรา เราอาจจะเข้าไปอยู่<br/>บ่อยที่สุดบางครั้งก็เผลอหยิบจับ<br/>อะไรเข้าไปหรือวางทิ้งเอาไว้จนลืม</a>
                <img className='area' src={area} alt="area" />
              </div>
            </div>
          </Carousel>
      </div>
    </div>
  )
}

export default Howto