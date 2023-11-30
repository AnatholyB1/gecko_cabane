import mongoose from "mongoose";


const ImageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    file: {
        type:String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});

// Création du modèle Image
export const ImageModel = mongoose.model('Image', ImageSchema);


export const getImagesList = async () => ImageModel.find(); 
export const getImagesByType = async (type : string) => ImageModel.find({ type });
export const getImageByName = async (name: string) =>  ImageModel.findOne({ name }); ;
export const createImage = async (values: Record<string, any>) => new ImageModel(values).save().then((image) => image.toObject());
//creqte every function already created in the files with ByName suffix for ById suffix
//
export const getImageById = async (id: string) =>  ImageModel.findById(  id ) ;
export const deleteImageById = async (id: string) => ImageModel.findByIdAndDelete( id )
export const updateImageById =async (id:string, values:Record<string, any>) => ImageModel.findByIdAndUpdate( id, values, { new: true } ).then((image) => image?.toObject());


