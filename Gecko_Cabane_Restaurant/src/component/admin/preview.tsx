import { cn } from "@/lib/utils";
import axios from "axios";
import { Info, Loader2, PlusCircle, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import {useCookies} from "react-cookie";
import { Hover } from "../info-hover";




export type ImageTyping = {
    _id : string;
    file : string;
    name : string;
    type : string;
    _v: number;
}

interface PreviewProps extends React.HTMLProps<HTMLDivElement> { api : string, onDelete : (value : string[]) => void,} 

 

function  Preview ({...props} : PreviewProps) {
    const cookie = useCookies(['sessionToken'])
    const [images, setImages] = useState<ImageTyping[]>() 
    const [deletedItemsId, setItemsDeleted] = useState<string[]>([])

    useEffect(() => {
        if(props.api)
        {
            axios.get(`https://gecko-api-mbde.onrender.com/image/type/${props.api}`, {
                headers: {
                    Authorization: `Bearer ${cookie}`
                }
            }).then(response => {setImages(response.data)});
            setItemsDeleted([])
        }
    },[props.api]) 
    
    const onDelete = (id : string) => {
        if(props.disabled) return  
        setItemsDeleted(prevItems => {
            if(prevItems.find((item) => item == id))
            {
                return prevItems.filter(item => item !== id)
            }else{
                return [...prevItems, id]
            }
             
        });
    }


    useEffect(() => {
        props.onDelete(deletedItemsId)
    }, [deletedItemsId]);

    return ( 
        <div {...props} className={cn('border-2 rounded-md grid grid-flow-dense ',props.className)} >
            <h6 className="flex gap-2 items-center p-2 ">Preview <Hover title="delete unwanted images then save"><Info className="h-4 w-4 stroke-1"></Info></Hover>{props.disabled && <span className="text-muted-foreground">cannot delete assets, only view add and update</span>} </h6>
            <div className="border rounded-md grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 grid-rows-auto">
            {
                typeof images != 'undefined'? 
                    images[0] ? 
                        images.map((image) =>
                            <div className="relative w-[116px] m-2 grid grid-flow-dense shadow-md col-span-1 row-span-1 rounded-md p-2" key={image._id}>
                            <img    src={`https://gecko-api-mbde.onrender.com/${image?.file}`} 
                                    alt="failed in api" 
                                    className={`w-[100px] h-[100px] rounded-md shadow-md ${typeof deletedItemsId.find((id) => id === image._id) != 'undefined' && 'grayscale animate-delete-item'}`}/>
                                        {typeof deletedItemsId.find((id) => id === image._id) == 'undefined'  ? 

                                            <XCircle 
                                                onClick={() => onDelete(image._id)} 
                                                className="absolute top-0 right-0 w-4 h-4 bg-red-400 rounded-full transform delay-150 duration-300 origin-center hover:cursor-pointer hover:scale-125 translate-x-1/2 -translate-y-1/2">
                                            </XCircle>
                                            :
                                            <PlusCircle 
                                                onClick={() => onDelete(image._id)} 
                                                className="absolute top-0 right-0 w-4 h-4 bg-admin rounded-full transform delay-150 duration-300 origin-center hover:cursor-pointer hover:scale-125 translate-x-1/2 -translate-y-1/2">
                                            </PlusCircle>
                                        }
                            <p className="text-center">{image.name}</p>
                            </div> 
                        )
                        :
                        <p className="p-2">No images...</p>             
                    : 
                    <Loader2 className="h-4 w-4 animate-spin p-2">
                    </Loader2>
            }
            </div>
        </div>
     );
}

export default Preview;