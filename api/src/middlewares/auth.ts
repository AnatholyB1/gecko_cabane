import express from 'express';
import {get, merge} from 'lodash';

import {getUserBySessionToken} from '../db/user';


export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
        const sessionToken = req.cookies['sessionToken']
        if(!sessionToken){
            return res.sendStatus(403);
        }
        const user = await getUserBySessionToken(sessionToken);
        if(!user){
            return res.sendStatus(401);
        }
        merge(req, {identity :user});
        return next();
    } catch(err){
        console.error(err);
        return res.sendStatus(400);
    }
}


export const isOwner = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
        const {paramsId} = req.params;
        const userId = get(req, 'identity._id');
        const userIdString = String(userId);

        if(!userIdString){
            console.error('userId is not a string', userId);
            return res.sendStatus(403);
        }

        if(userIdString !== paramsId){
            console.error('userId is not the same as paramsId', userIdString, paramsId);
            return res.sendStatus(403);
        }
        next();
    } catch(err){
        console.error(err);
        return res.sendStatus(400);
    }
}


export const isValidEmail = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { email} = req.body;
    const regex = /\S+@\S+\.\S+/;
    try{
        const response = regex.test(email)
        if(response === false){
            return res.send('Email is not valid');
        }
        return next();
    } catch(err){
        console.error(err);
        return res.sendStatus(400);
    }

}

export const isAdmin = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
        const sessionToken = req.cookies['sessionToken']
        if(!sessionToken){
            return res.sendStatus(403);
        }
        const user = await getUserBySessionToken(sessionToken);
        if(!user){
            return res.sendStatus(401);
        }
        if (user.admin != true) {
            return res.sendStatus(401);
        }
        merge(req, {identity :user});
        return next();
    } catch(err){
        console.error(err);
        return res.sendStatus(400);
    }
}