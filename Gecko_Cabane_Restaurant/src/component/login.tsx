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

import {useCookies} from "react-cookie"
 
const formSchema = z.object({
  email: z.string().min(1 , {message : "please enter an email"}).max(50).email({message : "please enter a valid email"}),
  password: z.string().min(1 , {message : "please enter a password"}).max(100),
})

export default function Login() {
    const { toast } = useToast()
    const [loading, setLoading] = useState(false)
    const [cookie,setCookie] = useCookies(['sessionToken']);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      })
    
    cookie
    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoading(true);
        const response = await fetch('https://gecko-api-mbde.onrender.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        });
        form.reset();
        setLoading(false);
        response.status === 401 && toast({title : 'Your information are not right', description : 'Please try again'})
        response.status === 403 && toast({title : "Oh seems you're not authorized to be there", description : 'see you soon'}) 
        response.status === 502 && toast({title : 'Serveur error', description : 'Please contact the support'})
        response.status === 408 && toast({title : 'Connection Problem', description : 'Please contact the support or check your connection'})
        response.json().then((data : any) => {
            setCookie('sessionToken', data.authentification.sessionToken, {path : '/'})
            toast({title : 'You are now logged in 🎉', description : 'welcolme' + data.name});
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


