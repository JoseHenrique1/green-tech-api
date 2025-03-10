import { Request, Response, NextFunction } from 'express';
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, `${__dirname}/public`)
    }, 
    filename: function(req, file, cb) {
      cb(null, Date.now() + ".jpg");
    }
});

const upload = multer({ storage }).single("file");

export default upload;
