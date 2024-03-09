import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './PreventPet.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import petImg from '../Asset/petImg.png';
import parrot from '../Asset/parrot.png';

function PreventPet() {
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
        <div className='bg-PreventPet'>
            <div className='Person-main'>
                <div className='label'>
                    <Link to={'/Prevent'} className='pet-backto-prevent'><ion-icon name="arrow-back-circle"></ion-icon></Link>
                    <a>สัตว์เลี้ยง</a>
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
                            <img src={petImg} className='slideImg' />
                            <div className='text-info-element-Pet'>
                                <div className='text-Person'>
                                    <h1>สัตว์เลี้ยง 4 ขา เช่น หมา แมว</h1>
                                    <ul>
                                        <li>ใส่ปลอกคอที่ระบุข้อมูลเจ้าของไว้</li>
                                        <li>ใส่สายจูงเมื่อพาออกไปข้างนอก</li>
                                        <li>ใส่ปลอกคอที่มี GPS อยู่ในตัวหรือสามารถซื้ออุปกรณ์ที่สามารถติดตามสัตว์เลี้ยงของเราได้</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='slide2'>
                            <img src={parrot} className='slideImg' />
                            <div className='text-info-element-Pet'>
                                <div className='text-Person'>
                                <h1>สัตว์ปีก เช่น นกแก้ว</h1>
                                    <ul>
                                        <li>ทำห่วงใส่ขานกไว้ที่ขาของสัตว์เลี้ยงเพื่อระบุข้อมูลของเจ้าของ เช่น ผม</li>
                                        <li>ใส่สายจูงนกเมื่อพาออกไปข้างนอก เช่น เมื่อนกตกใจจะได้บินหนีไม่ได</li>
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

export default PreventPet
