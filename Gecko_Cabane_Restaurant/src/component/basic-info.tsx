import { cn } from "@/lib/utils";
import Separator from "./separator";


function Info ({className } : {className ?: string}) {
    return ( 
        <section className={cn( className, 'grid grid-flow-row  md:place-items-start   place-items-center  place-content-center text-center  md:text-start gap-5 py-[5rem] px-5 w-full h-full')}>
            <h2 className="max-w-[500px] w-full h-auto transition-font-size home-info-title text-center md:w-[50rem] px-5 text-xl md:text-4xl">CONTACT INFO</h2>
            <Separator></Separator>
            <div className="grid grid-flow-row gap-2 w-auto h-auto max-w-[500px]">
                <h5 className="secondary-title">ADDRESS​</h5>
                <a type={'address'} className="home-info-p hover:text-primary transition duration-300 delay-150 hover:scale-105" href="https://www.google.com/maps/place/Gecko+cabane+Restaurant/@8.0614465,98.9156215,15z"><p>1/36-37 Soi Ruam Jit Muang Krabi Amphoe Mueang Krabi, Chang Wat Krabi 81000</p></a>
                <h5 className="secondary-title">EMAIL US</h5>
                <a type="email" className="home-info-p hover:text-primary transition duration-300 delay-150 hover:scale-105" href="mailto:geckocabanerestaurant@gmail.com">geckocabanerestaurant@gmail.com</a>
                <h5  className="secondary-title">CALL US</h5>
                <a type={'phone'} className="home-info-p hover:text-primary transition duration-300 delay-150 hover:scale-105" href="">+66 81 958 5945</a>
            </div>
             <iframe className="md:w-[500px] w-full h-[500px]" src="https://www.google.com/maps/place/Gecko+cabane+Restaurant/@8.0614465,98.9156215,15z/data=!4m5!3m4!1s0x0:0xb21ff72120dc1200!8m2!3d8.0614465!4d98.9156215" ></iframe>
        </section>
     )
}

export default Info;    