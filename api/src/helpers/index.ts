import crypto from 'crypto';

const SERCRET = '16052002Ad@m';

export const random = () => crypto.randomBytes(128).toString('base64');

export const authentification = (password: string, salt: string) => {
    return crypto.createHmac('sha256',[password, salt].join('/')).update(SERCRET).digest('hex')
}