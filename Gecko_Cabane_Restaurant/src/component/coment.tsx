import { cn } from "@/lib/utils";
import Separator from "./separator";
import { Button } from "@/components/ui/button";
import TripAdvisorIcon from "@/assets/tripadvisor";
import { Icons } from "@/components/ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
function Comment({className} : {className?: string}) {
    return (
            <section className={cn(className, 'grid place-items-center gap-[5rem] place-content-center grid-flow-row py-[5rem] ') }>
                 <div className="col-span-2 flex flex-col gap-4 items-center">
                    <h2 className="transition-font-size home-info-title text-center md:w-[50rem] px-5 text-xl md:text-4xl">COMMENT</h2>
                    <Separator></Separator>
                </div>
                <div className="grid  grid-flow-col gap-2 place-items-center col-span-2 w-full h-full">
                    <a title="Lonely PLanet" className="w-[3rem] h-[3rem] rounded-full duration-300 transition:transform hover:scale-150  " href="https://www.lonelyplanet.com/thailand/krabi-town/restaurants/gecko-cabane/a/poi-eat/1572474/357601"><FontAwesomeIcon  icon={faEarthAmericas} className="rounded-full w-full h-full text-primary " /></a>
                    <a title="Tripadvisor" className="w-[3rem] h-[3rem] rounded-full duration-300 transition:transform hover:scale-150" href="https://www.tripadvisor.com/Restaurant_Review-g297927-d2413872-Reviews-Gecko_Cabane_Restaurant-Krabi_Town_Krabi_Province.html"><TripAdvisorIcon className="rounded-full w-full h-full "  /></a>
                    <a title="Google  business" className="w-[3rem] h-[3rem] rounded-full duration-300 transition:transform hover:scale-150" href="https://www.google.com/search?client=firefox-b-d&ei=rHJKXfW5L6Gxmgez_6h4&q=gecko+cabane+restaurant+krabi+google+business&oq=gecko+cabane+restaurant+krabi+google+bu&gs_l=psy-ab.1.0.33i21j33i160l2.46605.51736..53244...1.0..0.342.2061.0j8j2j1......0....1..gws-wiz.......0i19j0i22i30i19.k1JQ2uIFvJY"><Icons.googleBusiness className="w-full h-full fill-primary" /></a>
                    <a title="Restaurant guru" className="w-[3rem] h-[3rem] rounded-full duration-300 transition:transform hover:scale-150" href="https://restaurantguru.com/Gecko-cabane-Restaurant-Ao-Nang/reviews?bylang=1"><img  alt="oups" className="rounded-full  w-full h-full "  src="https://th.bing.com/th?id=ODLS.5ff8cfa5-ea38-40c5-a69a-9df470d43dd4&w=32&h=32&qlt=90&pcl=fffffa&o=6&cb=1103&pid=1.2"/></a>
                </div>

                <div className="grid grid-flow-row gap-6 place-items-center col-span-2  w-full h-full">
                    <p className="text-center home-info-p w-[300px] lg:w-[390px] ">" Not only should Wat Kaew Ko Wararam be visited, but also Gecko Cabane Restaurant. Try dishes of French and Thai cuisines at this restaurant. Gecko Cabane Restaurant offers you to try good pad thai, salmon and lamb shanks. According to the guests' opinions, waiters serve tasty parfait, caramel ice cream and cream caramel here. Come to this place for delicious belgian beer, wine or Mai tai. Take your chance to taste great iced coffee, thai tea or smoothies.

The warm atmosphere of this spot makes customers feel relaxed and have a nice time. The atmosphere of hospitality of this restaurant highly depends on the staff, that is well-trained here. Terrific service is something that guests highlight in their comments. Here you will pay average prices. Cute decor lets the guests relax. Gecko Cabane Restaurant is rated on Google 4.6 by its visitors. "</p>
                    <div className="flex lg:justify-end items-center justify-center w-full  "><Button id="view review" title="View review"  className=" home-info-p rounded-full duration-300 transition-transform hover:scale-105 "><a href="https://restaurantguru.com/Gecko-cabane-Restaurant-Ao-Nang">restaurantguru.com</a></Button></div>
                </div>
            </section>
            )
}

export default Comment;


