import { cn } from "@/lib/utils";

import { Swiper, SwiperSlide} from "swiper/react";
import { EffectCoverflow, Keyboard} from 'swiper/modules';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPinterest} from '@fortawesome/free-brands-svg-icons'


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
      keyboard={{
        enabled: true,
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

      modules={[EffectCoverflow,Keyboard]}
       className="mySwiper first:py-[5rem]">
        <SwiperSlide >
          <img className="h-[10rem] w-[14rem] shadow-2xl  shadow-primary/50 rounded-md transiton duration-300 delay-150  hover:scale-110" src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[10rem] w-[14rem] shadow-2xl  shadow-primary/50 rounded-md transiton duration-300 delay-150  hover:scale-110" src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[10rem] w-[14rem] shadow-2xl  shadow-primary/50 rounded-md transiton duration-300 delay-150  hover:scale-110" src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[10rem] w-[14rem] shadow-2xl  shadow-primary/50 rounded-md transiton duration-300 delay-150  hover:scale-110" src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide> 
          <img className="h-[10rem] w-[14rem] shadow-2xl  shadow-primary/50 rounded-md transiton duration-300 delay-150  hover:scale-110" src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[10rem] w-[14rem] shadow-2xl  shadow-primary/50 rounded-md transiton duration-300 delay-150  hover:scale-110" src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[10rem] w-[14rem] shadow-2xl  shadow-primary/50 rounded-md transiton duration-300 delay-150  hover:scale-110" src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[10rem] w-[14rem] shadow-2xl  shadow-primary/50 rounded-md transiton duration-300 delay-150  hover:scale-110" src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[10rem] w-[14rem ] shadow-2xl  shadow-primary/50 rounded-md transiton duration-300 delay-150  hover:scale-110" src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
      </Swiper>
      <a title="Pinterest" href="https://www.pinterest.com/geckocabanerestaurant0059/"><FontAwesomeIcon className="w-[3rem] h-[3rem] transition hover:scale-125 duration-300 divide-neutral-200  text-red-700" icon={faPinterest}  /></a>
    </section> );
}

export default Gallery;