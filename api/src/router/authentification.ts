import express from 'express';

import { register, login, isLogged, logout, refreshSessionToken } from '../controllers/authentification';
import { isAdmin } from '../middlewares/auth';

export default (router : express.Router) => {
    router.post('/auth/register', register);
    router.post('/auth/login', login);
    router.get('/auth/isLoggedasAdmin',isAdmin , isLogged )
    router.get('/auth/isLogged', isLogged);
    router.get('/auth/logout', logout);
    router.get('/auth/refreshtoken', refreshSessionToken);
    router.get('/', (req, res) => res.send('Hello World!'));
};