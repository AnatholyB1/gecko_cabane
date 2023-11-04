
import { cn } from '@/lib/utils';

function HomeInfo({ className} : { className? : string}) {
    return ( <section className={cn(className,'grid place-content-center')}>
        home info
    </section> );
}

export default HomeInfo;