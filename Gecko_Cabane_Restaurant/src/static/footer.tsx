import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Link } from 'react-router-dom'

export default function Footer ({menu} : {menu : boolean}) {
    return (
        <section className={`w-screen min-h-[10rem] ${!menu ?' bg-black text-white' : ' fixed bottom-0 left-0 text-black' }`}>
            <div className="flex flex-col items-center items-align  align-center gap-4 px-5">
            <NavigationMenu className="h-auto w-auto ">
                <NavigationMenuList >
                    <NavigationMenuItem>

                            <Link to="/about" className={cn(navigationMenuTriggerStyle(),' cursor-pointer md:px-4 px-1  bg-transparent hover:bg-transparent hover:text-primary transition-transform hover:scale-105')}>About</Link>

                    </NavigationMenuItem>
                    <NavigationMenuItem>
    
                            <Link to="/services" className={cn(navigationMenuTriggerStyle(),' md:px-4 px-1 cursor-pointer bg-transparent hover:bg-transparent hover:text-primary transition-transform hover:scale-105')}>Services</Link>
              
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                 
                            <Link to="/shop" className={cn(navigationMenuTriggerStyle(),' md:px-4 px-1 cursor-pointer bg-transparent hover:bg-transparent hover:text-primary transition-transform hover:scale-105')}>Shop</Link>
                 
                    </NavigationMenuItem>
                    <NavigationMenuItem>
      
                            <Link to="/contact" className={cn(navigationMenuTriggerStyle(),' md:px-4 px-1 cursor-pointer bg-transparent hover:bg-transparent hover:text-primary transition-transform hover:scale-105')}>Contact</Link>
 
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                            <Link  className={cn(navigationMenuTriggerStyle(),' md:px-4 px-1 cursor-pointer bg-transparent hover:bg-transparent hover:text-primary transition-transform hover:scale-105')} to="/privacy-policy">Privacy Policy</Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <span className=" flex-1 text-center  ">1 36-37 Soi Ruam Jit Tambon Pak Nam, Krabi Chang Wat Krabi 81000, TH | Phone: +66 81 958 5945 | <br /> Email: geckocabanerestaurant@gmail.com</span>

            </div>
            
        </section>
    )
}