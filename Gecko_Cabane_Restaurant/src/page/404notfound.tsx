import Layer from "@/layer";
import { Circle, Pentagon, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const nav =useNavigate()
    return ( 
        <Layer>
            <section className="grid place-items-center grid-flow-row  bg-white py-[5rem] w-full h-[700px] service-page">
                <h1 className="text-primary text-center text-2xl font-bold leading-10 transition-all duration-300 md:text-4xl hover:scale-150">404 NOT FOUND !</h1>
                <div title="going back ?" onClick={() => nav('./')} className="relative hover:scale-110 transition-all duration-300 delay-150  cursor-pointer ">
                    <Wrench className="absolute w-[300px] h-[300px] wrench  top-[-47px] left-[-200px] rotate stroke-1 text-primary fill-primary  "></Wrench>
                    <div className="rotate">
                    <Pentagon className="fill-primary stroke-primary/30 w-[50px] h-[50px]"></Pentagon>
                    <Circle className="absolute z-[900] fill-secondary text-primary/30 top-[14px] left-[13px]"></Circle>
                    </div>
                </div>
            </section>
        </Layer>
     )
}

export default NotFound;