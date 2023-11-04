import { cn } from "@/lib/utils";

function NewServices({className} : {className?: string}) {
    return ( 
        <section className={cn(className,'grid place-content-center')}>new services</section>
     );
}

export default NewServices;