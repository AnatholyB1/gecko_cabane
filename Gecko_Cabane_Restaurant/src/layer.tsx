import Header from "@/static/header";
import Footer from "@/static/footer";

export default function Layer({children}: {children? :React.ReactNode}) {
    return(
        <div className="flex flex-col gap-2 align-center w-screen h-screen">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}