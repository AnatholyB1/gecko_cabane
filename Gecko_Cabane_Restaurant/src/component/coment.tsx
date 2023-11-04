import { cn } from "@/lib/utils";

function Comment({className} : {className?: string}) {
    return <section className={cn(className, 'grid place-items-center gap-[5rem] place-content-center grid-flow-row py-[5rem] bg-white') }>comment</section>;
}

export default Comment;