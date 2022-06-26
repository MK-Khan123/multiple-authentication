import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import brand1 from '../../images/brand1.png';
import brand2 from '../../images/brand2.png';
import brand3 from '../../images/brand3.png';
import brand4 from '../../images/brand4.png';
import brand5 from '../../images/brand5.png';
import './Sponsors.css';

const Sponsors = () => {
    
    return (
        <section id='sponsors-slide'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper" id='brand-div-alignment'
            >
                <SwiperSlide><img src={brand1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={brand2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={brand3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={brand4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={brand5} alt="" /></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Sponsors;