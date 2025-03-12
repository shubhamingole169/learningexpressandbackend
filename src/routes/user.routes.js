import { Router } from "express";
import {
    ChangeCurrentPassword,
    getCurrentUser,
    getUserChannelProfile,
    getWatchHistory,
    loginUser,
    logoutUser,
    refreshAccessToken,
    registerUser,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImage
} from "../controllers/user.controllers.js";
import upload from "../middlewares/multer.middleware.js"; // Import as default
import { verifyJWt } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register",
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]),
    registerUser
);

router.route("/login").post(loginUser)

// secure routes
router.route("/logout").post(verifyJWt, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-Password").post(verifyJWt, ChangeCurrentPassword)
router.route("current-user").get(verifyJWt, getCurrentUser)
router.route("/update-account").patch(verifyJWt, updateAccountDetails)
router.route("/avatar").patch(verifyJWt, upload.single("avatar"), updateUserAvatar)
router.route("/coverImage").patch(verifyJWt, upload.single("/coverImage"), updateUserCoverImage)
router.route("/c/:username").get(verifyJWt, getUserChannelProfile)
router.route("/history").get(verifyJWt, getWatchHistory)


export default router;












// import { Router } from "express";
// import { registerUser } from "../controllers/user.controllers.js";
// import { upload } from './../middlewares/multer.middleware.js';





// const router = Router()

// router.route("/register").post(
//     upload.fields([
//         {
//             name: "avatar",
//             maxCount: 1
//         },
//         {
//             name:"coverImages",
//             maxCount:1
//         }
//     ]),
//     registerUser
// )



// export default router