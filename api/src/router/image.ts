import express from 'express';

import { createanImage, getentireImagesList, getanImageById, deleteanImageById, updateanImageById, getanImageByName, getallImagesByType } from '../controllers/image';
import { isAdmin } from '../middlewares/auth';
import { formatImage } from '../middlewares/image';

export default (router: express.Router) => {
   /**
    * @swagger
    * /image/create:
    *   post:
    *     summary: Create an image as admin only
    *     description: Endpoint to create a new image.
    *     tags:
    *       - image
    *     parameters:
    *       - in: cookie
    *         name: sessionToken
    *         schema:
    *           type: string
    *         required: true
    * 
    *     requestBody:
    *       required: true
    *       content:
    *         multipart/form-data:
    *           schema:
    *             type: object
    *             properties:
    *               name:
    *                 type: string
    *               file:
    *                 type: File
    *               type:
    *                 type: string
    *     responses:
    *       200:
    *         description: Image created successfully
    *       400:
    *         description: Bad request, invalid input
    *       401:
    *          description: Unauthorized
    *       403:
    *          description: Forbidden
    *       500:
    *         description: Internal server error
    */
   router.post('/image/create', isAdmin, formatImage, createanImage);
   /**
    * @swagger
    * /image/list:
    *   get:
    *     summary: Get the list of all images.
    *     description: Endpoint to get the list of all images.
    *     tags:
    *       - image
    *     responses:
    *       200:
    *         description: List of images retrieved successfully
    *       400:
    *         description: Bad request, invalid input
    *       401:
    *          description: Unauthorized
    *       403:
    *          description: Forbidden
    *       500:
    *         description: Internal server error
    */
   router.get('/image/list', getentireImagesList);
   /**
 * @swagger
 * /image/{id}:
 *   get:
 *     summary: get an image by id
 *     description: Endpoint to get an image by id.
 *     tags:
 *       - image
 *     parameters:
 *       - in: path
 *         name: id 
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: get an image by id successfully
 *       400:
 *         description: Bad request, invalid input
 *       401:
 *          description: Unauthorized
 *       403:
 *          description: Forbidden
 *       500:
 *         description: Internal server error
 */
   router.get('/image/:id', getanImageById);
   /**
* @swagger
* /image/delete:
*   delete:
*     summary: delete an image as admin only
*     description: Endpoint to delete a new image.
*     tags:
*       - image
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*       - in: cookie
*         name: sessionToken
*         schema:
*           type: string
*         required: true
* 
*     responses:
*       200:
*         description: Image deleted successfully
*       400:
*         description: Bad request, invalid input
*       401:
*          description: Unauthorized
*       403:
*          description: Forbidden
*       500:
*         description: Internal server error
*/
   router.delete('/image/:id', isAdmin, deleteanImageById);
   /**
   * @swagger
   * /image/{id}:
   *   put:
   *     summary: update an image as admin only
   *     description: Endpoint to update a new image.
   *     tags:
   *       - image
   *     parameters:
   *       - in: path
   *         name: id
   *         type: string
   *         required: true

   * 
   *     requestBody:
   *       required: true
   *       content:
   *         multipart/form-data:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *               file:
   *                 type: File
   *               type:
   *                 type: string
   *     responses:
   *       200:
   *         description: Image created successfully
   *       400:
   *         description: Bad request, invalid input
   *       401:
   *          description: Unauthorized
   *       403:
   *          description: Forbidden
   *       500:
   *         description: Internal server error
   */
   router.put('/image/:id', isAdmin, formatImage, updateanImageById);
   /**
    * @swagger
    * /image/name/{name}:
    *    get:
    *       summary: get an image by name
    *       description: Endpoint to get an image by name.
    *       tags:
    *          - image
    *       parameters:
    *          - in: path
    *            name: name
    *            type: string
    *            required: true
    *    responses:
    *       200:
    *          description: get an image by name successfully
    *       400:
    *          description: Bad request, invalid input
    *       401:
    *          description: Unauthorized
    *       403:
    *          description: Forbidden
    *       500:
    *          description: Internal server error
    */
   router.get('/image/name/:name', getanImageByName);

   /**
      * @swagger
      * /image/type/{type}:
      *    get:
      *       summary: get all images by type
      *       description: Endpoint to get all images by type.
      *       tags:
      *          - image
      *       parameters:
      *          - in: path
      *            name: type
      *            type: string
      *            required: true
      *    responses:
      *       200:
      *          description: get all images by type successfully
      *       400:
      *          description: Bad request, invalid input
      *       401:
      *          description: Unauthorized
      *       403:
      *          description: Forbidden
      *       500:
      *          description: Internal server error
      */
   router.get('/image/type/:type', getallImagesByType);













}