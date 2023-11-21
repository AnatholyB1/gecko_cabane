import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  
interface HoverProvider extends React.HTMLProps<HTMLDivElement> {}

export function Hover({...props}: HoverProvider) {
    return (
      <TooltipProvider {...props}>
        <Tooltip>
          <TooltipTrigger asChild>
            {props.children}
          </TooltipTrigger>
          <TooltipContent>
            <p>{props.title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }