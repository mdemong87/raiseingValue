"use client"

// import Swiper core and required modules
import { A11y, Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




import Container from "./Container";
import SingleReview from './SingleReview';

export default function Review() {
    return (
        <div className='bg-gray-200 py-5'>
            <Container>
                <div className='flex text-gray-900 justify-center items-center'>
                    <div>
                        <p className='text-centers font-medium text-xl'>Uncensored, Unedited, & Unfiltered</p>
                        <h2 className='text-center text-4xl font-bold'>Customer Reviews</h2>
                    </div>
                </div>
                <Swiper
                    className='flex justify-between'
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    pagination={{ clickable: true }}


                    breakpoints={{
                        768: {
                            width: 768,
                            slidesPerView: 2,
                            spaceBetween: 25
                        },
                        1024: {
                            width: 1024,
                            slidesPerView: 3,
                            spaceBetween: 25
                        },
                    }}

                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <SingleReview />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleReview />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleReview />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleReview />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleReview />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleReview />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleReview />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleReview />
                    </SwiperSlide>

                    ...
                </Swiper>
            </Container>
        </div >
    )
}
