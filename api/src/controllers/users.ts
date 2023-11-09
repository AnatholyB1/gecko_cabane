import express from 'express';

import {getUsers, deleteUserById, updateUserById} from '../db/user';

export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try{
        const users = await getUsers();
        return res.status(200).json(users).end();
    } catch(err){
        console.error(err);
        return res.sendStatus(400);
    }
}

export const deleteUser = async (req: express.Request, res: express.Response) => {
    try{
        const {id} = req.params;
        const deleteUser = await deleteUserById(id)

        return res.json(deleteUser).status(200).end();
    } catch(err){
        console.error(err);
        return res.sendStatus(400);
    }
}


export const updateUser = async (req: express.Request, res: express.Response) => {
    try{
        const {id} = req.params;
        const {name} = req.body;
        if(!name){
            return res.sendStatus(400);
        }
        if(!id){
            return res.sendStatus(400);
        }
        const updateUser = await updateUserById(id, {name});
        return res.json(updateUser).status(200).end();
    } catch(err){
        console.error(err);
        return res.sendStatus(400);
    }
}