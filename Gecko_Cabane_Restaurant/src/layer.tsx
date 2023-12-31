import Header from "@/static/header";
import Footer from "@/static/footer";
import { cn } from "./lib/utils";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Layer({children,className, menu = false}: {children? :React.ReactNode, className ?: string, menu ?: boolean}) {
    const nav = useNavigate()
    useEffect(() => {
        const cgu = localStorage.getItem('cgu')
        if(cgu != 'true')
        {
                nav('/cgu')

        }
    },[localStorage.getItem('cgu')]   )
    return(
        <div className={cn(className,"grid drid-flow-row place-items-center w-screen h-screen overflow-y-auto overflow-x-hidden")}>
            <Header menu={menu}/>
            {children}
            <Footer menu={menu}/>
        </div>
    )
}