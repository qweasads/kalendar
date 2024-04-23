import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import January from './../components/pages/january';
import February from './../components/pages/february';
import March from './../components/pages/march';
import April from '../components/pages/april';
import May from '../components/pages/may';
import June from '../components/pages/june';

const Slider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <January />
            </SwiperSlide>

            <SwiperSlide>
                <February />
            </SwiperSlide>

            <SwiperSlide>
                <March />
            </SwiperSlide>

            <SwiperSlide>
                <April />
            </SwiperSlide>

            <SwiperSlide>
                <May />
            </SwiperSlide>

            <SwiperSlide>
                <June />
            </SwiperSlide>
        </Swiper>
    );
}

export default Slider;