import express from 'express';

import {getAllUsers, deleteUser, updateUser} from '../controllers/users';
import {isAuthenticated, isOwner} from '../middlewares/auth';

export default (router : express.Router) => {
    router.get('/users', isAuthenticated,getAllUsers);
    router.delete('/users/:id', isAuthenticated,deleteUser);
    router.put('/users/:id', isAuthenticated,updateUser);
}  