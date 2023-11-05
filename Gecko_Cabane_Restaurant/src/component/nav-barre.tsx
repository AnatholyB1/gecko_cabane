import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider"
import { Moon, ShoppingCart, Sun } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {useNavigate} from 'react-router-dom'

function NavBarre({className} : {className?: string}) {

    const { setTheme } = useTheme()
    const nav = useNavigate()
    
    return (
        <section className={cn(className,'')}>
                <NavigationMenu > 
                <NavigationMenuList>
                    <NavigationMenuItem>
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink onClick={() => nav('/about')} className={cn(navigationMenuTriggerStyle(),' bg-transparent  cursor-pointer hover:bg-transparent hover:text-primary transition-transform hover:scale-105')}>
                            About
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink onClick={() => nav('/services')} className={cn(navigationMenuTriggerStyle(),'bg-transparent  cursor-pointer hover:bg-transparent hover:text-primary transition-transform hover:scale-105')}>
                            Services
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink onClick={() => nav('/shop')} className={cn(navigationMenuTriggerStyle(),'bg-transparent  cursor-pointer hover:bg-transparent hover:text-primary transition-transform hover:scale-105')}>
                            Shop
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink onClick={() => nav('/Contact')} className={cn(navigationMenuTriggerStyle(),'bg-transparent  cursor-pointer hover:bg-transparent hover:text-primary transition-transform hover:scale-105')}>
                            Contact
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger className=" bg-transparent hover:bg-transparent hover:text-primary">Menu</NavigationMenuTrigger>
                    <NavigationMenuContent >
                       
                        
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="overflow-visible" >
                    <NavigationMenuTrigger className="transition-transform hover:scale-105 w-auto h-auto bg-transparant hover:text-primary hover:bg-transparant aria-expended:text-primary  aria-expended:bg-transparant focus:text-primary focus:bg-transparant data-[state=open]:bg-transparant  flex flex-col"><ShoppingCart className=" w-4 h-4 stroke-2 z-1 bg-transparent  "/></NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink >shop</NavigationMenuLink>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
                </NavigationMenu>

        </section>
      );
}

export default NavBarre;