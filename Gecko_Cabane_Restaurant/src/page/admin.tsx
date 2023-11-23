import AdminComponent from "@/component/adminCompo";
import Login from "@/component/login";
import Layer from "@/layer";
import {  Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import {useCookies, } from "react-cookie"
import axios from 'axios';


function Admin() {
    const [cookie, setCookies] = useCookies(['sessionToken']);
    const [loading, setLoading] = useState(true)

    const testLogin = async () => {
        try {
            const res = await axios.post('https://gecko-api-mbde.onrender.com/auth/isLoggedasAdmin', { withCredentials: true })
            if(res) {
                console.log(res)
                setLoading(false)
            }else{
                setCookies('sessionToken', null)
                setLoading(false)
            }
        } catch (error) {
            try{
                const response = await axios.post('https://gecko-api-mbde.onrender.com/auth/refreshtoken', { withCredentials: true })
                if(response) {
                    console.log(response)
                    setLoading(false)
                }else{
                    setCookies('sessionToken', null)
                    setLoading(false)
                }
            }catch(err) {
                setCookies('sessionToken', null)
                setLoading(false)
            }
        }
       
    }

    useEffect(() => {
        testLogin()
    }, [])


    return ( 
        <Layer>
            <section className="grid place-items-center grid-flow-row   py-[5rem] w-full">
                {loading ?    <Loader2 className="w-6 h-6 stroke-2 animate-spin" />  :    (cookie != null ? <Login></Login> : <AdminComponent></AdminComponent>) }
            </section>
        </Layer>
     );
}

export default Admin;