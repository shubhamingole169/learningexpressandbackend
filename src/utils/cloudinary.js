import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
import path from "path";


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
        // const response = await cloudinary.uploader.upload(localFilePath, {
        //     resource_type: "auto"
        // })
        // file has been uploaded successfuly
        // console.log("file is uploaded on cloudinary", response.url);
        // fs.unlinkSync(localFilePath)

        //above function not deleting properly temp file src/temp so following method use


        const absolutePath = path.resolve(localFilePath);

        // Upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(absolutePath, {
            resource_type: "auto"
        });

        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }

        return response ;
    } catch (error) {
        // remove the locallysaved temporary file the upload operation got failed
        // fs.unlinkSync(localFilePath)

        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        return null;
    }
}


export {uploadOnCloudinary}