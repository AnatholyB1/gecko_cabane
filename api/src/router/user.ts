import express from 'express';

import {getAllUsers, deleteUser, updateUser} from '../controllers/users';
import {isAdmin, isAuthenticated, isOwner} from '../middlewares/auth';

export default (router : express.Router) => {
    /**
     * @swagger
     * /users:
     *   get:
     *    tags:
     *      - users
     *    summary: Get the list of all users.
     *    description: Endpoint to get the list of all users.
     *    parameters:
     *      - in: cookie
     *        name: sessionToken
     *        type: string
     *        required: true
     *    responses:
     *      200:
     *       description: List of users retrieved successfully
     *      400:
     *       description: Bad request, invalid input
     *      401:
     *       description: Unauthorized
     */
    router.get('/users', isAuthenticated,getAllUsers);

    /**
     * @swagger
     * /users/{id}:
     *   delete:
     *     summary: delete an user as admin only
     *     description: Endpoint to delete a new user.
     *     tags:
     *       - users
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *       - in: cookie
     *         name: sessionToken
     *         type: string
     *         required: true
     *     responses:
     *       200:
     *         description: User deleted successfully
     *       400:
     *         description: Bad request, invalid input
     *       401:
     *          description: Unauthorized
     *       403:
     *          description: Forbidden
     *       500:
     *         description: Internal server error
     */
    router.delete('/users/:id', isAuthenticated, isAdmin,deleteUser);

    /**
     * @swagger
     * /users/{id}:
     *   put:
     *     summary: update an user as admin only
     *     description: Endpoint to update a new user.
     *     tags:
     *       - users
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *       - in: cookie
     *         name: sessionToken
     *         type: string
     *         required: true
     *     requestBody:
     *       description: User object
     *       required: true
     *       content:
     *        application/json:
     *          schema:
     *              type: object
     *              properties:
     *                  name:
     *                      type: string
     *                  email:
     *                      type: string
     *                  password:
     *                      type: string 
     *     responses:
     *       200:
     *         description: User updated successfully
     *       400:
     *         description: Bad request, invalid input
     *       401:
     *          description: Unauthorized
     *       403:
     *          description: Forbidden
     *       500:
     *         description: Internal server error
     */
    router.put('/users/:id', isAuthenticated,updateUser);
}