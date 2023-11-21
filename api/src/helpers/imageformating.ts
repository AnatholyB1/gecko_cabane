import sharp from 'sharp'
import fs from 'fs'

type ImageType = 'smallAssets' | 'mediumAssets' | 'largeAssets' | 'laptopMenu' | 'laptopSpecial' | 'laptopDrink' | 'phoneMenu'  | 'phoneSpecial'  | 'phoneDrink'  
type size = { width : number, height : number }
type ObjectType = { type : ImageType, size : size }
const listObjectType : ObjectType[] = [ 
  { type : 'smallAssets', size : { width : 195, height : 144 } },
  {type : 'mediumAssets', size : { width : 310, height : 310 } },
  {type : 'largeAssets', size : { width : 390, height : 390 } },
  {type : 'laptopMenu' || 'laptopSpecial' || 'laptopDrink' , size : { width : 1400, height : 800 } },
  {type : 'phoneMenu'  || 'phoneSpecial'  || 'phoneDrink', size : { width : 300, height : 600 } },

]

export const formatImage = async (path: string ,type : ImageType, name : string, update : boolean = false) => {
    try {
      if(update) {fs.unlink(`public/${name}`, err => {if(err) console.log(err)})}
       const object = listObjectType.find((object) => object.type === type)
       await sharp(path)
          .resize(object?.size).toFile(`public/${name}`);

        fs.unlink(path, (err) => {
            if (err) {
                console.error(err)
            }
        } )
        return `public/${name}`;
      } catch (err) {
        console.log(err);
      }
}



