import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import { useAdmin } from "@/Provider/admin-provider";
import { useState } from "react";

export type ApiTypeCall = 'smallAssets' | 'mediumAssets' | 'largeAssets' |  'laptopMenu' | 'laptopSpecial' | 'laptopDrink' | 'phoneMenu'  | 'phoneSpecial'  | 'phoneDrink'  


export type ItemSideBarType = 
{
    name : string, 
    icon : JSX.Element , 
    sub :  ItemSideBarSubType[]
}

export type ItemSideBarSubType = {
    name : string, 
    icon : JSX.Element, 
    link : string,
    api : ApiTypeCall
}

interface SidebarProps extends React.HTMLProps<HTMLDivElement> {items? : ItemSideBarType[] }

function Sidebar({...props} : SidebarProps) {
    const admin = useAdmin()
    const [open, setOpen] = useState('')
    return ( <section {...props} className={cn('flex flex-col gap-4 bg-admin/50Z md:w-[300px] w-[50px]  p-2  md:p-5 border-r  shadow-sm ',props.className, )}>
                <div onClick={() => admin.setAdminType('dashboard')} id={'Header'} className={`flex flex-row gap-2 items-center p-2 md:bg-admin bg-green-400  rounded-md shadow-md hover:cursor-pointer  ${admin.adminType == "dashboard" && 'scale-110'}`} ><Home className="stroke-1 w-4 h-4 "></Home><span className="hidden md:block" >Dashbord</span></div>
                {props.items?.map((item) => {
                    return(
                        <div key={item.name}>
                            <div onClick={() => {item.name != open ? setOpen(item.name) :   setOpen('')}}className="flex flex-row gap-2 items-center p-2 md:bg-admin bg-green-400  rounded-md md:shadow-none shadow-md hover:cursor-pointer" >
                                <div>{item.icon}</div>
                                <span  className="hidden md:block"  >
                                    {item.name}
                                </span>
                            </div>
                            <div className={open == item.name ? '' : 'hidden'}>
                                {
                                    item.sub.map((sub) =>
                                        (
                                            <div onClick={() => admin.setAdminType(sub.link)} key={sub.name} className={`flex flex-row  gap-2 items-center p-2 bg-green-200 md:ml-5 scale-90 rounded-md  shadow-md hover:cursor-pointer ${admin.adminType == sub.link ? 'bg-secondary shadow-md' : 'md:bg-admin md:shadow-none'} `}>
                                                <div>{sub.icon}</div>
                                                <span className="hidden md:block">{sub.name}</span>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        </div>
                  
                    )
                })}
            </section> );
}

export


default Sidebar;