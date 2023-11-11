import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Link} from 'react-router-dom';
import {useMenu} from "@/Provider/MenuProvider";

function DropDownMain ({className} : {className?: string}) {
    const menuType = useMenu()
    const { setTheme } = useTheme()
    return (
        <section className={cn(className, '')}>
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Button id="link menu" title="link menu" ><Menu className="w-4 h-4 stroke-2"></Menu></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Menu</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer">
                                <Link to="/menu">Menu</Link> 
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer" >
                                    <Link to="/menu" onClick={() => menuType.setMenuType('menu')}>Food menu</Link> 
                                </DropdownMenuItem>
                                <DropdownMenuItem className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer">
                                    <Link to="/menu" onClick={() => menuType.setMenuType('special')}>Special menu</Link> 
                                </DropdownMenuItem>
                                <DropdownMenuItem className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer">
                                    <Link to="/menu" onClick={() => menuType.setMenuType('drink')}>Drink menu</Link> 
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        <DropdownMenuItem className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer">
                            <Link to="/about">About</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer">
                            <Link to="/services">Services</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer">
                            <Link to="/shop">Shop</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer">
                            <Link to="/contact">Contact</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer">
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                <Button id="theme" variant="outline" size="icon" className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer">
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer" onClick={() => setTheme("light")}>
                                Light
                                </DropdownMenuItem>
                                <DropdownMenuItem className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer" onClick={() => setTheme("dark")}>
                                Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer" onClick={() => setTheme("system")}>
                                System
                                </DropdownMenuItem> 
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                </DropdownMenuContent>
            </DropdownMenu>
        </section>
    )
}

export default DropDownMain;