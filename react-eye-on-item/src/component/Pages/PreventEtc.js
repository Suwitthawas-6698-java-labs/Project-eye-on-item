import React from 'react'
import './PreventEtc.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import etcImg from '../Asset/etcImg.png';
import keyandWatch from '../Asset/key&watch.png';
import adapterandHelmet from '../Asset/Adapter&Helmet.png';
import cloth from '../Asset/Cloth.png';

function PreventEtc() {
    const renderCustomPrevArrow = (onClickHandler, hasPrev, label) => (
        <button type="button" onClick={onClickHandler} disabled={!hasPrev} aria-label={label} className='Person-PrevArrow'>
            <span className="material-symbols-outlined">
                chevron_left
            </span>
        </button>
    );

    const renderCustomNextArrow = (onClickHandler, hasNext, label) => (
        <button type="button" onClick={onClickHandler} disabled={!hasNext} aria-label={label} className='Person-NextArrow'>
            <span className="material-symbols-outlined">
                chevron_right
            </span>
        </button>
    );

    const renderCustomIndicator = (clickHandler, isSelected, index, label) => (
        <div
            className={`Person-indicator ${isSelected ? 'selected' : ''}`}
            aria-label={`Slide ${index + 1}`}
            onClick={clickHandler}
            onKeyDown={clickHandler}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
        />
    );
    return (
        <div className='bg-PreventEtc'>
            <div className='Person-main'>
                <div className='labelPerson'>
                    <Link to={'/Prevent'} className='person-backto-prevent'><ion-icon name="arrow-back-circle"></ion-icon></Link>
                    <a>อื่นๆ</a>
                </div>
                <div className='flexlayout'>
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
                            <img src={etcImg} className='slideImg' />
                            <div className='text-info-element-Etc'>
                                <div className='text-Etc'>
                                    <h1>สิ่งของอื่นๆ คือ</h1>
                                    <a>สิ่งของเล็กๆน้อยๆที่จำเป็นต่อการใช้ชีวิตประจำวัน</a>
                                    <ul>
                                        <li>เสื้อผ้า</li>
                                        <li>หมวกกันน็อค</li>
                                        <li>กุญแจรถ&บ้าน</li>
                                        <li>นาฬิกาข้อมือ</li>
                                        <li>สายชาร์จแบต</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='slide2'>
                            <img src={keyandWatch} className='slideImg' />
                            <div className='text-info-element-Etc'>
                                <div className='text-Etc'>
                                    <h1>กุญแจรถ&บ้าน</h1>
                                    <ul>
                                        <li>สามารถใส่Air tag เพื่อติดตามหากุญแจได้</li>
                                        <li>ใส่พวงกุญแจที่มีสีฉูดฉาน หรือที่มองเห็นได้ง่าย</li>
                                        <li>ควรวางกุญแจใกล้กับประตูทางออก หรือห้อยไว้เพื่อให้ง่ายต่อการใช้งาน</li>
                                    </ul>
                                    <h1>นาฬิกาข้อมือ</h1>
                                    <ul>
                                        <li>ควรมีที่วางประจำเมื่อจะถอดนาฬิกา</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='slide3'>
                            <img src={adapterandHelmet} className='slideImg' />
                            <div className='text-info-element-Etc'>
                                <div className='text-Etc'>
                                    <h1>หมวกกันน็อค</h1>
                                    <ul>
                                        <li>ไม่ควรวางหมวกกันน็อคไว้หน้ารถ</li>
                                        <li>ควรใส่หมวกกันน็อคไว้ใต้เบาะรถ หรือหากเบาะรถไม่กว้างควรหากุญแจดอกเล็กๆ มาล็อคหมวกกันน็อคไว้</li>
                                    </ul>
                                    <h1>สายชาร์จแบต</h1>
                                    <ul>
                                        <li>ตกแต่งสายชาร์จเพื่อให้ง่ายต่อการจดจำ</li>
                                        <li>ก่อนจะเก็บสายชาร์จเช็คให้แน่ใจว่าใช่สายชาร์จของตัวเองหรือไม่</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='slide4'>
                            <img src={cloth} className='slideImg' />
                            <div className='text-info-element-Etc'>
                                <div className='text-Etc'>
                                    <h1>เสื้อผ้า</h1>
                                    <ul>
                                        <li>จัดตู้ให้แบ่งโซนกัน เช่น มีโซนเสื้อผ้า มีโซนกางเกง เป็นต้น</li>
                                        <li>แบ่งตามสี เพื่อให้ง่ายต่อการค้นหา</li>
                                        <li>ผับเสื้อผ้าที่ไม่ค่อยได้ใช้ แยกกับเสื้อผ้าที่ใช้บ่อย</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default PreventEtc
