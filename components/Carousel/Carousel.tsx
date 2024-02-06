'use client';

// Import components
import { Swiper, SwiperSlide } from 'swiper/react';
import ItemCard from '../ItemCard';
import { Box } from '@chakra-ui/react';

// Import styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Mousewheel, Navigation } from 'swiper/modules';


interface Item{
    img: string;
    price: string;
    text: string;
}


export default function Carousel() {
    return (
        <Box className='relative w-full px-12'>
            <Swiper
                slidesPerView={3}
                breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    639: {
                      slidesPerView: 2,
                    },
                    865:{
                      slidesPerView:3
                    },
                    1000:{
                      slidesPerView:4
                    },
                    1500:{
                      slidesPerView:5
                    },
                    1700:{
                      slidesPerView:6
                    }
                }}
                spaceBetween={30}
                loop={true}
                mousewheel={true}
                modules={[Mousewheel, Navigation]}
                className="m-6 px-4"
            >
                {items.map((item: Item) => {return (
                    <SwiperSlide>
                        <ItemCard
                            text={item?.text}
                            price={item?.price}
                            img={item?.img}
                        />
                    </SwiperSlide>
                )})}
            </Swiper>
        </Box>
    )
}