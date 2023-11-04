import Comment from "@/component/coment"
import Gallery from "@/component/gallery"
import HomeInfo from "@/component/home-info"
import Lietmotive from "@/component/lietmotiv"
import NewServices from "@/component/new-services"
import Layer from "@/layer"

export default function Home () {
 

    return (
    
        <Layer>
            <section className="grid  grid-flow-row w-full h-auto">
                <Lietmotive  className="py-4"></Lietmotive>
                <HomeInfo  className=" py-4"></HomeInfo>
                <NewServices  className=" py-4"></NewServices>
                <Comment  className=" py-4"></Comment>
                <Gallery  className=" py-4"></Gallery>
            </section>     
        </Layer>
    )
}