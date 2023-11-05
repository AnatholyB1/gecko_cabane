import Layer from "@/layer"
import Lottie   from "lottie-react"
import Icon from '@/assets/wired-outline-298-coins.json'
export default function Shop() {

  

    return <Layer>
                <section className="grid place-items-center grid-flow-row  bg-white py-[5rem] w-full h-auto " >
                    <h1 className="text-primary text-center text-2xl font-bold leading-10 transition-font-size duration-300 md:text-4xl">SHOP IN CUSTOMISATION!</h1>
                    <Lottie  className="w-full h-full" animationData={Icon}></Lottie>
                </section>
           </Layer>
}