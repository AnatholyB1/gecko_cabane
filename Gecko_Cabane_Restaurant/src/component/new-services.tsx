import { cn } from "@/lib/utils";
import Separator from "./separator";
import { useNavigate } from "react-router-dom";


function NewServices({className} : {className?: string}) {
    const nav = useNavigate()
    return ( 
        <section className={cn(className,'grid place-items-center gap-[5rem]  place-content-center grid-flow-row py-[5rem] bg-white')}>
            <div className="col-span-2 flex flex-col gap-4 items-center">
                    <h2 className="transition-font-size home-info-title text-center md:w-[50rem] px-5 text-xl md:text-4xl">NEW SERVICES & UPCOMING EVENTS</h2>
                    <Separator></Separator>
            </div>
            <div className="grid grid-flow-row gap-6 place-items-center px-5 col-span-2 lg:col-span-1 w-full h-full">
                <img  onClick={() => nav('/services')} className="transition-transform hover:scale-105 img text-center home-info-p w-[300px] h-[300px] md:w-[390px] md:h-[390px]"  data-recalc-dims="1" loading="eager" data-lazy-loaded="1" title="gecko-cabane-marketplace"  src="./src/assets/spice.jpg" alt="oups something is missing" />
                <h5 className="secondary-title text-center">GECKO CABANE SHOP</h5>
                <p className="text-center home-info-p w-[300px] md:w-[390px]">Want to get a part of your holiday at home? Flavor, decoration or even souvenirs. We propose you Gecko Cabane's thai original goods.</p>
            </div>
            <div className=" grid grid-flow-row gap-6 place-items-center px-5 col-span-2 lg:col-span-1 w-full h-full">
                <img onClick={() => nav('/services')} className="transition-transform hover:scale-105 img text-center home-info-p w-[300px] h-[300px] md:w-[390px] md:h-[390px]"   data-recalc-dims="1" loading="eager" data-lazy-loaded="1" title="gecko-cabane-course" decoding="async" src="./src/assets/cuisine.jpg" alt="oups something is missing" />
                <h5 className="secondary-title text-center">COOKING LESSON BY CHEF JARIYA</h5>
                <p className="text-center home-info-p w-[300px] md:w-[390px] ">Already went to our shop and bought some thai provenance ingredients? But don't know how use it? Gecko cabane's only chef will be soon ready to develop your full potential in thai cooking skill.</p>
            </div>
        </section>
     );
}

export default NewServices;