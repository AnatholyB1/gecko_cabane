import express from 'express';

import { register, login, isLogged, logout, refreshSessionToken } from '../controllers/authentification';
import { isAdmin } from '../middlewares/auth';

export default (router : express.Router) => {
    router.post('/auth/register', register);
    router.post('/auth/login', login);
    router.post('/auth/isLoggedasAdmin',isAdmin , isLogged )
    router.post('/auth/isLogged', isLogged);
    router.post('/auth/logout', logout);
    router.post('/auth/refreshtoken', refreshSessionToken);
    router.get('/', (req, res) => res.send('Hello World!'));
};