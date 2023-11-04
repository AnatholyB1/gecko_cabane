import { cn } from "@/lib/utils";

import { Swiper, SwiperSlide} from "swiper/react";
import { FreeMode,EffectCoverflow, Autoplay, Keyboard} from 'swiper/modules';


// Import Swiper styles
import 'swiper/css/free-mode';
import "swiper/css";
import 'swiper/css/effect-coverflow';






function Gallery({className} : {className?: string}) {
    return ( 
    <section className={cn(className, 'bg-black  grid place-items-center gap-[5rem]  place-content-center grid-flow-row py-[5rem]  ')}>
      <Swiper
      effect={'coverflow'}
      slidesPerView={'auto'}
      grabCursor={true}
      spaceBetween={5}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      freeMode={true}
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 6000,  
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}

      modules={[FreeMode,EffectCoverflow,Autoplay,Keyboard]}
       className="mySwiper">
 <SwiperSlide>
          <img className="h-[10rem] w-[14rem]" src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[10rem] w-[14rem]" src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[10rem] w-[14rem]" src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[10rem] w-[14rem]" src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide> 
          <img className="h-[10rem] w-[14rem]" src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[10rem] w-[14rem]" src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[10rem] w-[14rem]" src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[10rem] w-[14rem]" src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[10rem] w-[14rem !important]" src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
      </Swiper>
    </section> );
}

export default Gallery;