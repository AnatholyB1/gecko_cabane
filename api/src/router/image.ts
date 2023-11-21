import express from 'express';

import { createanImage, getentireImagesList, getanImageById, deleteanImageById, updateanImageById, getanImageByName, getallImagesByType } from '../controllers/image';
import {isAdmin} from '../middlewares/auth';
import {formatImage} from '../middlewares/image';

export default (router : express.Router) => {
    router.post('/image/create', isAdmin ,formatImage,createanImage);
    router.get('/image/list',  getentireImagesList);
    router.get('/image/:id', getanImageById);
    router.delete('/image/:id', isAdmin ,deleteanImageById);
    router.put('/image/:id', isAdmin,formatImage,updateanImageById);
    router.get('/image/name/:name', getanImageByName);
    router.get('/image/type/:type' ,getallImagesByType);
}