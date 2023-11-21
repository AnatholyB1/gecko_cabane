import express from 'express';

import authentification from './authentification';
import users from './user';
import email from './email';
import image from './image';
const router = express.Router();

export default (): express.Router => {
    image(router);
    email(router);
    authentification(router);
    users(router);
    return router;  
}