import express from "express";

import { sendEmail } from "../controllers/email";
import { isValidEmail } from '../middlewares/auth';

export default (router: express.Router) => {
    /**
     * @swagger
     * /email/send:
     *  post:
     *      summary: Send an email
     *      description: Endpoint to send an email.
     *      tags:
     *          - email
     *      requestBody:
     *          required: true
     *          content:
     *              content-type: form-data
     *              schema:
     *                  type: object
     *                  properties:
     *                      firstName:
     *                          type: string
     *                          required: true
     *                      lastName:
     *                          type: string
     *                          required: true
     *                      email:
     *                          type: string
     *                          required: true
     *                      message:
     *                          type: string
     *                          required: true
     *          responses:
     *              200:
     *                  description: Email sent successfully
     *              400:
     *                  description: Bad request, invalid input
     *              500:
     *                  description: Internal server error
     */

    router.post('/email/send', isValidEmail, sendEmail);
};