import React, { useRef } from 'react'
import './Howto.css'
import teach from '../Asset/missingItem.svg';
import calm1 from '../Asset/calm1-pl.svg';
import reception1 from '../Asset/reception1.svg';
import try1 from '../Asset/try1.svg';
import important1 from '../Asset/important1.svg';
import social from '../Asset/social.svg';
import softwaer from '../Asset/softwaer.svg';
import ask from '../Asset/ask.svg';
import iconcalm from '../Asset/icon-calm.png'; 
import iconreception from '../Asset/icon-reception.png';
import icontry from '../Asset/icon-try.png';
import iconimportant from '../Asset/icon-important.png';
import iconsocial from '../Asset/icon-social.png';
import iconsoftwear from '../Asset/icon-softwear.png';
import iconask from '../Asset/icon-ask.png';
import calmpv from '../Asset/calm-pv.svg';
import lastactive from '../Asset/lastactive.svg';


function Howto() {

  const publicPlaceRef = useRef(null);
  const publicPlace1Ref = useRef(null);
  const publicPlace2Ref = useRef(null);
  const publicPlace3Ref = useRef(null);
  const publicPlace4Ref = useRef(null);
  const publicPlace5Ref = useRef(null);
  const publicPlace6Ref = useRef(null);
  const publicPlace7Ref = useRef(null);
  const privatePlaceRef = useRef(null);

  const handleButtonClick = () => {
    // ให้ส่วนที่ต้องการลิงค์ไป (publicplace) มี ref
    if (publicPlaceRef.current) {
      // ใช้ scrollIntoView เพื่อเลื่อนหน้าไปยังส่วนที่ต่างการ
      publicPlaceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleButton1Click = () => {
    // ให้ส่วนที่ต้องการลิงค์ไป (publicplace) มี ref
    if (publicPlace1Ref.current) {
      // ใช้ scrollIntoView เพื่อเลื่อนหน้าไปยังส่วนที่ต่างการ
      publicPlace1Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleButton2Click = () => {
    // ให้ส่วนที่ต้องการลิงค์ไป (publicplace) มี ref
    if (publicPlace2Ref.current) {
      // ใช้ scrollIntoView เพื่อเลื่อนหน้าไปยังส่วนที่ต่างการ
      publicPlace2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleButton3Click = () => {
    // ให้ส่วนที่ต้องการลิงค์ไป (publicplace) มี ref
    if (publicPlace3Ref.current) {
      // ใช้ scrollIntoView เพื่อเลื่อนหน้าไปยังส่วนที่ต่างการ
      publicPlace3Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleButton4Click = () => {
    // ให้ส่วนที่ต้องการลิงค์ไป (publicplace) มี ref
    if (publicPlace4Ref.current) {
      // ใช้ scrollIntoView เพื่อเลื่อนหน้าไปยังส่วนที่ต่างการ
      publicPlace4Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleButton5Click = () => {
    // ให้ส่วนที่ต้องการลิงค์ไป (publicplace) มี ref
    if (publicPlace5Ref.current) {
      // ใช้ scrollIntoView เพื่อเลื่อนหน้าไปยังส่วนที่ต่างการ
      publicPlace5Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleButton6Click = () => {
    // ให้ส่วนที่ต้องการลิงค์ไป (publicplace) มี ref
    if (publicPlace6Ref.current) {
      // ใช้ scrollIntoView เพื่อเลื่อนหน้าไปยังส่วนที่ต่างการ
      publicPlace6Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleButton7Click = () => {
    // ให้ส่วนที่ต้องการลิงค์ไป (publicplace) มี ref
    if (publicPlace7Ref.current) {
      // ใช้ scrollIntoView เพื่อเลื่อนหน้าไปยังส่วนที่ต่างการ
      publicPlace7Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleButton8Click = () => {
    // ให้ส่วนที่ต้องการลิงค์ไป (publicplace) มี ref
    if (privatePlaceRef.current) {
      // ใช้ scrollIntoView เพื่อเลื่อนหน้าไปยังส่วนที่ต่างการ
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
    marginTop: '350px',
  };

  const iconcalmButtonStyle = {
    background: 'white',  
    color: '#B2442B',      
    border: '2px solid #B2442B', 
    borderRadius: '39px',          
    padding: '6px 10px',         
    cursor: 'pointer',
  };

  const iconrecepButtonStyle = {
    background: 'white',  
    color: '#B2442B',      
    border: '2px solid #B2442B', 
    borderRadius: '39px',          
    padding: '8px 7px',         
    cursor: 'pointer',
  };

  const icontryButtonStyle = {
    background: 'white',  
    color: '#B2442B',      
    border: '2px solid #B2442B', 
    borderRadius: '39px',          
    padding: '6px 12px',         
    cursor: 'pointer',
  };

  const iconimportantButtonStyle = {
    background: 'white',  
    color: '#B2442B',      
    border: '2px solid #B2442B', 
    borderRadius: '39px',          
    padding: '10px 9px',         
    cursor: 'pointer',
  };

  const iconsocialButtonStyle = {
    background: 'white',  
    color: '#B2442B',      
    border: '2px solid #B2442B', 
    borderRadius: '39px',          
    padding: '5px 10px',         
    cursor: 'pointer',
  };

  const iconsoftwearButtonStyle = {
    background: 'white',  
    color: '#B2442B',      
    border: '2px solid #B2442B', 
    borderRadius: '39px',          
    padding: '6px 13px',         
    cursor: 'pointer',
  };

  const iconaskButtonStyle = {
    background: 'white',  
    color: '#B2442B',      
    border: '2px solid #B2442B', 
    borderRadius: '39px',          
    padding: '5px 10px',         
    cursor: 'pointer',
  };

  return (
    <div>
      <div className='intro-page'>
        <div className='text-intro'>
          <h1>How to ของหายทำอย่างไร?</h1>
          <a>เมื่อของหายตามสถานที่ต่างๆว่าด้วยเรื่องของหาย บางครั้งอาจจะได้ของคืน หรืออาจจะต้องทำใจ<br /> ในส่วนนี้จะมีการบอกวิธีปฏิบัติตัวคร่าวๆ เมื่อของหายตามสถานที่ต่างๆ ซึ่งแบ่งออกเป็น ที่สาธารณะ<br />และพื้นที่ส่วนตัว </a>
          <aside><img src={teach} alt="teach" /></aside>
        </div>
        <button style={specialButtonStyle} onClick={handleButtonClick}>
        Public Place
      </button>
        <button style={specialButtonStyle} onClick={handleButton8Click}>Private Place</button>
      </div>
      <div className='publicplace' ref={publicPlaceRef}>
        <div className='text-public'>
          <h2><span>PUBLIC PLACE</span></h2>
          <h1>PUBLIC PLACE</h1>
          <h3><span>PUBLIC PLACE</span></h3>
        </div>
      </div>
      <div className='publicplace1' ref={publicPlace1Ref}>
        <h1>ตั้งสติไม่ร้อนรน</h1>
        <h2>1.</h2>
        <a>ตั้งสติ มีสมาธิ เช่น แหวนแต่งงานหาย แหวนเป็นของชิ้นเล็ก หากไม่มีสติ ใจร้อน อาจทำให้คุณมองข้ามสถานที่ที่คุณนึกไม่ถึง หรือคุณอาจจะค้นหาของได้อย่างไม่ละเอียดพอ</a>
        <aside><button style={iconcalmButtonStyle} onClick={handleButton1Click}><img src={iconcalm} alt="iconcalm" /></button></aside>
        <aside2><img src={calm1} alt="calm1" /></aside2>
        <aside3><button style={iconrecepButtonStyle} onClick={handleButton2Click}><img src={iconreception} alt="iconreception" /></button></aside3>
        <aside4><button style={icontryButtonStyle} onClick={handleButton3Click}><img src={icontry} alt="icontry" /></button></aside4>
        <aside5><button style={iconimportantButtonStyle} onClick={handleButton4Click}><img src={iconimportant} alt="iconimportant" /></button></aside5>
        <aside6><button style={iconsocialButtonStyle} onClick={handleButton5Click}><img src={iconsocial} alt="iconsocial" /></button></aside6>
        <aside7><button style={iconsoftwearButtonStyle} onClick={handleButton6Click}><img src={iconsoftwear} alt="iconsoftwear" /></button></aside7>
        <aside8><button style={iconaskButtonStyle} onClick={handleButton7Click}><img src={iconask} alt="iconask" /></button></aside8>
      </div>
      <div className='publicplace2' ref={publicPlace2Ref}>
        <h1>แจ้งประชาสัมพันธ์</h1>
        <h2>2.</h2>
        <a>แจ้งประชาสัมพันธ์ในแต่ละพื้นที่ให้ประกาศตามหาของ หรืออาจจะมีคนนำของมาแจ้งไว้ที่ประชาสัมพันธ์แล้ว เช่น หากของหายในห้างสรรพสินค้า ให้ไปที่ Reception เพื่อให้ช่วยประกาศตามหาของ</a>
        <aside><img src={reception1} alt="reception1" /></aside>
        <aside2><button style={iconcalmButtonStyle} onClick={handleButton1Click}><img src={iconcalm} alt="iconcalm" /></button></aside2>
        <aside3><button style={iconrecepButtonStyle} onClick={handleButton2Click}><img src={iconreception} alt="iconreception" /></button></aside3>
        <aside4><button style={icontryButtonStyle} onClick={handleButton3Click}><img src={icontry} alt="icontry" /></button></aside4>
        <aside5><button style={iconimportantButtonStyle} onClick={handleButton4Click}><img src={iconimportant} alt="iconimportant" /></button></aside5>
        <aside6><button style={iconsocialButtonStyle} onClick={handleButton5Click}><img src={iconsocial} alt="iconsocial" /></button></aside6>
        <aside7><button style={iconsoftwearButtonStyle} onClick={handleButton6Click}><img src={iconsoftwear} alt="iconsoftwear" /></button></aside7>
        <aside8><button style={iconaskButtonStyle} onClick={handleButton7Click}><img src={iconask} alt="iconask" /></button></aside8>
      </div>
      <div className='publicplace3' ref={publicPlace3Ref}>
        <h1>ลองดูก่อน</h1>
        <h2>3.</h2>
        <a>เดินดูบริเวณสุดท้ายที่จำได้ว่าเห็นของชิ้นนั้น หรือเส้นทางที่เดินผ่านมา และสอบถามผู้คนบริเวณรอบๆ เช่น ถ้าไปวิ่งที่สวนสาธารณะแล้วทำหูฟังหล่นหาย ลองเดินดูตามเส้นทางที่วิ่งมา หรือสอบถามคนที่มาวิ่งที่สวนสาธารณะ</a>
        <aside><img src={try1} alt="try1" /></aside>
        <aside2><button style={iconcalmButtonStyle} onClick={handleButton1Click}><img src={iconcalm} alt="iconcalm" /></button></aside2>
        <aside3><button style={iconrecepButtonStyle} onClick={handleButton2Click}><img src={iconreception} alt="iconreception" /></button></aside3>
        <aside4><button style={icontryButtonStyle} onClick={handleButton3Click}><img src={icontry} alt="icontry" /></button></aside4>
        <aside5><button style={iconimportantButtonStyle} onClick={handleButton4Click}><img src={iconimportant} alt="iconimportant" /></button></aside5>
        <aside6><button style={iconsocialButtonStyle} onClick={handleButton5Click}><img src={iconsocial} alt="iconsocial" /></button></aside6>
        <aside7><button style={iconsoftwearButtonStyle} onClick={handleButton6Click}><img src={iconsoftwear} alt="iconsoftwear" /></button></aside7>
        <aside8><button style={iconaskButtonStyle} onClick={handleButton7Click}><img src={iconask} alt="iconask" /></button></aside8>
      </div>
      <div className='publicplace4' ref={publicPlace4Ref}>
        <h1>ของสำคัญ</h1>
        <h2>4.</h2>
        <a>ถ้าหากเป็นของที่สำคัญ เช่น บัตรเครดิต ต้องโทรไปที่ธนาคารเพื่อระงับการใช้งานก่อน หรือเป็นของที่มีมูลค่ามากเราสามารถไปสถานีตำรวจเพื่อลงบันทึกประจำวันได้</a>
        <aside><img src={important1} alt="important1" /></aside>
        <aside2><button style={iconcalmButtonStyle} onClick={handleButton1Click}><img src={iconcalm} alt="iconcalm" /></button></aside2>
        <aside3><button style={iconrecepButtonStyle} onClick={handleButton2Click}><img src={iconreception} alt="iconreception" /></button></aside3>
        <aside4><button style={icontryButtonStyle} onClick={handleButton3Click}><img src={icontry} alt="icontry" /></button></aside4>
        <aside5><button style={iconimportantButtonStyle} onClick={handleButton4Click}><img src={iconimportant} alt="iconimportant" /></button></aside5>
        <aside6><button style={iconsocialButtonStyle} onClick={handleButton5Click}><img src={iconsocial} alt="iconsocial" /></button></aside6>
        <aside7><button style={iconsoftwearButtonStyle} onClick={handleButton6Click}><img src={iconsoftwear} alt="iconsoftwear" /></button></aside7>
        <aside8><button style={iconaskButtonStyle} onClick={handleButton7Click}><img src={iconask} alt="iconask" /></button></aside8>
        </div>
      <div className='publicplace5' ref={publicPlace5Ref}>
          <h1>โซเซียลมีเดีย</h1>
          <h2>5.</h2>
          <a>เมื่อจนแล้วจนรอดยังหาของไม่เจอ เราสามารถโพสต์ลงบนโซเซียลมีเดียเพื่อตามหาของชิ้นนั้นได้ หรือคอยดูความเคลื่อนไหวว่ามีใครเก็บของของเราได้หรือไม่</a>
          <aside><img src={social} alt="social" /></aside>
          <aside2><button style={iconcalmButtonStyle} onClick={handleButton1Click}><img src={iconcalm} alt="iconcalm" /></button></aside2>
          <aside3><button style={iconrecepButtonStyle} onClick={handleButton2Click}><img src={iconreception} alt="iconreception" /></button></aside3>
          <aside4><button style={icontryButtonStyle} onClick={handleButton3Click}><img src={icontry} alt="icontry" /></button></aside4>
          <aside5><button style={iconimportantButtonStyle} onClick={handleButton4Click}><img src={iconimportant} alt="iconimportant" /></button></aside5>
          <aside6><button style={iconsocialButtonStyle} onClick={handleButton5Click}><img src={iconsocial} alt="iconsocial" /></button></aside6>
          <aside7><button style={iconsoftwearButtonStyle} onClick={handleButton6Click}><img src={iconsoftwear} alt="iconsoftwear" /></button></aside7>
          <aside8><button style={iconaskButtonStyle} onClick={handleButton7Click}><img src={iconask} alt="iconask" /></button></aside8>
        </div>
      <div className='publicplace6' ref={publicPlace6Ref}>
          <h1>ใช้ Softwaer</h1>
          <h2>6.</h2>
          <a>ถ้าเป็นอุปกรณ์อิเล็กทรอนิกส์สามารถใช้แอพพลิเคชันที่เชื่อมต่อกับอุปกรณ์เพื่อค้นหาตำแหน่งได้ เช่น find my app ของ IOS หรือ find my device ของ Android</a>
          <aside><img src={softwaer} alt="softwaer" /></aside>
          <aside2><button style={iconcalmButtonStyle} onClick={handleButton1Click}><img src={iconcalm} alt="iconcalm" /></button></aside2>
          <aside3><button style={iconrecepButtonStyle} onClick={handleButton2Click}><img src={iconreception} alt="iconreception" /></button></aside3>
          <aside4><button style={icontryButtonStyle} onClick={handleButton3Click}><img src={icontry} alt="icontry" /></button></aside4>
          <aside5><button style={iconimportantButtonStyle} onClick={handleButton4Click}><img src={iconimportant} alt="iconimportant" /></button></aside5>
          <aside6><button style={iconsocialButtonStyle} onClick={handleButton5Click}><img src={iconsocial} alt="iconsocial" /></button></aside6>
          <aside7><button style={iconsoftwearButtonStyle} onClick={handleButton6Click}><img src={iconsoftwear} alt="iconsoftwear" /></button></aside7>
          <aside8><button style={iconaskButtonStyle} onClick={handleButton7Click}><img src={iconask} alt="iconask" /></button></aside8>
        </div>
      <div className='publicplace7' ref={publicPlace7Ref}>
          <h1>ลองถามก่อน</h1>
          <h2>7.</h2>
          <a>สำหรับร้านอาหาร ร้านคาราโอเกะ หรือร้านสถานบันเทิง คุณสามารถไปสอบถามที่ร้านได้ เพราะถ้าหากเป็นของที่ลูกค้าลืมไว้ทางร้านจะเก็บไว้ให้แยกอยู่แล้ว</a>
          <aside><img src={ask} alt="ask" /></aside>
          <aside2><button style={iconcalmButtonStyle} onClick={handleButton1Click}><img src={iconcalm} alt="iconcalm" /></button></aside2>
          <aside3><button style={iconrecepButtonStyle} onClick={handleButton2Click}><img src={iconreception} alt="iconreception" /></button></aside3>
          <aside4><button style={icontryButtonStyle} onClick={handleButton3Click}><img src={icontry} alt="icontry" /></button></aside4>
          <aside5><button style={iconimportantButtonStyle} onClick={handleButton4Click}><img src={iconimportant} alt="iconimportant" /></button></aside5>
          <aside6><button style={iconsocialButtonStyle} onClick={handleButton5Click}><img src={iconsocial} alt="iconsocial" /></button></aside6>
          <aside7><button style={iconsoftwearButtonStyle} onClick={handleButton6Click}><img src={iconsoftwear} alt="iconsoftwear" /></button></aside7>
          <aside8><button style={iconaskButtonStyle} onClick={handleButton7Click}><img src={iconask} alt="iconask" /></button></aside8>
      </div>
      <div className='privateplace' ref={privatePlaceRef}>
          <h2><span>PRIVATE PLACE</span></h2>
          <h1>PRIVATE PLACE</h1>
          <h3><span>PRIVATE PLACE</span></h3>
      </div>
      <div className='privateplace1'>
        <h1>สูดหายใจเข้าลึก ๆ ใจเย็น ๆ</h1>
        <h2>1.</h2>
        <a>การหาของที่หายไป แบบล่กหรือรีบร้อนจะทำให้เรายิ่งหาไม่เจอกว่าเดิม ดังนั้นการหายใจเข้าลึกๆ ช่วยให้เรามีสมาธิมากยิ่งขึ้น</a>
        <aside><img src={calmpv} alt="calmpv" /></aside>
      </div>
      <div className='privateplace2'>
        <h1>บริเวณที่ใช้ล่าสุดอยู่ตรงไหน ให้ลองไปดูตรงนั้น</h1>
        <h2>2.</h2>
        <a>ดูบริเวณบนที่วางไว้หรือ อาจจะหล่น ของที่หายอาจจะอยู่ในที่ที่เราคาดไม่ถึง เช่น หากใช้งานล่าสุดอยู่บนโต๊ะอ่านหนังสือ ของชิ้นนั้นอาจจะอยู่บนโต๊ะอ่านหนังสือโต๊ะนั้น แต่โดนกองหนังสือทับไว้อยู่ก็เป็นได้</a>
        <aside><img src={lastactive} alt="lastactive" /></aside>
      </div>
      <div className='privateplace3'>
        <h1>บริเวณที่ใช้ล่าสุดอยู่ตรงไหน ให้ลองไปดูตรงนั้น</h1>
        <h2>2.</h2>
        <a>ดูบริเวณบนที่วางไว้หรือ อาจจะหล่น ของที่หายอาจจะอยู่ในที่ที่เราคาดไม่ถึง เช่น หากใช้งานล่าสุดอยู่บนโต๊ะอ่านหนังสือ ของชิ้นนั้นอาจจะอยู่บนโต๊ะอ่านหนังสือโต๊ะนั้น แต่โดนกองหนังสือทับไว้อยู่ก็เป็นได้</a>
        <aside><img src={lastactive} alt="lastactive" /></aside>
      </div>
      <div className='privateplace4'>
        <h1>บริเวณที่ใช้ล่าสุดอยู่ตรงไหน ให้ลองไปดูตรงนั้น</h1>
        <h2>2.</h2>
        <a>ดูบริเวณบนที่วางไว้หรือ อาจจะหล่น ของที่หายอาจจะอยู่ในที่ที่เราคาดไม่ถึง เช่น หากใช้งานล่าสุดอยู่บนโต๊ะอ่านหนังสือ ของชิ้นนั้นอาจจะอยู่บนโต๊ะอ่านหนังสือโต๊ะนั้น แต่โดนกองหนังสือทับไว้อยู่ก็เป็นได้</a>
        <aside><img src={lastactive} alt="lastactive" /></aside>
      </div>
      <div className='privateplace5'>
        <h1>บริเวณที่ใช้ล่าสุดอยู่ตรงไหน ให้ลองไปดูตรงนั้น</h1>
        <h2>2.</h2>
        <a>ดูบริเวณบนที่วางไว้หรือ อาจจะหล่น ของที่หายอาจจะอยู่ในที่ที่เราคาดไม่ถึง เช่น หากใช้งานล่าสุดอยู่บนโต๊ะอ่านหนังสือ ของชิ้นนั้นอาจจะอยู่บนโต๊ะอ่านหนังสือโต๊ะนั้น แต่โดนกองหนังสือทับไว้อยู่ก็เป็นได้</a>
        <aside><img src={lastactive} alt="lastactive" /></aside>
      </div>
    </div>
  )
}

export default Howto
