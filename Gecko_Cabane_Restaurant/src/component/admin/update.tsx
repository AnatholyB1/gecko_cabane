import { cn } from "@/lib/utils";
import axios from "axios";
import { Info, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import {useCookies} from "react-cookie";
import { Hover } from "../info-hover";
import { EditFile, ImageUpdateType } from "./edit-file";


interface UpadteProps extends React.HTMLProps<HTMLDivElement> {api : string, onUpdate : (value: ImageUpdateType[]) => void}

function Update({...props} : UpadteProps) {
    const cookie = useCookies(['sessionToken'])
    const [images, setImages] = useState<ImageUpdateType[] >()


    useEffect(() => {
        if(props.api)
        {
            axios.get(`https://gecko-api-mbde.onrender.com/image/type/${props.api}`, {
                headers: {
                    Authorization: `Bearer ${cookie}`
                }
            }).then(response => {
                setImages(response.data);
        
            });
        }
    },[props.api]) 
    


    useEffect(() => {
        props.onUpdate(images?.filter((item) => typeof item.file != 'string' )!)

    }, [images]);

    const updateImage = (image : ImageUpdateType) => {
        setImages(prevItems => {
            return prevItems?.map(item => item._id == image._id ? image : item)
        });
    }


    return ( 
        <div {...props} className={cn('border-2 rounded-md grid grid-flow-dense ',props.className)} >
            <h6 className="flex gap-2 items-center p-2 ">Update <Hover title="Select the image you want to update then save"><Info className="h-4 w-4 stroke-1"></Info></Hover>{props.disabled && <span className="text-muted-foreground">Name changes are disabled</span>} </h6>
            <div className="border rounded-md grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 grid-rows-auto">
            {
                typeof images != 'undefined'? 
                    images[0] ? 
                        images.map((image) =>
                            <EditFile disabled={props.disabled} key={image._id} item={image} onChange={(value) => updateImage(value)} >
                                <div  className="relative w-[116px] m-2 grid grid-flow-dense shadow-md rounded-md p-2 transform delay-150 duration-300 hover:scale-110 hover:cursor-pointer" >
                                <img    src={typeof image.file != 'string' ? URL.createObjectURL(image.file) : `https://gecko-api-mbde.onrender.com/${image.file}` } 
                                        alt="failed in api" 
                                        className={`w-[100px] h-[100px] rounded-md shadow-md `}/>
                                <p className="text-center">{image.name}</p>
                                </div> 
                            </EditFile>
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

export default Update;