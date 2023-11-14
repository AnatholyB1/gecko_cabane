import express from 'express';

import authentification from './authentification';
import users from './user';
import email from './email';
const router = express.Router();

export default (): express.Router => {
    email(router);
    authentification(router);
    users(router);
    return router;  
}