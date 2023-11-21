import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';

var SECRET = process.env.NODE_MAILER_SECRET 	// Connexion à la base de données MongoDB
if (!SECRET)
{
    dotenv.config({ path: path.join(__dirname, '../../.env') });
    SECRET = process.env.NODE_MAILER_SECRET;
}


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "anatholyb@gmail.com",
      pass: SECRET,
    },
  });
  

export const sendEmail =  async (req: express.Request, res: express.Response) => {
    try{
        const {firstName, lastName, email, message} = req.body;
        if(!firstName || !lastName || !email || !message){
            return res.sendStatus(400);
        }
        const info = await transporter.sendMail({
            from: `"${firstName} ${lastName}"<${email}>`, // sender address
            to: "geckocabanerestaurant@gmail.com", // list of receivers
            subject: `Message from website by ${email}`, // Subject line
            text: message, // plain text body
            html: `<b>${message}</b>`, // html body
          });
        const reply = await autoReply(req, res);
        return res.send({sended : info , reply : reply});
    } catch(err){
        console.error(err);
        return res.sendStatus(400);
    }
}

export const autoReply = async (req: express.Request, res: express.Response) => {
    try{
        const { email, firstName} = req.body;
        if(!email || !firstName){
            return res.sendStatus(400);
        }
        const info = await transporter.sendMail({
            from: `"Gecko Cabane Restaurant 🦎"<geckocabanerestaurant@gmail.com>`, // sender address
            to: email, // list of receivers
            subject: `This is an auto reply by ${email}`, // Subject line
            text: 'Message Received, Hello, We have received your message and thank you for reaching out to us. We will get back to you as soon as possible. Best Regards,Your Restaurant', // plain text body
            html: `<!DOCTYPE html>
            <html>
            <head>
              <title>Message Received</title>
            </head>
            <body>
              <p>Hello ${firstName},</p>
              <p>We have received your message and thank you for reaching out to us. We will get back to you as soon as possible.</p>
              <p>Best Regards,</p>
              <p>Your Restaurant</p>
              <p>Visit our website: <a href="https://gecko-cabane.vercel.app/" target="_blank">https://gecko-cabane.vercel.app/</a></p>
            </body>
            </html>`, // html body
          });
        return info;
    } catch(err){
        console.error(err);
        return res.sendStatus(400);
    }
}