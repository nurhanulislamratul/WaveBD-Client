import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import FeaturedProductCard from "../../Components/FeaturedProductCard";

const FeaturedProductss = () => {
  return (
    <div className="container mx-auto my-8">
      <SectionTitle
        title="Featured Products"
        description="See all our featured products here"
      />
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="min-h-[40vh]">
            <FeaturedProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedProductCard />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default FeaturedProductss;
