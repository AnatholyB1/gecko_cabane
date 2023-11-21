import express from "express";

import { sendEmail} from "../controllers/email";
import {isValidEmail} from '../middlewares/auth';

export default (router : express.Router) => {
    router.post('/email/send', isValidEmail ,sendEmail);
};