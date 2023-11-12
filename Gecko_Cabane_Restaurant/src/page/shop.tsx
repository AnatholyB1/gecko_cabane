import Layer from "@/layer"
import Lottie   from "lottie-react"
import Icon from '@/assets/wired-outline-298-coins.json'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
 
const formSchema = z.object({
  email: z.string().min(1 , {message : "please enter an email"}).max(50).email({message : "please enter a valid email"}),
  password: z.string().min(1 , {message : "please enter a password"}).max(100),
})



export default function Shop() {

   

    return <Layer>
                <section className="grid place-items-center grid-flow-row  bg-white py-[5rem] w-full h-auto " >
                    <h1 className="text-primary text-center text-2xl font-bold leading-10 transition-font-size duration-300 md:text-4xl">SHOP IN CUSTOMISATION!</h1>
                    <Lottie  className="w-full h-full max-w-[400px] max-h-[400px]" animationData={Icon}></Lottie>
                    <Login></Login>
                </section>
           </Layer>
}



function Login() {
    const { toast } = useToast()
    const [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      })
    

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoading(true);
        const response = await fetch('https://100.20.92.101:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        });
        form.reset()
        response.json().then((data) => {
            setLoading(false);
            toast({title : 'You are now logged in 🎉', description : 'welcolme' + data.usermail});
        });
    }

    return (
        <Form {...form}>
        <form  onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input type={'email'} placeholder="exemple@gmail.com" {...field} />
                </FormControl>
                <FormDescription>
                    Enter your email address.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                    <Input type={'password'}  placeholder="**********" {...field} />
                </FormControl>
                <FormDescription>
                    Enter your password.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <Button className="flex gap-2" type="submit">{loading ? <><Loader2 className="w-5 h-5 stroke-2 animate-spin"></Loader2><span>loading</span></> :'Submit'}</Button>
        </form>
        </Form>
    );
}




