
import { Swiper, SwiperSlide  } from "swiper/react";
import "swiper/css"
import TestimotionalCard_1 from "./TestimotionalCard_1";

export default function TestimotionalsSlider_1({items=[], renderer}) {
    return (
        <Swiper
            spaceBetween={15}
            slidesPerView="auto"
            centeredSlides={true}
        >
            {
                items.map(item => (
                    <SwiperSlide className="w-max">
                        {
                            renderer(item)
                        }
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}