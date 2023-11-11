import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider"
import { Moon, ShoppingCart, Sun } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMenu } from "@/Provider/MenuProvider";

type Menu = './src/assets/menu/drink.png' | './src/assets/menu/special.png' | './src/assets/menu/menu.png'
function NavBarre({className} : {className?: string}) {
    const MenuType = useMenu()
    const { setTheme } = useTheme()
    const [menu, setMenu] = useState<Menu>(`./src/assets/menu/${MenuType.menuType}.png`)
    
    return (
        <section className={cn(className,'')}>
                <NavigationMenu > 
                <NavigationMenuList>
                    <NavigationMenuItem>
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button id="theme" variant="outline" size="icon">
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
                            <Link className={cn(navigationMenuTriggerStyle(),' bg-transparent  cursor-pointer hover:bg-transparent hover:text-primary transition-transform hover:scale-105')} to="/about">About</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                            <Link className={cn(navigationMenuTriggerStyle(),'bg-transparent  cursor-pointer hover:bg-transparent hover:text-primary transition-transform hover:scale-105')} to="/services">Services</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                            <Link className={cn(navigationMenuTriggerStyle(),'bg-transparent  cursor-pointer hover:bg-transparent hover:text-primary transition-transform hover:scale-105')} to="/shop">Shop</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                            <Link className={cn(navigationMenuTriggerStyle(),'bg-transparent  cursor-pointer hover:bg-transparent hover:text-primary transition-transform hover:scale-105')} to="/contact">Contact</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger className=" bg-transparent hover:bg-transparent hover:text-primary">Menu</NavigationMenuTrigger>
                        <NavigationMenuContent className={''}>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <Link to="/menu">
                                <img
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-1 no-underline outline-none focus:shadow-md"
                                    src={menu}
                                >
                                </img>
                                </Link>
                            </li>
                            <Link onClick={() => ( MenuType.setMenuType('menu'))} onMouseEnter={() => {setMenu('./src/assets/menu/menu.png')}} to="/menu" title="Introduction" className="bg-transparent ">
                                Gecko Cabane Restaurant menu
                            </Link>
                            <Link onClick={() => ( MenuType.setMenuType('special'))} onMouseEnter={() => setMenu('./src/assets/menu/special.png')} to="/menu" title="Installation" className="bg-transparent ">
                                Gecko Cabane Restaurant special menu
                            </Link>
                            <Link onClick={() => ( MenuType.setMenuType('drink'))} onMouseEnter={() => setMenu('./src/assets/menu/drink.png')} to="/menu" title="Typography" className="bg-transparent ">
                                Gecko Cabane Restaurant wine menu
                            </Link>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="overflow-visible" >
                    <NavigationMenuTrigger title="Shop"  className="transition-transform hover:scale-105 w-auto h-auto bg-transparant hover:text-primary hover:bg-transparant aria-expended:text-primary  aria-expended:bg-transparant focus:text-primary focus:bg-transparant data-[state=open]:bg-transparant  flex flex-col"><ShoppingCart className=" w-4 h-4 stroke-2 z-1 bg-transparent  "/></NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <Link  className={cn(navigationMenuTriggerStyle(),'bg-transparent  cursor-pointer hover:bg-transparent hover:text-primary transition-transform hover:scale-105')} to="/shop">Shop</Link>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
                </NavigationMenu>

        </section>
      );
}

export default NavBarre;