import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import HeroImage from "../../Components/HeroImage";

const Hero = () => {
  return (
    <Swiper
      navigation={true}
      loop={true}
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <HeroImage />
      </SwiperSlide>
      <SwiperSlide>
        <HeroImage />
      </SwiperSlide>
      <SwiperSlide>
        <HeroImage />
      </SwiperSlide>
      <SwiperSlide>
        <HeroImage />
      </SwiperSlide>
      <SwiperSlide>
        <HeroImage />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
