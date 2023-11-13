import { cn } from "@/lib/utils";

import Separator from "./separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faImage} from '@fortawesome/free-regular-svg-icons'

type Orientation = 'left' | 'right'

function Card({className, orientation = 'right', img, title, subTitle, children} : {className?: string, orientation?: Orientation, img?: string,title: string,subTitle?: string, children?:React.ReactNode}) {
    return ( <section className={cn(className, 'grid place-items-center  gap-8 place-content-center grid-flow-row lg:grid-flow-col px-[2rem] py-[5rem]  w-full') }>
                <div className="lg:col-span-2 grid grid-flow-row place-content-center justify-items-center lg:justify-items-start  lg:place-content-start gap-[2rem] lg:text-start text-center lg:max-w-[800px] lg:max-h-[310px]">
                    <h2 className=" transition-font-size home-info-title text-xl md:text-4xl">{title}</h2>
                    <Separator></Separator>
                    <h5 className="secondary-title empty:hidden">{subTitle}</h5>
                    {children} 
                </div>  
                <div className={`${orientation === 'right' ? 'row-end-auto lg:col-end-auto' : 'row-end-1 lg:col-end-1'} w-[310px] h-[310px] transition duration-300 delay-150 hover:scale-105`}>
                    {img ? <div className=" bg-primary rounded-xl"><img title='card image' className="object-cover rounded-xl w-[310px] h-[310px] -translate-x-2 -translate-y-2 " src={img} alt='oups' ></img></div> : <FontAwesomeIcon title="image placeholder" className="text-secondary w-full h-full" icon={faImage}></FontAwesomeIcon>}
                </div>              
            </section> );
}

export default Card;