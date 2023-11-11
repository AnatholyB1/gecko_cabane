import { cn } from "@/lib/utils";

import { Swiper, SwiperSlide} from "swiper/react";
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
      spaceBetween={0}
      slidesPerView={'auto'}
      effect={"fade"}
      centeredSlides={true}
      navigation
      loop={true}
      pagination={{ clickable: true, type: 'bullets' }}
      scrollbar={{ draggable: true }}

       className="w-[300px] h-full ">
        <SwiperSlide >
          <img alt="oups" className="h-[10rem] w-[14rem]  rounded-md transiton duration-300 delay-150  hover:scale-110" src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="oups" className="h-[10rem] w-[14rem]  rounded-md transiton duration-300 delay-150  hover:scale-110" src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="oups" className="h-[10rem] w-[14rem]  rounded-md transiton duration-300 delay-150  hover:scale-110" src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="oups" className="h-[10rem] w-[14rem]  rounded-md transiton duration-300 delay-150  hover:scale-110" src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide> 
          <img alt="oups" className="h-[10rem] w-[14rem]  rounded-md transiton duration-300 delay-150  hover:scale-110" src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="oups" className="h-[10rem] w-[14rem]  rounded-md transiton duration-300 delay-150  hover:scale-110" src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="oups" className="h-[10rem] w-[14rem]  rounded-md transiton duration-300 delay-150  hover:scale-110" src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="oups" className="h-[10rem] w-[14rem]  rounded-md transiton duration-300 delay-150  hover:scale-110" src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="oups" className="h-[10rem] w-[14rem ]  rounded-md transiton duration-300 delay-150  hover:scale-110" src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
      </Swiper>
      <a title="Pinterest" href="https://www.pinterest.com/geckocabanerestaurant0059/"><FontAwesomeIcon className="w-[3rem] h-[3rem] transition hover:scale-125 duration-300 divide-neutral-200  text-red-700" icon={faPinterest}  /></a>
    </section> );
}

export default Gallery;