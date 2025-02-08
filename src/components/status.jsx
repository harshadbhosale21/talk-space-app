import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Status = () => {
    const statuses = [
        { id: 1, image: '/images/avatars/1.png', name: 'Alice' },
        { id: 2, image: '/images/avatars/2.png', name: 'Bob' },
        { id: 3, image: '/images/avatars/3.png', name: 'Alex' },
        { id: 4, image: '/images/avatars/4.png', name: 'Max' },
        { id: 5, image: '/images/avatars/5.png', name: 'Juli' },
        { id: 6, image: '/images/avatars/6.png', name: 'Sandy' },
        { id: 7, image: '/images/avatars/7.png', name: 'Jhon' },
        { id: 8, image: '/images/avatars/8.png', name: 'Joe' },
    ];

    return (
        <div className="max-w-md mx-auto mt-3">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={4}
                slidesPerView={4}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={false}
            >
                {statuses.map((status) => (
                    <SwiperSlide key={status.id}>
                        <div className="flex flex-col items-center hover:cursor-pointer">
                            <img
                                src={status.image}
                                alt={status.name}
                                className="w-16 h-16 rounded-full border-2 border-blue-500"
                            />
                            <p className="text-sm mt-2">{status.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Status;
