import express from 'express';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "anatholyb@gmail.com",
      pass: "dqcxqlwhwcmqjggc",
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
        return res.send(info);
    } catch(err){
        console.error(err);
        return res.sendStatus(400);
    }
}

export const autoReply = async (req: express.Request, res: express.Response) => {
    try{
        const { email, message} = req.body;
        if(!email || !message){
            return res.sendStatus(400);
        }
        const info = await transporter.sendMail({
            from: `"Gecko Cabane Restaurant 🦎"<geckocabanerestaurant@gmail.com>`, // sender address
            to: email, // list of receivers
            subject: `This is an auto reply by ${email}`, // Subject line
            text: message, // plain text body
            html: `<b>${message}</b>`, // html body
          });
        return res.send(info);
    } catch(err){
        console.error(err);
        return res.sendStatus(400);
    }
}