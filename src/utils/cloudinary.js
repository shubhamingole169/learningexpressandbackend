import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"


// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        // upload the file path on cloudinary
        const response = await Cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfuly
        console.log("file is uploaded on cloudinary", response.url);
        return response ;
    } catch (error) {
        fs.unlinked(localFilePath) // remove the locallysaved temporary file the upload operation got failed
        return null;
    }
}


export {uploadOnCloudinary}