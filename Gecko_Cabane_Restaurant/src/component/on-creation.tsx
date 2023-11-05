import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMountain} from "@fortawesome/free-solid-svg-icons"
import {faPersonSkiing} from "@fortawesome/free-solid-svg-icons"
import { faCircle } from "@fortawesome/free-solid-svg-icons";



function OnCreation() {
    return (  
        <section className="relative py-[5rem] transition-all duration-300 hover:scale-150">
            <FontAwesomeIcon className=" fa-flip w-[7rem] h-[7rem] stroke-2 text-primary" icon={faMountain}/>
            <div className="absolute top-[5rem] left-[55%] ski-loop">
                <FontAwesomeIcon className="absolute  w-[1rem] h-[1rem] text-primary/80 ski "icon={faPersonSkiing}></FontAwesomeIcon>
                <FontAwesomeIcon className="absolute powder-loop fa-flip  -top-[5px]  w-[2px] h-[2px] text-primary/80 "icon={faCircle}></FontAwesomeIcon>
                <FontAwesomeIcon className="absolute powder-loop fa-flip -top-[3px] left-[-2px]  w-[2px] h-[2px] text-primary/80 "icon={faCircle}></FontAwesomeIcon>
                <FontAwesomeIcon className="absolute powder-loop fa-flip top-[-2.5px] left-[]  w-[2px] h-[2px] text-primary/80 "icon={faCircle}></FontAwesomeIcon>
                <FontAwesomeIcon className="absolute  powder-loop fa-flip  w-[2px] h-[2px] text-primary/80 "icon={faCircle}></FontAwesomeIcon>
            </div>
        
        </section>
    );
}

export default OnCreation;