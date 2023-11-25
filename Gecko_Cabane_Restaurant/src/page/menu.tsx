import Layer from "@/layer";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css/free-mode';
import "swiper/css";
import 'swiper/css/effect-coverflow';
import {useEffect,useState } from "react";
import { useMenu } from "@/Provider/MenuProvider";


type Menu = 'phone' | 'menu' 

function Menu() {
    const { menuType } = useMenu();
    addEventListener('resize', () => {if(window.innerWidth < 640) setSize('phone'); else setSize('menu')})
    const [size, setSize] = useState<Menu>('menu');
    useEffect(() => {
        if(window.innerWidth < 640) setSize('phone')
    }, []);

    return ( <Layer menu>
                <section className="grid bg-transparent place-items-center grid-flow-row   h-[100vh-10rem] w-full  " >
                        
                        <Swiper
                        
                            className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-screen h-screen"
                            slidesPerView={1}
                            effect={"fade"}
                            centeredSlides={true}
                            navigation
                            loop={true}
                            pagination={{ clickable: true, type: 'bullets' }}
                            scrollbar={{ draggable: true }}
                        >
                            <SwiperSlide  >
                                <img
                                    alt="no menu"
                                    title="menu"
                                    src={`/${size}/${menuType}.png`}
                                    loading="lazy"
                                    className="cursor-grab object-contain   w-screen h-screen"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    alt="no menu"
                                    title="menu"
                                    src={`/${size}/${menuType}.png`}
                                    loading="lazy"
                                    className="cursor-grab object-contain   w-screen h-screen"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    alt="no menu"
                                    title="menu"
                                    src={`/${size}/${menuType}.png`}
                                    loading="lazy"
                                    className="cursor-grab object-contain   w-screen h-screen"
                                />
                            </SwiperSlide>
                        </Swiper>

                </section>
    </Layer>);
}

export default Menu;



