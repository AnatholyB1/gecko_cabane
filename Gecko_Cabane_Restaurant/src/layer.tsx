import Header from "@/static/header";
import Footer from "@/static/footer";

export default function Layer({children}: {children? :React.ReactNode}) {
    return(
        <div className="grid drid-flow-row place-items-center w-screen h-screen overflow-y-auto">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}