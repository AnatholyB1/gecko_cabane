import Info from "@/component/basic-info"
import FormComponent from "@/component/form"
import Layer from "@/layer"


export default function Contact() {
    return <Layer>
                <section className="grid place-items-center grid-flow-row xl:grid-flow-col  bg-white py-[5rem] w-full h-auto " >
                    <Info ></Info>
                    <FormComponent ></FormComponent>
                </section>
            </Layer>
}