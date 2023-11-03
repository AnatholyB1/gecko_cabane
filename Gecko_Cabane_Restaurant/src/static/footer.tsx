import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import {useNavigate} from 'react-router-dom'

export default function Footer () {
    const nav = useNavigate()
    return (
        <div className="w-screen min-h-[10rem] flex bg-black items-center flex-col align-center gap-4">
            <NavigationMenu className="h-auto w-auto ">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink onClick={() => nav('/about')} className={cn(navigationMenuTriggerStyle(),'text-white cursor-pointer  bg-transparent hover:bg-transparent hover:text-primary transition-transform hover:scale-105')}>
                            About
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink onClick={() => nav('/services')} className={cn(navigationMenuTriggerStyle(),'text-white cursor-pointer bg-transparent hover:bg-transparent hover:text-primary transition-transform hover:scale-105')}>
                            Services
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink onClick={() => nav('/shop')} className={cn(navigationMenuTriggerStyle(),'text-white cursor-pointer bg-transparent hover:bg-transparent hover:text-primary transition-transform hover:scale-105')}>
                            Shop
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink onClick={() => nav('/Contact')} className={cn(navigationMenuTriggerStyle(),'text-white cursor-pointer bg-transparent hover:bg-transparent hover:text-primary transition-transform hover:scale-105')}>
                            Contact
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <span className="text-white flex-1 text-center  ">1 36-37 Soi Ruam Jit Tambon Pak Nam, Krabi Chang Wat Krabi 81000, TH | Phone: +66 81 958 5945 | <br /> Email: geckocabanerestaurant@gmail.com</span>
        </div>
    )
}