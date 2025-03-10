import { Router } from "express";
import { loginUser, logoutUser, refreshAccessToken, registerUser } from "../controllers/user.controllers.js";
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