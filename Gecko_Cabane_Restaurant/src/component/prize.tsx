import { cn } from "@/lib/utils";
import { HTMLProps } from "react";
import Separator from "./separator";


interface PrizeSectionProps extends HTMLProps<HTMLDivElement>  {

}

function PrizeSection( props : PrizeSectionProps ) {

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if ((event.target as HTMLElement).nodeName.toLowerCase() !== 'a') {
          const href = event.currentTarget.querySelector('.circ_top_title')?.getAttribute('href');
          if (href) {
            window.open(href);
          }
        }
      };

    return ( <section {...props} className={cn(props.className, 'grid place-items-center gap-[5rem] place-content-center grid-flow-row py-[5rem]')}>
                         <div className="col-span-2 flex flex-col gap-4 items-center">
                            <h2 className="transition-font-size home-info-title text-center md:w-[50rem] px-5 text-xl md:text-4xl">Prizes</h2>
                            <Separator></Separator>
                            <link href="https://awards.infcdn.net/circ5_n.css" rel="stylesheet"/>
                                    <div id="rest_circ5" onClick={handleClick}>
                                    <div className="circ_cont">
                                        <div className="circ_img" style={{background: "url('https://awards.infcdn.net/img/star_red.svg') no-repeat center"}}>&nbsp;</div>
                                        <a href="https://restaurantguru.com" target="_blank" rel="noopener noreferrer" className="circ_top_title">Restaurant Guru 2023</a>
                                        <span>A top 100 best restaurant in Thailand</span>
                                        <a href="https://restaurantguru.com/Gecko-cabane-Restaurant-Ao-Nang" target="_blank" rel="noopener noreferrer" className="circ_bot_title">Gecko Cabane Restaurant</a>
                                    </div>
                            </div>                        
                        </div>
            </section> );
}

export default PrizeSection;

