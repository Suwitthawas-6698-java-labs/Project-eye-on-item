import React from 'react'
import './Home.css';
import Typewriter from 'typewriter-effect';
import nervous from '../Asset/nervous.svg';
import bhuddalucky from '../Asset/bhuddalucky.svg';
import ipad from '../Asset/ipad.svg';
import { Link } from 'react-router-dom';

const Home = () => {
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
            <Link to={'/Howto'}><button>ทำไงดี</button></Link>
          </div>

          <div className='info-singleLayout'>
            <div className='info-border'>
              <div className='text-info'>
                <h2>ทำแล้วอุ่นใจ</h2>
                <a>ทำทุกอย่างแล้วแต่ก็ยังหาไม่เจอ<br />ลองพึ่งโชคสักหน่อย</a>
              </div>
              <img src={bhuddalucky} alt="bhuddaluck" />
            </div>
            <Link to={'/Mu-Te-Loo'}><button >มูเตลู</button></Link>
          </div>

          <div className='info-singleLayout'>
            <div className='info-border'>
              <div className='text-info'>
                <h2>กันไว้ก่อน</h2>
                <a>ดีกว่ามาเสียใจตอนที่สายไปแล้ว<br />โปรดรักษาทรัพย์สินของท่าน</a>
              </div>
              <img src={ipad} alt="nervous" />
            </div>
            <Link to={'/Prevent'}><button>ดีกว่าแก้</button></Link>
          </div>
        </div>
      </div>

      <footer>
        <div className='main-footer'>
          <h1>Contact Us</h1>
          <a>OUR CONTACT</a>
          <ul>
            <li>suwitthawas.h@kkumail.com</li>
            <li>parinda.ko@kkumail.com</li>
            <li>yuttana.h@kkumail.com</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Home
