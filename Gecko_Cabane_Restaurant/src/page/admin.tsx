import AdminComponent from "@/component/adminCompo";
import Login from "@/component/login";
import Layer from "@/layer";
import {  Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import {useCookies, } from "react-cookie"
import axios from 'axios';
import { useToast } from "@/components/ui/use-toast";


function Admin() {
    const [cookie, setCookie] = useCookies(['sessionToken']);
    const [admin, setAdmin] = useState(false)
    const [loading, setLoading] = useState(true)
    const {toast} = useToast()

    const testLogin = async () => {
        try {
            const res = await axios.get('https://gecko-api-mbde.onrender.com/auth/isLoggedasAdmin', { withCredentials: true })
            res.status === 200 && toast({title : 'You are now logged in 🎉', description : 'welcolme ' + res.data.name});
            setAdmin(true)
            setLoading(false)
            
        } catch (error : any) {
            switch(error.response.status) {
                case 401:
                    try{
                        const response = await axios.get('https://gecko-api-mbde.onrender.com/auth/refreshtoken', { withCredentials: true })
                        setCookie('sessionToken', response.data.authentification.sessionToken, {path : '/'})
                        response.status === 200 && toast({title : 'You are now logged in 🎉', description : 'welcolme' + response.data.name});
                        setLoading(false)
                    }catch(error : any) {
                        switch(error.response.status) {
                            case 403 :
                                toast({title : 'You are not logged in or dosent have the rights', description : 'Please try login later'})
                                setLoading(false)
                                break;
                            case 400 :
                                toast({title : 'There is a problem on server side', description : 'Please try again later'})
                                setLoading(false)
                                break;
                        }
                    }
                    break;
                case 400 :
                    toast({title : 'There is a problem on server side', description : 'Please try again later'})
                    setLoading(false)
                    break;
            }
        }
       
    }

    useEffect(() => {
        testLogin()
    }, [cookie])


    return ( 
        <Layer>
            <section className="grid place-items-center grid-flow-row   py-[5rem] w-full">
                {loading ?    <Loader2 className="w-6 h-6 stroke-2 animate-spin" />  :    (admin == false ? <Login></Login> : <AdminComponent></AdminComponent>) }
            </section>
        </Layer>
     );
}

export default Admin;