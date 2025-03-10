// import multer from "multer";

// // Configure Storage
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './public/temp'); // Ensure this folder exists
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
//     }
// });

// // Initialize Multer
// export const upload = multer({ storage })



















import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp'); // Ensure this directory exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Prevent overwriting files
    }
});

const upload = multer({ storage });

export default upload; // Correct way to export













// import multer from "multer";

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './public/temp')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
//   })
  
// export const upload = multer({
//     storage,
// }).single("avatar");