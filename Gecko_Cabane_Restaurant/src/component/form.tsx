import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import Separator from "@/component/separator";
import axios from "axios";
import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import sending from "../assets/sending.json"
import success from "../assets/succes.json"
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  email: z.string().min(10, {
    message: "please enter mail",
  }),
})


function FormComponent({className} : {className?: string}) {
    const {toast} = useToast()
    const [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          firstName: "",
          lastName: "",
          message: "",
          email: "",
        },
      })
     
      function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true);
          axios.post("/api/email/send", values)
            .then(() => {
              toast({title: "Message sent ", description: "We will contact you as soon as possible " + values.firstName, action :<Player className="w-10 h-10 fill-animate" autoplay={true} src={success}/>});
              setLoading(false);
            })
            .catch(error => {
              console.error(error);
              toast({variant: "destructive",title: "Error", description: "An error occured, please try again later"})
            })
            .finally(() => {
              
            });
        }
        
      

        return(
            <section className={cn( className, 'grid grid-flow-row   place-items-center   text-center  md:text-start gap-5 py-[5rem] px-5 w-full h-full')}>
                <h2 className="max-w-[500px] w-full h-auto transition-font-size home-info-title text-center md:w-[50rem] px-5 text-xl md:text-4xl max-h-[40px]">CONTACT US</h2>
                <p className="text-muted-foreground italic">reservation only by phone</p>
                <Separator></Separator>
                    { !loading ?<Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full h-full flex flex-col items-center justify-center max-w-[300px] ">
                    <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem  className="w-full">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                            <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem  className="w-full">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem  className="w-full">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="exemple@gmail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem  className="w-full">
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Your message..." {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button id="submit" type="submit">Submit</Button>
                </form>
                </Form> : <Player autoplay={true} className="fill-animate"  loop src={sending}></Player>}
            </section>
        )
    
}

export default FormComponent;