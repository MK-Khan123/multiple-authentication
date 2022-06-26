import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import './Sponsors.css';

const Sponsors = () => {
    const images = {
        brand1: 'https://i.ibb.co/Bs31nKf/brand1.png',
        brand2: 'https://i.ibb.co/sHNTY8q/brand2.png',
        brand3: 'https://i.ibb.co/M9VcQS3/brand3.png',
        brand4: 'https://i.ibb.co/sKz8NZp/brand4.png',
        brand5: 'https://i.ibb.co/zZctkSX/brand5.png'
    };

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
                <SwiperSlide><img className='brand-image' src={images.brand1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='brand-image' src={images.brand2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='brand-image' src={images.brand3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='brand-image' src={images.brand4} alt="" /></SwiperSlide>
                <SwiperSlide><img className='brand-image' src={images.brand5} alt="" /></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Sponsors;