import Header from "@/static/header";
import Footer from "@/static/footer";

export default function Layer({children}: {children :React.ReactNode}) {
    return(
        <div className="w-screen h-screen">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}