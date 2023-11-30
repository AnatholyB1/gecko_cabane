import express from 'express';
import fs from 'fs';


import {getImageById, deleteImageById, updateImageById,getImageByName, getImagesByType, getImagesList, createImage } from '../db/image';
import {formatImage } from '../helpers/imageformating';
import path from 'path';


// Function to get an image by its ID
export const getanImageById = async (req: express.Request, res: express.Response) => {
    try {
        // Code to get the image by its ID
        const {id} = req.params;
        if (!id) return res.sendStatus(400);
        const image = await getImageById(id);
        if (!image) return res.sendStatus(404);
        return res.status(200).json(image).end();
    

    } catch (error) {
       console.log(error);
       return res.sendStatus(400);
    }
}

// Function to delete an image by its ID
export const deleteanImageById = async (req: express.Request, res: express.Response) => {
    try {
        // Code to delete the image by its ID
        const {id} = req.params;
        if (!id) return res.sendStatus(400);


        const imagetodelete = await getImageById(id);
        if (!imagetodelete) return res.sendStatus(404);

        const filePath = path.join(__dirname, '..', imagetodelete.file);
        // Delete the file
        try {
            fs.unlinkSync(filePath);
        } catch (err) {
            console.error(`Error deleting file: ${err}`);
            return res.sendStatus(500);
        }


        const deletedImage = await deleteImageById(id);
        if (!deletedImage) return res.sendStatus(404);
        
        return res.status(200).json(deletedImage).end();
    } catch (error) {
        // Code to handle errors
        console.log(error);
       return res.sendStatus(400);
    }
}

// Function to update an image by its ID
export const updateanImageById = async (req: express.Request, res: express.Response) => {
    try {
        const {id} = req.params;
        if (!id) return res.sendStatus(400);
        const file = req.file;
        const {name, type} = req.body;
        if (!name || !file || !type) return res.sendStatus(400);
        const formattedImage = await formatImage(file.path,type, name);
        const updatedImage = await updateImageById(id, {name, file: formattedImage, type});
        if (!updatedImage) return res.sendStatus(404);
        return res.status(200).json(updatedImage).end();
        // Code to update the image by its ID
    } catch (error) {
        // Code to handle errors
        console.log(error);
       return res.sendStatus(400);
    }
}

// Function to get an image by its name
export const getanImageByName = async (req: express.Request, res: express.Response) => {
    try {
        const {name} = req.params;
        if (!name) return res.sendStatus(400);
        const image = await getImageByName(name);
        return res.status(200).json(image).end();
        // Code to get the image by its name
    } catch (error) {
        // Code to handle errors
        console.log(error);
       return res.sendStatus(400);
    }
}

// Function to get images by type
export const getallImagesByType = async (req: express.Request, res: express.Response) => {
    try {
        const {type} = req.params;
        if (!type) return res.sendStatus(400);
        // Code to get images by type
        const images = await getImagesByType(type);
        return res.status(200).json(images).end();
    } catch (error) {
        // Code to handle errors
        console.log(error);
       return res.sendStatus(400);
    }
}

// Function to get the list of all images
export const getentireImagesList = async (req: express.Request, res: express.Response) => {
    try {
        // Code to get the list of all images
        const images = await getImagesList();
        return res.status(200).json(images).end();
    } catch (error) {
        // Code to handle errors
        console.log(error);
       return res.sendStatus(400);
    }
}

// Function to create a new image
export const createanImage = async (req: express.Request, res: express.Response) => {
    try {
        // Code to create a new image
        const file = req.file;
        const {name, type } = req.body;
        if (!name || !file || !type) return res.sendStatus(400);
        const formattedImage = await formatImage(file.path,type, name);
        const image = await createImage({name, file: formattedImage, type});
        if (!image) return res.sendStatus(400);
        return res.status(200).json(image).end();
        // Code to continue processing the image
        // ...
    } catch (error) {
        // Code to handle errors
        console.log(error);
       return res.sendStatus(400);
    }
}
