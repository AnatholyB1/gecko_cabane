import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ComponentProps, useEffect, useState } from "react"
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const ImageAddTypeSchema = z.object({
    name: z.string().refine(name => /\.(jpe?g|png)$/i.test(name), {
        message: "Name must end with .jpeg, .jpg, or .png",
      }),
    file: z.instanceof(File),
  });

export type ImageUpdateType = {
    name : string,
    type : string,
    file : string | File,
    _id : string
}

interface EditFileProps extends ComponentProps<typeof Dialog> { item : ImageUpdateType, disabled : boolean | undefined , onChange? : (image : ImageUpdateType) => void}

export function EditFile({...props} : EditFileProps) {
    const [file, setFile] = useState<File>()
    const [preview, setPreview] = useState<string>()


    function urlToFile(url : string, filename : string , mimeType : string) {
        fetch(url).then((res) => {
                res.arrayBuffer().then((buf) => {
                    setFile(new File([buf], filename, {type: mimeType}));
                    setPreview(URL.createObjectURL(new File([buf], filename, {type: mimeType})))
                })
            }
        );
    }

    useEffect(() => {
        if( typeof props.item.file == "string")
        {
            urlToFile("https://gecko-api-mbde.onrender.com/" + props.item.file, props.item.name, 'image/*')
        }else if(props.item.file instanceof File){
            setFile(props.item.file)
            setPreview(URL.createObjectURL(props.item.file))
        }
    },[props.item])


    const { register, handleSubmit, setValue, formState, }  = useForm({
        resolver: zodResolver(ImageAddTypeSchema),
        defaultValues: {
            name : props.item.name,
            file : file!,
        },
      });



    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setValue('file', file);  // Update the 'file' field in the form
            setPreview(URL.createObjectURL(file))
            if(!props.disabled)
            {
              setValue('name', file.name)
            }
            
        }
    };
    
    
      const onSubmit = (data: {name : string, file : string | File}) => {
        const item = {
            ...data,
            _id : props.item._id,
            type : props.item.type,
        }
        if (props.onChange) {
            props.onChange(item);
          }
      };

  return (
    <Dialog {...props}   >
      <DialogTrigger asChild>
            {props.children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit File</DialogTitle>
          <DialogDescription>
            Make changes to your file by changing the name of the image
          </DialogDescription>
        </DialogHeader>
        <form  className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                Name
                </Label>
                <Input disabled={props.disabled} id="name"  type="text" defaultValue={props.item.name} className="col-span-3"  {...register('name')} />
                {formState.errors.name && <p className="text-red-400 col-span-4 place-self-end ">{formState.errors.name.message}</p>}
            </div>
            <Label htmlFor="file" className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right">
                File
                </Label>
                <img src={preview}  alt="no file"  className="col-span-3"/>
                <input  hidden id="file" type="file"  accept="image/*"  {...register('file')} onChange={onFileChange} />
            </Label>

          <Button type="button" onClick={handleSubmit(onSubmit)}>Save changes</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
