import React from 'react'
import './Home.css';
import Typewriter from 'typewriter-effect';
import nervous from '../Asset/nervous.svg';
import bhuddalucky from '../Asset/bhuddalucky.svg';
import ipad from '../Asset/ipad.svg';
import tle from '../Asset/tle.svg';
import aef from '../Asset/aef.svg';
import pong from '../Asset/pong.svg';
import { Link } from 'react-router-dom';
import { useHref } from 'react-router-dom';

const Home = () => {
  const hrefToHowto = useHref('/Howto'),
    hrefToMuteloo = useHref('/Mu-Te-Loo'),
    hrefToPrevent = useHref('/Prevent');
  return (
    <div className='Home'>
      <div className='bg'>
        <div className='intro'>
          <h1>Missing <span className='text-transparent-bg'>Item</span></h1>
          <a className='text-writer'><Typewriter
            options={{
              strings: ['แนะนำวิธีการป้องกันและปฎิบัติตัวเบื้องต้นเมื่อของหาย', 'ไม่ต้องกังวล'],
              autoStart: true,
              loop: true,
              deleteSpeed: 120,
            }}
          /></a>
        </div>
      </div>
      <div className='info'>
        <h1>What Are You <span>Looking</span> For?</h1>
        <div className='info-layout'>
          <div className='info-singleLayout'>
            <div className='info-border'>
              <div className='text-info'>
                <h2>กังวลใจ</h2>
                <a>เมื่อรู้ตัวว่าของหายแล้วไม่มีสติ<br />มืดแปดด้าน มองไม่เห็นหนทาง</a>
              </div>
              <img src={nervous} alt="nervous" />
            </div>
            <button onClick={() => window.open(hrefToHowto, '_blank')}>ทำไงดี</button>
          </div>

          <div className='info-singleLayout'>
            <div className='info-border'>
              <div className='text-info'>
                <h2>ทำแล้วอุ่นใจ</h2>
                <a>ทำทุกอย่างแล้วแต่ก็ยังหาไม่เจอ<br />ลองพึ่งโชคสักหน่อย</a>
              </div>
              <img src={bhuddalucky} alt="bhuddaluck" />
            </div>
            <button onClick={() => window.open(hrefToMuteloo, '_blank')}>มูเตลู</button>
          </div>

          <div className='info-singleLayout'>
            <div className='info-border'>
              <div className='text-info'>
                <h2>กันไว้ก่อน</h2>
                <a>ดีกว่ามาเสียใจตอนที่สายไปแล้ว<br />โปรดรักษาทรัพย์สินของท่าน</a>
              </div>
              <img src={ipad} alt="nervous" />
            </div>
            <button onClick={() => window.open(hrefToPrevent, '_blank')}>ดีกว่าแก้</button>
          </div>
        </div>
      </div>

      <footer>
        <div className='main-footer'>
          <h1>Contact Us</h1>
          <div className='main-contact'>
            <div className='contact-element'>
              <img src={pong} />
              <a href='mailto:parinda.ko@kkumail.com'><i class="fa-solid fa-envelope"></i>parinda.ko@kkumail.com</a>
            </div>
            <div className='contact-element'>
              <img src={aef} />
              <a href='mailto:yuttana.h@kkumail.com'><i class="fa-solid fa-envelope"></i>yuttana.h@kkumail.com</a>
            </div>
            <div className='contact-element'>
              <img src={tle} />
              <a href='mailto:suwitthawas.h@kkumail.com'><i class="fa-solid fa-envelope"></i>suwitthawas.h@kkumail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
