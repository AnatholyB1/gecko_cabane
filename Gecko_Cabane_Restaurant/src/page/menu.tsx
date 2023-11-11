import Layer from "@/layer";
import OnCreation from "@/component/on-creation";

function Menu() {
    return ( <Layer menu>
        <section className="grid place-items-center grid-flow-row  bg-white py-[5rem] w-full service-page " >
            <h1 className="text-primary text-center text-2xl font-bold leading-10 transition-all duration-300 md:text-4xl hover:scale-150">WE'LL BE HERE SOON!</h1>
            <OnCreation></OnCreation>
        </section>
    </Layer>);
}

export default Menu;