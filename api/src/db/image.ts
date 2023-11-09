import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    data: {
        type: File,
        required: true,
    },
});

// Création du modèle Image
export const ImageModel = mongoose.model('Image', ImageSchema);


export const getImagesList = async () => ImageModel.find(); 
export const getImageByName = async (name: string) =>  ImageModel.findOne({ name }); ;
export const putImage = async (values: Record<string, any>) => new ImageModel(values).save().then((image) => image.toObject());
export const deleteImageByName = async (name: string) => ImageModel.findOneAndDelete({ _name : name });
export const deleteImagesByNames = async (names: string[]) => ImageModel.deleteMany({ name: { $in: names } });
export const updateImageByName = async (name: string, values: Record<string, any>) => ImageModel.findOneAndUpdate({ name }, values, { new: true }).then((image) => image?.toObject());
//creqte every function already created in the files with ByName suffix for ById suffix
//
export const getImageById = async (id: string) =>  ImageModel.findById(  id ) ;
export const deleteImageById = async (id: string) => ImageModel.findByIdAndDelete( id );
export const deleteImagesByIds = async (ids: string[]) => ImageModel.deleteMany({ _id: { $in: ids } });
export const updateImageById =async (id:string, values:Record<string, any>) => ImageModel.findByIdAndUpdate( id, values, { new: true } ).then((image) => image?.toObject());


