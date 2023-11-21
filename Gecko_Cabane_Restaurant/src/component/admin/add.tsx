import { cn } from "@/lib/utils";
import { Info, XCircle } from "lucide-react";
import { Hover } from "../info-hover";
import { useEffect, useState } from "react";

export type ImageAddType = {
    name : string,
    type : string,
    file : File,
}

export type PreviewType = {
    name : string,
    src : string,
}

interface AddProps extends React.HTMLProps<HTMLDivElement> { type : string, onAdd : (value: ImageAddType[]) => void}

function Add({...props} : AddProps)  {
    const [images, setImages] = useState<ImageAddType[]>([])
    const [preview, setPreview] = useState<PreviewType[]>([])



    useEffect(() => {   
        if(props.type ){
            setImages([])
            setPreview([])
        }
    },[props.type])


    const onAdd = (files : FileList) => {
        if(props.disabled) return
        const imagesPreview : PreviewType[] = Array.from(files).map(file => {
            return {
                name: file.name,
                src: URL.createObjectURL(file),
            };
        });
        const imagesItem :ImageAddType[]  = Array.from(files).map(file => {
            return {
                name: file.name,
                type: props.type,
                file: file,
            };
        });
        setPreview(previtems => {
            const newItems = imagesPreview.filter(item => 
                !previtems.some(prevItem => prevItem.name === item.name)
            );
            return [...previtems].concat(newItems);
        });
        setImages(previtems => {
            const newItems = imagesItem.filter(item => 
                !previtems.some(prevItem => prevItem.name === item.name)
            );
            return [...previtems].concat(newItems);
        });

    }

    const onDelete = (id : string) => {
        setImages(prevItems => {
            return prevItems.filter(item => item.name !== id)
        });
        setPreview(prevItems => {
            return prevItems.filter(item => item.name !== id)
        });
    }

    useEffect(() => {
        props.onAdd(images)
    }, [images]);

    const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };
    
    const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (!props.disabled && event.dataTransfer.items[0]) {
            onAdd(event.dataTransfer.files);
        }
    };
    


    return (  
        <div {...props}
            onDragOver={onDragOver}
            onDrop={onDrop} 
            className={cn('border-2 rounded-md grid place-items-center gap-2 grid-flow-dense  md:min-h-[600px]',props.className)}>
             <h6 className="w-full flex gap-2 items-center p-2 h-10">Add <Hover title="Add images then save, drag and drop available"><Info className="h-4 w-4 stroke-1"></Info></Hover>{props.disabled && <span className="text-muted-foreground">Element is disabled</span>} </h6>
             <div className="border border-dashed rounded-md flex-grow min-h-[550px] grid grid-flow-dense grid-cols-2 place-items-center " >  
                {
                typeof images[0] != 'undefined'? 
                        images.map((image) =>
                            <div className="relative w-[116px] m-2 grid grid-flow-dense shadow-md rounded-md p-2" key={image.name}>
                            <img    src={preview?.find((iamge) => iamge.name == image.name)?.src} 
                                    alt="failed in api" 
                                    className={`w-[100px] h-[100px] rounded-md shadow-md`}/>
                                            <XCircle 
                                                onClick={() => onDelete(image.name)} 
                                                className="absolute top-0 right-0 w-4 h-4 bg-red-400 rounded-full transform delay-150 duration-300 origin-center hover:cursor-pointer hover:scale-125 translate-x-1/2 -translate-y-1/2">
                                            </XCircle>
                            <p className="text-center">{image.name}</p>
                            </div> 
                        )       
                    : 
                    <div className="flex flex-col col-span-2 gap-2 items-center justify-center h-full px-5">
                        <h6 className="text-muted-foreground text-center">Drag and drop your images here</h6>
                        <p className="text-muted-foreground">or browse</p>
                    </div>
                }
             </div>
             <label  className="rounded-md w-[100px]  flex items-center justify-center text-accent p-2 bg-primary ransform duration-300 delay-150 shadow-sm hover:cursor-pointer hover:scale-110">Browse <input key={props.type} type="file" accept="image/*" multiple  hidden onChange={(e) => onAdd(e.target.files!)} /></label>
        </div>
    );
}

export default Add;