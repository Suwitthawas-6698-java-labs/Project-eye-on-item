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
import lastactive from '../Asset/lastactive.svg';
import NavbarPublic from '../Navbar/NavbarPublic';
import NavbarPrivate from '../Navbar/NavbarPrivate';
import Typewriter from 'typewriter-effect';

function Howto() {

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
        <NavbarPrivate/>
        <h1>สูดหายใจเข้าลึก ๆ ใจเย็น ๆ</h1>
        <a>การหาของที่หายไป แบบล่กหรือรีบร้อนจะทำให้เรายิ่งหาไม่เจอกว่าเดิม ดังนั้นการหายใจเข้าลึกๆ ช่วยให้เรามีสมาธิมากยิ่งขึ้น</a>
        <aside><img src={calmpv} alt="calmpv" /></aside>
      </div>
      <div className='privateplace2' id='privatePlace2'>
        <NavbarPrivate/>
        <h1>ใช้ล่าสุดตรงไหน ไปดูตรงนั้น</h1>
        <a>ดูบริเวณบนที่วางไว้หรือ อาจจะหล่น ของที่หายอาจจะอยู่ในที่ที่เราคาดไม่ถึง เช่น หากใช้งานล่าสุดอยู่บนโต๊ะอ่านหนังสือ ของชิ้นนั้นอาจจะอยู่บนโต๊ะอ่านหนังสือโต๊ะนั้น แต่โดนกองหนังสือทับไว้อยู่ก็เป็นได้</a>
        <aside><img src={lastactive} alt="lastactive" /></aside>
      </div>
      <div className='privateplace3' id='privatePlace3'>
        <NavbarPrivate/>
        <h1>บริเวณช่องว่างระหว่างที่นอน</h1>
        <a>ที่ที่มีช่องว่างมักจะเป็นที่ดึงดูดของสิ่งของที่เราต้องการใช้งานมากที่สุด บางครั้งเราอาจจะใช้งานอยู่ แต่พอรู้ตัวอีกทีก็หาไม่เจอแล้วซึ่งการหาตามที่ที่มีช่องว่างเล็กๆ อาจจะเป็นตัวเลือกที่ดี</a>
        <aside><img src={lastactive} alt="lastactive" /></aside>
      </div>
      <div className='privateplace4' id='privatePlace4'>
        <NavbarPrivate/>
        <h1>ใต้ผ้าปูที่นอนหรือผ้าห่ม</h1>
        <a>สำหรับคนที่ชอบวางอะไรไว้บนที่นอน ทางเลือกนี้จะเป็นทางเลือกหนึ่งที่มีประโยชน์มากเราจะจำว่าเราวางอะไรบนที่นอนได้แค่ในตอนแรก แต่ถ้าผ่านไป 3-4 ชั่วโมงเราก็อาจจะลืมได้โดยที่เราไม่รู้ตัว</a>
        <aside><img src={lastactive} alt="lastactive" /></aside>
      </div>
      <div className='privateplace5' id='privatePlace5'>
        <NavbarPrivate/>
        <h1>พื้นที่ใช้งานบ่อยๆ</h1>
        <a>เพราะพื้นที่ส่วนตัวของเรา เราอาจจะเข้าไปอยู่บ่อยที่สุดบางครั้งก็เผลอหยิบจับอะไรเข้าไปหรือวางทิ้งเอาไว้จนลืม</a>
        <aside><img src={lastactive} alt="lastactive" /></aside>
      </div>
    </div>
  )
}

export default Howto