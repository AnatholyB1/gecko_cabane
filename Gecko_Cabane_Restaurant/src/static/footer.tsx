import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Link } from 'react-router-dom'
import {Button} from "@/components/ui/button"
import Food from "@/assets/food.json"
import Glass from "@/assets/glass.json"
import Star from "@/assets/star.json"
import { Player} from "@lottiefiles/react-lottie-player";
import { createRef } from "react"
import { useMenu } from "@/Provider/MenuProvider"

export default function Footer ({menu} : {menu : boolean}) {
    const menuType = useMenu()
    const star = createRef<Player>()
    const food = createRef<Player>()
    const glass = createRef<Player>()
    return (
        <section className={`${!menu ?' flex bg-footer items-center flex-col align-center gap-4 px-5  min-h-[10rem] w-screen ' : ' fixed bottom-[30px] left-1/2  h-[3em] text-black z-10 origin-center  -translate-x-1/2 ' }`}>
            {!menu ? 
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
            :
            <div className="w-[12em] h-full bg-background flex flex-row rounded-full items-center justify-center gap-4 ">
                <Button onClick={() => {star.current?.play(),menuType.setMenuType('special')}} title="Menu" variant={'ghost'} className=" p-0 w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white/60 animation transform duration-600 delay-150 focus:scale-125 focus:bg-white">
                <Player
                    ref={star}
                    autoplay={false}
                    src={Star} /></Button>
                <Button onClick={() => {food.current?.play(),menuType.setMenuType('menu')}} title="Menu" variant={'ghost'} className="p-0 w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white/60 animation transform duration-300 delay-150 focus:scale-125 focus:bg-white" >
                    <Player
                     autoplay={false}
                    ref={food}
                    src={Food} /></Button>
                <Button onClick={() =>{glass.current?.play(),menuType.setMenuType('drink')}} title="Menu" variant={'ghost'} className="p-0 w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white/60 animation transform duration-300 delay-150 focus:scale-125 focus:bg-white">
                <Player
                    autoplay={false}
                    ref={glass}
                    src={Glass} /></Button>
            </div>
            }
        </section>
    )
}