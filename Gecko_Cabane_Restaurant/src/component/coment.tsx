import { cn } from "@/lib/utils";

function Comment({className} : {className?: string}) {
    return <section className={cn(className, 'grid place-content-center') }>comment</section>;
}

export default Comment;