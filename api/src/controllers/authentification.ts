import express from 'express';
import { getUserByEmail, createUser, getUserBySessionToken } from '../db/user';
import {random, authentification} from '../helpers/auth';

//create a login function with errors handling 
export const login = async (req: express.Request, res: express.Response) => {
    try{
        const { email, password } = req.body;
        if(!email || !password){
            return res.sendStatus(400);
        }
        const user = await getUserByEmail(email).select('+authentification.salt +authentification.password');

        if(!user || !user.authentification || !user.authentification.salt || !user.authentification.password){
            return res.sendStatus(401);
        }

        if(user.authentification.password !== authentification(user.authentification.salt, password)){
            return res.sendStatus(403);
        }
        const salt = random();
        user.authentification.sessionToken = authentification(salt, user._id.toString());

        await user.save();

        res.cookie('sessionToken', user.authentification.sessionToken,  { httpOnly: true, sameSite: 'none', secure: true, });
        return res.status(200).json(user).end();
    } catch(err){
        console.error(err);
        return res.sendStatus(400);
    }
}

export const register = async (req: express.Request, res: express.Response) => {
    try{
        const{ name, email, password } = req.body;
        if(!name || !email || !password){
            return res.sendStatus(400);
        }

        const extingUser = await getUserByEmail(email);

        if(extingUser){
            return res.sendStatus(409);
        }

        const salt = random();
        const user = await createUser(
            {
                email,
                name, 
                authentification :{
                    salt,
                    password : authentification(salt,password)},
                    
        });
        res.cookie('sessionToken', user.authentification!.sessionToken, { httpOnly: true, sameSite: 'none', secure: true, });
        return res.status(200).json(user).end();
    } catch(err){
        console.error(err);
        return res.sendStatus(400);
    }
}

export const isLogged = async (req: express.Request, res: express.Response) => {
    try{
        const sessionToken = req.cookies['sessionToken'];
        if(!sessionToken){
            return res.sendStatus(403);
        }
        const user = await getUserBySessionToken(sessionToken);
        if(!user){
            return res.sendStatus(403);
        }
        return res.status(200).json(user).end();
    } catch(err){
        console.error(err);
        return res.sendStatus(400);
    }
}


export const refreshSessionToken = async (req: express.Request, res: express.Response) => {
    try{
        const sessionToken = req.cookies['sessionToken'];
        if(!sessionToken){
            return res.sendStatus(403);
        }
        const user = await getUserBySessionToken(sessionToken);
        if(!user){
            return res.sendStatus(403);
        }
        const salt = random();
        user.authentification!.sessionToken = authentification(salt, user._id.toString());
        await user.save();
        res.cookie('sessionToken', user.authentification!.sessionToken, { httpOnly: true, sameSite: 'none',secure: true, });
        return res.status(200).json(user).end();
    } catch(err){
        console.error(err);
        return res.sendStatus(400);
    }
}

export const logout = async (req: express.Request, res: express.Response) => {
    try{
        const sessionToken = req.cookies['sessionToken'];
        if(!sessionToken){
            return res.sendStatus(403);
        }
        const user = await getUserBySessionToken(sessionToken);
        if(!user){
            return res.sendStatus(403);
        }
        user.authentification!.sessionToken = '';
        await user.save();
        res.clearCookie('sessionToken');
        return res.sendStatus(200);
    } catch(err){
        console.error(err);
        return res.sendStatus(400);
    }
}