import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{ type: String, required: true, unique: true },
    authentification: {
        password: { type: String, required: true,select: false },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false },
    },
    admin: {
        type: Boolean,
        required: false,
    },
});

// Création du modèle User
export const UserModel = mongoose.model('User', UserSchema);


export const getUsers = () => UserModel.find(); ;
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({ 'authentification.sessionToken': sessionToken });
export const createUser =  (values: Record<string, any>) => new UserModel(values).save().then((User) => User.toObject());
//
export const getUserById =  (id: string) =>  UserModel.findById(  id ) ;
export const deleteUserById =  (id: string) => UserModel.findByIdAndDelete( {_id : id} );
export const updateUserById = (id:string, values:Record<string, any>) => UserModel.findByIdAndUpdate( id, values, { new: true } ).then((User) => User?.toObject());


