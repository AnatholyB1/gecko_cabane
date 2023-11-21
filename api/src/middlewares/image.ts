import multer from 'multer';
import path  from 'path';

var storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, 'public/');
    },
    filename : function(req, file, cb) {
        let ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
});

var upload = multer({
    storage : storage,
});

export const formatImage = upload.single('file');

