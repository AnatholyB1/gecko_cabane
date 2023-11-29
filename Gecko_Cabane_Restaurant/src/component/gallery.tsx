import { cn } from "@/lib/utils";

import { Swiper, SwiperSlide} from "swiper/react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPinterest} from '@fortawesome/free-brands-svg-icons'
import axios from "axios";
import {useToast} from "@/components/ui/use-toast";


// Import Swiper styles
import 'swiper/css/free-mode';
import "swiper/css";
import 'swiper/css/effect-coverflow';
import { useEffect, useState } from "react";


type ImageType = {
  file
: 
string,
name
: 
string,
type
: 
string,
__v
: 
number
_id
: 
string,
}



function Gallery({className} : {className?: string}) {
  const {toast} = useToast()
    const [images, setImages] = useState<ImageType[]>()

    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/image/type/largeAssets`);
            if(response.status === 200) {
                setImages(response.data);

            }else{
              toast({title: "Error", description: "An error occured while fetching images", variant: "destructive"})
            }
            // handle response data here
        } catch (error) {
            toast({title: "Error", description: "An error occured while fetching images", variant: "destructive"})
        }
    }

    useEffect(() => {
      if(typeof images == 'undefined' )
      {
        fetchData();
      }
    }, []);

    return ( 
    <section className={cn(className, 'grid place-items-center gap-[5rem]  place-content-center grid-flow-row py-[5rem]  ')}>
      <Swiper

      slidesPerView={'auto'}
      effect={"fade"}
      spaceBetween={30}
      centeredSlides={true}
      navigation
      loop={true}
      pagination={{ clickable: true, type: 'bullets' }}
      scrollbar={{ draggable: true }}
      freeMode={false}

       className="w-screen flex items-center justify-center h-full">
        {images?.map((image) => 
          <SwiperSlide key={image._id}>
            <img alt="oups" className="  rounded-md transiton duration-300 delay-150  hover:scale-110" src={`/api/${image.file}`} />
          </SwiperSlide>
        )
        }

      </Swiper>
      <a title="Pinterest" href="https://www.pinterest.com/geckocabanerestaurant0059/"><FontAwesomeIcon className="w-[3rem] h-[3rem] transition hover:scale-125 duration-300 divide-neutral-200  text-red-700" icon={faPinterest}  /></a>
    </section> );
}



export default Gallery;