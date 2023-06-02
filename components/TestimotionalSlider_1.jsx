
import { Swiper, SwiperSlide  } from "swiper/react";
import "swiper/css"
import TestimotionalCard_1 from "./TestimotionalCard_1";

export default function TestimotionalsSlider_1() {
    return (
        <Swiper
            spaceBetween={15}
            slidesPerView="auto"
            centeredSlides={true}
        >
            <SwiperSlide className="w-max">
                <TestimotionalCard_1
                    text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”"
                    img={import.meta.env.BASE_URL+"/images/user-profiles/user-1.jpg"}
                />
            </SwiperSlide>

            <SwiperSlide className="w-max">
                <TestimotionalCard_1
                    text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”"
                    img={import.meta.env.BASE_URL+"/images/user-profiles/user-2.jpg"}
                />
            </SwiperSlide>

            <SwiperSlide className="w-max">
                <TestimotionalCard_1
                    text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”"
                    img={import.meta.env.BASE_URL+"/images/user-profiles/user-3.jpg"}
                />
            </SwiperSlide>

            <SwiperSlide className="w-max">
                <TestimotionalCard_1
                    text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”"
                    img={import.meta.env.BASE_URL+"/images/user-profiles/user-4.jpg"}
                />
            </SwiperSlide>

            <SwiperSlide className="w-max">
                <TestimotionalCard_1
                    text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”"
                    img={import.meta.env.BASE_URL+"/images/user-profiles/user-5.jpg"}
                />
            </SwiperSlide>

            <SwiperSlide className="w-max">
                <TestimotionalCard_1
                    text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”"
                    img={import.meta.env.BASE_URL+"/images/user-profiles/user-6.jpg"}
                />
            </SwiperSlide>

            <SwiperSlide className="w-max">
                <TestimotionalCard_1
                    text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”"
                    img={import.meta.env.BASE_URL+"/images/user-profiles/user-7.jpg"}
                />
            </SwiperSlide>
        </Swiper>
    )
}