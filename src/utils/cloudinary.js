import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        // console.log("File uploaded to Cloudinary:", response.url);
        await fs.unlinkSync(localFilePath)
        return response;
    } catch (error) {
        console.error("Cloudinary upload error:", error);
        
        // ✅ Now using fs.promises.unlink for a cleaner async operation
        try {
            await fs.unlink(localFilePath);
        } catch (unlinkError) {
            console.error("Error deleting file:", unlinkError);
        }

        return null;
    }
};

export { uploadOnCloudinary };



















// import { v2 as cloudinary } from 'cloudinary';
// import fs from "fs";

// // Configuration
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         if (!localFilePath) return null;
        
//         // ✅ Corrected `cloudinary` (was `Cloudinary`)
//         const response = await cloudinary.uploader.upload(localFilePath, {
//             resource_type: "auto"
//         });

//         console.log("File uploaded to Cloudinary:", response.url);
//         return response;
//     } catch (error) {
//         console.error("Cloudinary upload error:", error);
        
//         // ✅ Corrected `fs.unlink` to use a callback
//         fs.unlink(localFilePath, (err) => {
//             if (err) {
//                 console.error("Error deleting file:", err);
//             }
//         });

//         return null;
//     }
// };

// export { uploadOnCloudinary };
