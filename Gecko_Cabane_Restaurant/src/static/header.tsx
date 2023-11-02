import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ShoppingCart } from "lucide-react"


export default function Header () {
    
    return (
        <div>
            <div className="flex w-full h-auto p-2 justify-between ">
                <div>
                    <Button></Button>
                    <p></p>
                </div>
                <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger className="hover:bg-transparent hover:text-primary">Menu</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(),'cursor-pointer hover:bg-transparent hover:text-primary')}>
                            Documentation
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(),'cursor-pointer hover:bg-transparent hover:text-primary')}>
                            Documentation
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(),'cursor-pointer hover:bg-transparent hover:text-primary')}>
                            Documentation
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(),'cursor-pointer hover:bg-transparent hover:text-primary')}>
                            Documentation
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem >
                    <NavigationMenuTrigger className="hover:bg-transparent hover:text-primary"><div className="w-auto h-auto"><ShoppingCart className="w-6 h-6 stroke-1 z-1 bg-transparent hover:fill-primary"/><div className="fixed t-1 l-1 bg-white">1</div></div></NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>shop</NavigationMenuLink>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
                </NavigationMenu>
            </div>


        </div>
    )
}