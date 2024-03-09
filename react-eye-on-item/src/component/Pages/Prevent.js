import React from 'react'
import './Prevent.css';
import protect from '../Asset/protect.svg';
import { Link } from 'react-router-dom';

function Prevent() {
  return (
    <div>
      <div className='bg-prevent'>
        <div className='info-prevent'>
          <a className='prevent-lebel'>วิธีป้องกันของหาย</a>
          <div className='layout-intro-prevent'>
            <div className='firstline'>
              <Link to={'/Prevent/Electronic/Moblie'}><button className='Electronic'>อุปกรณ์อิเล็กทรอนิกส์</button></Link>
              <img src={protect}></img>
              <Link to={'/Prevent/Personal'}><button className='person-info'>ข้อมูลส่วนบุคคล</button></Link>
            </div>
            <div className='secondline'>
              <Link to={'/Prevent/Etc'}><button className='etc'>อื่นๆ</button></Link>
              <Link to={'/Prevent/Pet'}><button className='pet'>สัตว์เลี้ยง</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prevent
