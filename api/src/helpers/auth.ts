import crypto from 'crypto';
import dotenv from 'dotenv';
import path from 'path';


var SECRET = process.env.MY_SECRET;
if (!SECRET)
{
    dotenv.config({ path: path.join(__dirname, '../../.env') });
    SECRET = process.env.MY_SECRET;
}

export const random = () => crypto.randomBytes(128).toString('base64');

export const authentification = (password: string, salt: string) => {
    return crypto.createHmac('sha256',[password, salt].join('/')).update(SECRET!).digest('hex')
}

