import AdminComponent from "@/component/adminCompo";
import Login from "@/component/login";
import Layer from "@/layer";
import {useCookies} from "react-cookie"


function Admin() {
    const [cookie] = useCookies(['sessionToken']);
    

    return ( 
        <Layer>
            <section className="grid place-items-center grid-flow-row   py-[5rem] w-full">
                {!cookie ? <Login></Login> : <AdminComponent></AdminComponent>}
            </section>
        </Layer>
     );
}

export default Admin;