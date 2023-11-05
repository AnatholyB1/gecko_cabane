import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu, ShoppingCart } from "lucide-react"
import {useNavigate} from 'react-router-dom'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Separator from "@/component/separator"

import { useTheme } from "@/components/theme-provider"
import { Moon, Sun } from "lucide-react"


export default function Header () {
    const { setTheme } = useTheme()
    const nav = useNavigate()
    return (
        <section className="flex  flex-col w-screen   min-h-[25rem] md:min-h-[30rem]  gap-6 md:gap-12 px-2 ">
            <div id='bg' className='header-bg md:h-[30rem] min-h-[25rem]  w-full'></div>
            <div className="flex w-full h-auto p-2 justify-between opacity-100 ">
                <div>
                    <h1 className="transition-font-size hover:text-primary hover:cursor-pointer font-montserrat font-semibold leading-6 text-2xl md:text-xl transition-transform hover:scale-105 w-[10rem] md:w-auto" onClick={() => nav('/')}>Gecko Cabane Restaurant</h1>
                    <p className="leading-6 text-xs font-Inter">French & Thai fusion food</p>
                </div>
                <NavigationMenu className="hidden  md:block "> 
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
                <div className="  md:hidden transition-transform hover:scale-105 ">
                    <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button title="link menu" ><Menu className="w-4 h-4 stroke-2"></Menu></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                        <DropdownMenuItem>
                            Profile
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Billing
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Keyboard shortcuts
                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>Email</DropdownMenuItem>
                                <DropdownMenuItem>Message</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>More...</DropdownMenuItem>
                            </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuItem>
                            New Team
                            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuItem disabled>API</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                        Log out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className="flex flex-col p-4 w-full h-auto items-center align-center md:gap-4">
                <div className="flex flex-col items-center align-center ">
                    <h5 className="mb-1 md:mb-5 text-white font-vidaloka text-2xl font-medium italic tracking-[1.4px] text-shadow text-center">explore new taste</h5>
                    <Separator></Separator>
                </div>
                <h1 className="p-4 text-white font-serif text-4xl font-extrabold uppercase tracking-wider text-shadow text-center">GECKO CABANE RESTAURANT</h1>
                <div className="flex flex-row items-center w-auto h-auto gap-6 ">
                    <Button title='link about' className="rounded-full transition duration-300 hover:scale-110" onClick={() => nav('/about')}>LEARN MORE</Button>
                    <Button title="link menu" className="rounded-full transition duration-300 hover:scale-110">BROWSE MENU</Button>
                </div>
            </div>
        </section>
    )
}