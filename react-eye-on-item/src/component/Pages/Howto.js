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
    marginLeft: '50px', 
    marginTop: '520px',
  };

  return (
    <div>
      <div className='bg-howto'>
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
          <div className='privateplace-label'>
            <h1>วิธีปฏิบัติตัวเบื้องต้นเมื่อรู้ว่า<span>ของหายในพื้นที่สาธารณะ</span></h1>
            <h2>พื้นที่สาธารณะ คือ พื้นที่ส่วนรวมที่ทุกคนสามารถเข้าถึงและใช้ร่วมกันได้ <span>เช่น สวนสาธารณะ ห้างสรรพสินค้า</span></h2>
          </div>

          <Carousel className='public-carousel'
            renderIndicator={renderCustomIndicator}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            renderArrowNext={renderCustomNextArrow}
            renderArrowPrev={renderCustomPrevArrow}
            width={1320}
          >
            <div className='public-slide'>
              <div className='element-public'>
                <h3>ตั้งสติ ไม่ร้อนรน</h3>
                <a>ตั้งสติ มีสมาธิ ไม่ร้อนรน เช่น แหวนแต่งงานหาย <br/>แหวนเป็นของชิ้นเล็กหากไม่มีสติ ใจร้อนอาจ<br/>ทำให้คุณมองข้ามสถานที่ที่คุณนึกไม่ถึง <br/>หรือคุณอาจจะค้นหาของได้อย่าง<br/>ไม่ละเอียดพอ</a>
                <img src={calm1} alt="calm1" />
              </div>
              <div className='element-public'>
                <h3>แจ้งประชาสัมพันธ์</h3>
                <a>แจ้งประชาสัมพันธ์ในแต่ละพื้นที่ให้ประกาศตามหาของ<br/>หรืออาจจะมีคนนำของมาไว้ที่ประชาสัมพันธ์แล้ว<br/> เช่น ในห้างสรรพสินค้า แจ้งreception <br/>ให้ประชาสัมพันธ์</a>
                <img className='reception' src={reception1} alt="reception1" />
              </div>
            </div>

            <div className='public1-slide'>
              <div className='element1-public'>
                <h3>ลองดูก่อน</h3>
                <a>เดินดูบริเวณสุดท้ายที่จำได้ว่าเห็นของชิ้นนั้น <br/>หรือเส้นทางที่เดินผ่านมา และสอบถามผู้คน<br/>บริเวณนั้น เช่น ถ้าไปวิ่งที่สวนสาธารณะ<br/>แล้วทำหูฟังหล่นหายลองเดินดูตาม<br/>เส้นทางที่วิ่งมา หรือสอบถาม<br/>คนที่มาวิ่งที่สวนสาธารณะ</a>
                <img src={try1} alt="try1" />
              </div>
              <div className='element1-public'>
                <h3>ของสำคัญ</h3>
                <a>ถ้าหากเป็นของที่สำคัญ เช่น บัตรเครดิต <br/>ต้องโทรระงับการใช้งานกับทาง<br/>ธนาคารก่อน หรือ เป็นของ<br/>ที่มีมูลค่ามาก เราสามารถ<br/>ไปสถานีตำรวจเพื่อลง<br/>บันทึกประจำวันได้</a>
                <img className='important' src={important1} alt="important1" />
              </div>
            </div>

            <div className='public2-slide'>
              <div className='element2-public'>
                <h3>โซเชียลมีเดีย</h3>
                <a>เมื่อจนแล้วจนรอดเรายังหาไม่เจอ เราสามารถ<br/>โพสต์ลงบนโซเชียลมีเดียเพื่อตามหาของ<br/>ชิ้นนั้นได้ หรือคอยดูความเคลื่อนไหว<br/>ว่ามีใครที่เก็บของเราได้หรือไม่</a>
                <img src={social} alt="social" />
              </div>

              <div className='element2-public'>
                <h3>ใช้ซอฟแวร์</h3>
                <a>ถ้าเป็นอุปกรณ์อิเล็กทรอนิกส์ สามารถ<br/>ใช้แอพพลิเคชันที่เชื่อมต่อกับอุปกรณ์ <br/>เพื่อค้นหาตำแหน่งของอุปกรณ์ได้ <br/>เช่น find my app ของ iOS <br/>หรือ find my device <br/>ของ Android </a>
                <img className='softwear' src={softwaer} alt="softwaer" />
              </div>
            </div>

            <div className='public3-slide'>
              <div className='element3-public'>
                <h3>ลองถามก่อน</h3>
                <a>สำหรับร้านอาหาร ร้านคาราโอเกะ หรือร้านสถานบันเทิง<br/> คุณสามารถถามที่ร้านได้ เพราะถ้าหาก<br/>เป็นของลูกค้า ทางร้านจะเก็บของ<br/>แยกไว้ให้อยู่แล้ว</a>
                <img src={ask} alt="ask" />
              </div>
            </div>
          </Carousel>
      </div>

      <div className='privateplace' ref={privatePlaceRef}>
          <h2><span>PRIVATE PLACE</span></h2>
          <h1>PRIVATE PLACE</h1>
          <h3><span>PRIVATE PLACE</span></h3>
      </div>
      <div className='privateplace1' id='privatePlace1'>
          <div className='privateplace-label'>
            <h1>วิธีปฏิบัติตัวเบื้องต้นเมื่อรู้ว่า<span>ของหายในพื้นที่ส่วนตัว</span></h1>
            <h2>พื้นที่ส่วนตัว คือ พื้นที่ที่เราใช้พักผ่อน รู้สึกปลอดภัย และทำในแบบที่ตนเองต้องการได้อย่างสบายใจ <span>เช่น บ้าน หอพัก</span></h2>
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