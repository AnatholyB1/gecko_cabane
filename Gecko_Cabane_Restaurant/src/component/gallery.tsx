import { cn } from "@/lib/utils";

function Gallery({className} : {className?: string}) {
    return ( <section className={cn(className, 'grid place-content-center')}>Galery</section> );
}

export default Gallery;