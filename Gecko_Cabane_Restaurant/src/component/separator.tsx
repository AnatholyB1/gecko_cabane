import { cn } from "@/lib/utils";

function Separator({className} : {className?: string}) {
    return <section className={cn(className, 'border border-solid border-[rgba(0,175,43,0.93)] w-[100px]')}></section>;
}
export default Separator;