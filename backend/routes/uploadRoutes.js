import express from "express";
import multer from "multer";
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier'
import dotenv from "dotenv";

dotenv.config();
//cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})


// Multer setup using memory storage
const storage = multer.memoryStorage();
const upload = multer({storage});

const router = express.Router();

router.post("/", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({message: "No file uploaded"});
        }

        // function to handle upload to cloudinary
        const streamUpload = (fileBuffer) => {
            return new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    {resource_type: "auto"},
                    (error, result) => {
                        if (error) {
                            console.error("Cloudinary upload error:", error);
                            reject(error);
                        } else {
                            resolve(result);
                        }
                    }
                );
                // Use streamifier to convert file buffer to a stream
                streamifier.createReadStream(fileBuffer).pipe(stream);
            });
        };
        const result = await streamUpload(req.file.buffer);

        res.json({
            message: "Image uploaded successfully",
            imageUrl: result.secure_url,
            publicId: result.public_id
        });
    } catch (error) {
        console.error("Error in upload route:", error);
        res.status(500).json({
            message: "Error uploading image",
            error: error.message,
            stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack
        });
    }
})

export default router;



