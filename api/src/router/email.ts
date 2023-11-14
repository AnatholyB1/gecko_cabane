import express from "express";

import { sendEmail, autoReply } from "../controllers/email";
import {isValidEmail} from '../middlewares';

export default (router : express.Router) => {
    router.post('/email/send', isValidEmail ,sendEmail);
    router.post('/email/reply', autoReply);
};