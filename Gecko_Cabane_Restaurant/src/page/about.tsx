
import Card from "@/component/card"
import Separator from "@/component/separator"
import { Button } from "@/components/ui/button"
import Layer from "@/layer"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"


export default function About() {
    return <Layer>
            <section className="grid place-items-center grid-flow-row   py-[5rem] w-full">
                <Card  img='https://i0.wp.com/geckocabanerestaurant.com/wp-content/uploads/2019/08/body-clouds-early-morning-823694.jpg?fit=1920%2C1919&ssl=1' title="OUR MISSION" subTitle="“A healthy mind in a healthy body”"><p className="home-info-p">We are honored to present you our experience in thai food, unique dishes served in our restaurant only. Cooked with respect and natural goodness, without any Monosodium Glutamate (MSG), and sugar to prevent you from disease.</p></Card>
                <Separator></Separator>
                <Card img="/api/public/IMG_20231111_124317_952.jpg" title="Chef Jariya PAKLOW" orientation="left">
                    <div className="flex items-center justify-center gap-5 flex-col">
                        <p className="home-info-p">A life time experience in cooking skill, sharpened and accured by multiple encounters, at your entire services.</p>
                        <Button id="serviecs" className="m-6 flex gap-2 rounded-full transition delay-150 duration-300 hover:scale-110"><Link to="/services">MORE INFORMATION</Link><ChevronRight className="w-4 h-4 stokre-1"></ChevronRight></Button>
                    </div>
                </Card>
            </section>
        </Layer>
}