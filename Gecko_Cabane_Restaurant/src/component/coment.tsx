import { cn } from "@/lib/utils";
import Separator from "./separator";
import { Button } from "@/components/ui/button";
import LonelyPlanetIcon from "@/assets/lonelyplanet";
import TripAdvisorIcon from "@/assets/tripadvisor";
import { Menu } from "lucide-react";
import { useState } from "react";

function Comment({className} : {className?: string}) {
    const [animate, setAnimate] = useState(false)
    return (
            <section className={cn(className, 'grid place-items-center gap-[5rem] place-content-center grid-flow-row py-[5rem] bg-white') }>
                 <div className="col-span-2 flex flex-col gap-4 items-center">
                    <h2 className="transition-font-size home-info-title text-center md:w-[50rem] px-5 text-xl md:text-4xl">COMMENT</h2>
                    <Separator></Separator>
                </div>
                <div className="grid lg:hidden grid-flow-col gap-2 place-items-center col-span-2 lg:col-span-1 w-full h-full">
                    <a title="Lonely PLanet" className="w-[3rem] h-[3rem] rounded-full duration-300 transition:transform hover:scale-150  " href="https://www.lonelyplanet.com/thailand/krabi-town/restaurants/gecko-cabane/a/poi-eat/1572474/357601"><LonelyPlanetIcon className="rounded-full w-full h-full fill-blue-800 "  /></a>
                    <a title="Tripadvisor" className="w-[3rem] h-[3rem] rounded-full duration-300 transition:transform hover:scale-150" href="https://www.tripadvisor.com/Restaurant_Review-g297927-d2413872-Reviews-Gecko_Cabane_Restaurant-Krabi_Town_Krabi_Province.html"><TripAdvisorIcon className="rounded-full w-full h-full "  /></a>
                    <a title="Google  business" className="w-[3rem] h-[3rem] rounded-full duration-300 transition:transform hover:scale-150" href="https://www.google.com/search?client=firefox-b-d&ei=rHJKXfW5L6Gxmgez_6h4&q=gecko+cabane+restaurant+krabi+google+business&oq=gecko+cabane+restaurant+krabi+google+bu&gs_l=psy-ab.1.0.33i21j33i160l2.46605.51736..53244...1.0..0.342.2061.0j8j2j1......0....1..gws-wiz.......0i19j0i22i30i19.k1JQ2uIFvJY"><img className="rounded-full w-full h-full "  src="data:image/png;base64,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" /></a>
                    <a title="Restaurant guru" className="w-[3rem] h-[3rem] rounded-full duration-300 transition:transform hover:scale-150" href="https://restaurantguru.com/Gecko-cabane-Restaurant-Ao-Nang/reviews?bylang=1"><img  alt="oups" className="rounded-full w-full h-full "  src="https://th.bing.com/th?id=ODLS.5ff8cfa5-ea38-40c5-a69a-9df470d43dd4&w=32&h=32&qlt=90&pcl=fffffa&o=6&cb=1103&pid=1.2"/></a>
                    <a title="Mafengo" className="w-[3rem] h-[3rem] rounded-full duration-300 transition:transform hover:scale-150" href="https://www.mafengwo.cn/poi/7690642.html?fromMdd=16980"><img alt="oups" title="Mafengo" className="rounded-full w-full h-full " src="https://th.bing.com/th?id=ODLS.7ddd7892-95af-406c-af59-0f0c10dcd9bf&w=32&h=32&qlt=90&pcl=fffffa&o=6&cb=1103&pid=1.2"  /></a>
                </div>
                <div className="hidden lg:flex w-full h-full flex-col items-center justify-center  ">
                    <div  className="relative" >
                        <Button id="link" title="link" className={`z-10 w-[3rem] h-[3rem]  rounded-full ${!animate && 'animate-bounce' }`} onClick={() => setAnimate(!animate)}><Menu></Menu></Button>
                        <a  title="Lonely PLanet" className={`transition ease-in-out duration-500  absolute top-0 left-0  ${
                            animate ? 'translate-y-[5rem] z-10' : 'z-[-1]'
                            } bg-slate-400/20 w-[3rem] h-[3rem] rounded-full`} href="https://www.lonelyplanet.com/thailand/krabi-town/restaurants/gecko-cabane/a/poi-eat/1572474/357601"><LonelyPlanetIcon className="transition duration-300 rounded-full w-full h-full fill-blue-800 hover:scale-150"  /></a>
                        <a
                            title="Tripadvisor"
                            className={`transition ease-in-out delay-100 duration-500 absolute top-0 left-0   ${
                            animate ? 'translate-x-[-4.7rem] translate-y-[1.7rem] z-10' : 'z-[-1]'
                            } bg-slate-400/20 w-[3rem] h-[3rem] rounded-full`}
                            href="https://www.tripadvisor.com/Restaurant_Review-g297927-d2413872-Reviews-Gecko_Cabane_Restaurant-Krabi_Town_Krabi_Province.html"><TripAdvisorIcon  className="rounded-full w-full h-full transition duration-300 hover:scale-150 "  /></a>
                                                <a
                            title="Google  business"
                            className={`transition ease-in-out delay-200 duration-500 absolute top-0 left-0  ${
                            animate ? 'translate-x-[-3.2rem] translate-y-[-3.8rem] z-10' : 'z-[-1]'
                            } bg-slate-400/20 w-[3rem] h-[3rem] rounded-full`}
                       href="https://www.google.com/search?client=firefox-b-d&ei=rHJKXfW5L6Gxmgez_6h4&q=gecko+cabane+restaurant+krabi+google+business&oq=gecko+cabane+restaurant+krabi+google+bu&gs_l=psy-ab.1.0.33i21j33i160l2.46605.51736..53244...1.0..0.342.2061.0j8j2j1......0....1..gws-wiz.......0i19j0i22i30i19.k1JQ2uIFvJY"><img alt="oups" className="rounded-full w-full h-full hover:scale-150 transition duration-300"  src="data:image/png;base64,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" /></a>
                                                <a
                            title="Restaurant guru"
                            className={`transition ease-in-out delay-300  duration-500  absolute top-0 left-0  ${
                            animate ? 'translate-x-[2.5rem] translate-y-[-4.3rem] z-10' : 'z-[-1]'
                            } bg-slate-400/20 w-[3rem] h-[3rem] rounded-full`}
                            href="https://restaurantguru.com/Gecko-cabane-Restaurant-Ao-Nang/reviews?bylang=1"><img alt="oups" className="transition duration-300 rounded-full w-full h-full hover:scale-150"  src="https://th.bing.com/th?id=ODLS.5ff8cfa5-ea38-40c5-a69a-9df470d43dd4&w=32&h=32&qlt=90&pcl=fffffa&o=6&cb=1103&pid=1.2 "/></a>
                        <a
                            title="Mafengo"
                            className={`transition ease-in-out delay-500  duration-500  absolute top-0 left-0  ${
                            animate ? 'translate-x-[4.92rem] translate-y-[0.86rem] z-10' : 'z-[-1]'
                            } bg-slate-400/20 w-[3rem] h-[3rem] rounded-full`}
                            href="https://www.mafengwo.cn/poi/7690642.html?fromMdd=16980"><img  title="Mafengo" className="rounded-full w-full h-full hover:scale-150 transition duration-300 " src="https://th.bing.com/th?id=ODLS.7ddd7892-95af-406c-af59-0f0c10dcd9bf&w=32&h=32&qlt=90&pcl=fffffa&o=6&cb=1103&pid=1.2" alt="oups" /></a>
                    </div>
                </div>
                <div className="grid grid-flow-row gap-6 place-items-center col-span-2 lg:col-span-1 w-full h-full">
                    <p className="text-center home-info-p w-[300px] lg:w-[390px] ">" Not only should Wat Kaew Ko Wararam be visited, but also Gecko Cabane Restaurant. Try dishes of French and Thai cuisines at this restaurant. Gecko Cabane Restaurant offers you to try good pad thai, salmon and lamb shanks. According to the guests' opinions, waiters serve tasty parfait, caramel ice cream and cream caramel here. Come to this place for delicious belgian beer, wine or Mai tai. Take your chance to taste great iced coffee, thai tea or smoothies.

The warm atmosphere of this spot makes customers feel relaxed and have a nice time. The atmosphere of hospitality of this restaurant highly depends on the staff, that is well-trained here. Terrific service is something that guests highlight in their comments. Here you will pay average prices. Cute decor lets the guests relax. Gecko Cabane Restaurant is rated on Google 4.6 by its visitors. "</p>
                    <div className="flex justify-end w-full "><Button id="view review" title="View review" variant={'link'} className=" home-info-p  duration-300 transition-transform hover:scale-105 hover:text-primary"><a href="https://restaurantguru.com/Gecko-cabane-Restaurant-Ao-Nang">restaurantguru.com</a></Button></div>
                </div>
            </section>
            )
}

export default Comment;


