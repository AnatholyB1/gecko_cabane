import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun } from "lucide-react";
import {useNavigate} from 'react-router-dom'
import { useTheme } from "@/components/theme-provider";

function DropDownMain ({className} : {className?: string}) {
    const { setTheme } = useTheme()
    const nav = useNavigate()
    return (
        <section className={cn(className, '')}>
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Button title="link menu" ><Menu className="w-4 h-4 stroke-2"></Menu></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Menu</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer">
                                Menu
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer" >
                                    Drink Menu
                                </DropdownMenuItem>
                                <DropdownMenuItem className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer">
                                    Food Menu
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        <DropdownMenuItem className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer" onClick={() => nav('/about')}>
                            About
                        </DropdownMenuItem>
                        <DropdownMenuItem className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer" onClick={() => nav('/services')}>
                            Services
                        </DropdownMenuItem>
                        <DropdownMenuItem className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer" onClick={() => nav('/shop')}>
                            Shop
                        </DropdownMenuItem>
                        <DropdownMenuItem className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer" onClick={() => nav('/contact')}>
                            Contact
                        </DropdownMenuItem>
                        <DropdownMenuItem className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer" onClick={() => nav('/privacy-policy')}>
                            Privacy Policy
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                <Button variant="outline" size="icon" className="transform-all duration-300 hover:scale-105 hover:text-primary cursor-pointer">
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