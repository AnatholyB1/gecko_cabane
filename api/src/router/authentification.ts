import express from 'express';

import { register, login, isLogged, logout, refreshSessionToken } from '../controllers/authentification';
import { isAdmin } from '../middlewares/auth';

export default (router : express.Router) => {
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Endpoint to register a new user.
 *     tags:
 *       - authentification
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Bad request, invalid input
 *       500:
 *         description: Internal server error
 */
router.post('/auth/register', register);

/**
 * @swagger
 * /auth/login:
 *  post:
 *   summary: Login a user
 *   description: Endpoint to login a user.
 *   tags:
 *          - authentification
 *   requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                              email:
 *                                  type: string
 *                              password:
 *                                  type: string
 *   responses:
 *          200:
 *              description: User logged in successfully
 *          400:
 *              description: Bad request, invalid input
 *          500:
 *              description: Internal server error
 * 
 * 
 */
router.post('/auth/login', login);


/**
 * @swagger
 * /auth/isLoggedasAdmin:
 *      get:
 *          summary: Check if user is logged as admin
 *          description: Endpoint to check if user is logged as admin.
 *          tags:
 *              - authentification
 *          parameters:
 *              - in: Cookie
 *                name: sessionToken
 *                required: true
 *                type: string
 *          responses:
 *              200:
 *                  description: User logged in successfully
 *              400:
 *                  description: Bad request, invalid input
 *              401:
 *                  description: Unauthorized
 * 
 */
router.get('/auth/isLoggedasAdmin', isAdmin, isLogged);

/**
 * @swagger
 * 
 * /auth/isLogged:
 *     get:
 *          summary: Check if user is logged
 *          description: Endpoint to check if user is logged.
 *          tags:
 *              - authentification
 *          parameters:
 *              - in: Cookie
 *                name: sessionToken
 *                required: true
 *                type: string
 *          responses:
 *              200:
 *                  description: User logged in successfully
 *              400:
 *                  description: Bad request, invalid input
 *              401:
 *                  description: Unauthorized
 */
router.get('/auth/isLogged', isLogged);

/**
 * @swagger
 * /auth/logout:
 *     get:
 *          summary: Logout a user
 *          description: Endpoint to logout a user.
 *          tags:
 *              - authentification
 *          parameters:
 *              - in: Cookie
 *                name: sessionToken
 *                required: true
 *                type: string
 *          responses:
 *              200:
 *                  description: User logged out successfully
 *              400:
 *                  description: Bad request, invalid input
 *              401:
 *                  description: Unauthorized
 */
router.get('/auth/logout', logout);

/**
 * @swagger
 * /auth/refreshtoken:
 *    get:
 *      summary: Refresh session token
 *      description: Endpoint to refresh session token.
 *      tags:
 *          - authentification
 *      parameters:
 *          - in: Cookie
 *            name: sessionToken
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *              description: Session token refreshed successfully
 *          400:
 *              description: Bad request, invalid input
 *          401:
 *              description: Unauthorized
 */ 
router.get('/auth/refreshtoken', refreshSessionToken);

};