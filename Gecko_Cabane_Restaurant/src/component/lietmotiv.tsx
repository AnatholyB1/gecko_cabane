import { cn } from "@/lib/utils";
import { QuoteIcon } from "@radix-ui/react-icons";


function Lietmotive({className} : {className?: string}) {
    return ( 
        <section className={cn(className, 'grid grid-flow-row md:grid-flow-col w-full  place-items-center ')}>
                <QuoteIcon className="rotate-180 w-[9rem] h-[9rem] " ></QuoteIcon>
                <div className="flex flex-col gap-1 ">
                    <p className="lietmotiv">"We try, we try, and we try again."</p>
                    <p className="lietmotiv-quote">– Gecko Cabane leitmotiv</p>
                </div>
                <QuoteIcon className={'hidden md:block w-[9rem] h-[9rem] '}></QuoteIcon>
        </section>
     );
}

export default Lietmotive;