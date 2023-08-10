import multer from "multer";
import sharp from "sharp";
import {responseSend} from "../utils/server.util.js";

export const imageProcessing = (req, res, next) => {
    const upload = multer({
        // dest: "./uploads",
        limits: {
            fileSize: 600000,
        },
        fileFilter(req, file, cb) {
            if (!file.originalname.match(/\.(jpg|jpeg|png|webp)$/)) {
                return cb(new Error("File type should be an image"));
            }
            cb(undefined, true);
        },
    }).single("ecom-image");

    upload(req, res, async (error) => {
        /* The line `if (error instanceof multer.MulterError)` is checking if the `error` object is an instance
of the `MulterError` class provided by the `multer` library. */
        if (error instanceof multer.MulterError) {
            return responseSend(res, 400, {success: false, message: error.message});
        } else if (error) {
            return responseSend(res, 400, {sucess: false, message: error.message});
        }
        if (!req.file) {
            return responseSend(res, 400, {success: false, message: "image is required"});
        }
        const processedImage = await sharp(req.file.buffer)
            .resize({width: 1000, height: 1000})
            .toBuffer();
        req.processed_data = {
            processedImage,
        };
        next();
    });
};
