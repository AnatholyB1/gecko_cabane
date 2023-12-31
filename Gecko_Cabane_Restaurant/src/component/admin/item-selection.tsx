
import { useAdmin } from "@/Provider/admin-provider";
import { cn } from "@/lib/utils";
import { ItemsListSidebar } from "./data";
import { useEffect, useState } from "react";
import { ItemSideBarSubType } from "./sidebar";
import Preview from "./preview";
import Add, { ImageAddType } from "./add";
import Update from "./update";
import { Button } from "@/components/ui/button";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ImageUpdateType } from "./edit-file";
import axios from 'axios';
import {useToast} from "@/components/ui/use-toast";
import { Player } from "@lottiefiles/react-lottie-player";
import success from "@/assets/succes.json";
import { Loader2 } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"



// Définir le schéma du formulaire
const formSchema = z.object({
  add: z.array(z.object({
    name: z.string(),
    type: z.string(),
    file: z.instanceof(File),
  })).optional(),
  preview: z.array(z.string()).optional(),
  update: z.array(z.object({
    name: z.string(),
    type: z.string(),
    file: z.instanceof(File),
    _id: z.string()
  }).optional()),
});


interface ItemSelectionProps extends React.HTMLProps<HTMLDivElement> { }


function ItemSelection({...props} : ItemSelectionProps) {
    const {adminType} = useAdmin()
    const [item, setItem] = useState<ItemSideBarSubType>()
    const {toast} = useToast()  
    const [loading, setLoading] = useState(false)
    const [ page , setPage] = useState< 'add' | 'preview' | 'update'>('add');
    const { setValue, handleSubmit, reset } = useForm( { 
        resolver: zodResolver(formSchema),
        defaultValues: {
            add: [] as ImageAddType[] ,
            preview: [] as string[],
            update: [] as ImageUpdateType[],
        },
    });

    const onSubmit = (data : { add : ImageAddType[], preview : string[], update : ImageUpdateType[]}) => {
        const { add, preview, update } = data;
          // Créer un tableau de promesses pour chaque requête

        // Définir les fonctions pour chaque type de requête
        const addRequest = async (item: ImageAddType) => {
            setLoading(true);
            const formData = new FormData();
            Object.keys(item).forEach(key => formData.append(key, item[key as keyof ImageAddType]));
          
            const response = await axios.post('/api/image/create', formData, { 
              withCredentials: true,
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
          
            return response.data;
          }

        const previewRequest = async (item: string) => {
            // Remplacer par votre URL et vos paramètres
            const response = await axios.delete(`/api/image/${item}`,{ withCredentials: true });
            return response.data;
        }
        
        const updateRequest = async (item: ImageUpdateType) => {
        const formData = new FormData();
        Object.keys(item).forEach(key => {if(!preview.find((sub) => sub == item._id)){formData.append(key, item[key as keyof ImageUpdateType])}});

        const response = await axios.put(`/api/image/${item._id}`, formData, { 
            withCredentials: true,
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        });

        return response.data;
        }
                
        const promises = [
            ...add.map(item => addRequest(item)),
            ...preview.map(item => previewRequest(item)),
            ...update.map(item => updateRequest(item)),
        ];

        // Utiliser une fonction asynchrone pour gérer les promesses
        const handlePromises = async () => {
            const results = await Promise.all(promises);
            if(results)
            {
                reset();
                setLoading(false);
                toast({title: "Success", description: "All changes have been saved", action :<Player className="w-10 h-10 fill-animate" autoplay={true} src={success}/>});
            }else{
                setLoading(false);
                toast({variant: "destructive",title: "Error", description: "An error occured, please try again later"})
            }
        }

        handlePromises();
    }



    useEffect(() => {
        if(adminType != 'dashboard')
        {
            setItem(ItemsListSidebar.find((item) => item.sub.find((sub) => sub.link == adminType  ))?.sub.find((sub) => sub.link == adminType) )
        }
    },[adminType])

    return ( 
        <section {...props} className={ cn(' ',props.className)} >
            {adminType == 'dashboard' ?
                <div className="flex flex-col gap-2 md:p-5 p-2">
                    <h5 className="md:p-2 p-1   shadow-md rounded-md " >Dashbord</h5>
                    <div>

                    </div>
                </div>
                :
                <form className="flex flex-col gap-2 md:p-5 p-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="md:p-2 p-1   shadow-md rounded-md flex items-center justify-between"><h5 >{item?.name }</h5><Button >Save</Button></div>
                    
                        {
                            loading ?
                            <div className="flex items-center justify-center">
                                <Loader2 className="h-4 w-4 animate-spin p-2"/>
                            </div>

                            :
                            <div className="relative flex-grow">
                                    <NavigationMenu className="py-2">
                                        <NavigationMenuList>
                                            <NavigationMenuItem>
                                                <Button  variant={page == 'add' ? 'default'  : 'ghost' } type='button' onClick={() => setPage('add')}>Add</Button>
                                            </NavigationMenuItem>
                                            <NavigationMenuItem>
                                                <Button variant={page == 'preview' ? 'default'  : 'ghost' }  type='button' onClick={() => setPage('preview')}>View and Delete</Button>
                                            </NavigationMenuItem>
                                            <NavigationMenuItem>
                                                <Button variant={page == 'update' ? 'default'  : 'ghost' }  type='button' onClick={() => setPage('update')}>Update</Button>
                                            </NavigationMenuItem>
                                        </NavigationMenuList>
                                    </NavigationMenu>
                                    {page && (() => {
                                        switch (page)
                                        {
                                            case 'add':
                                                return(

                                                    <Add type={item?.api!} onAdd={(e) => setValue('add', e)} className="p-2 flex-grow" ></Add>
                                                )
                                            case 'preview':
                                                return(
                                                    <Preview disabled={item?.name.includes('Assets')}  api={item?.api!} onDelete={(e) => setValue('preview', e)} className="p-2 flex-grow"></Preview>
                                               )
                                            case 'update':
                                                return(
                                                    <Update disabled={item?.name.includes('Assets')}  api={item?.api!} onUpdate={(e) => setValue('update',e)} className="p-2 flex-grow" ></Update>
                                                )
                                        }})()
            
                                    }      
                            </div>
                            
                        }       
                </form> 
            }         
        </section>
     );
}

export default ItemSelection;