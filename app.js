const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./db");
// const multer = require("multer");
const { router: authRoutes } = require("./authRoutes");
const userRoutes = require("./userRoutes");

dotenv.config();
const app = express();

// const storage = multer.diskStorage({
//   destination: function (req, res, cb) {
//     cb(null, "upload/");
//   },
//   filename: function (req, res, cb) {
//     cb(null, Date.now() + "-" + this.filename.originalname);
//   },
// });

// //init upload file

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 5 * 1024 * 1024 },
//   fileFilter: function (req, res, cb) {
//     const fileTypes = /jpeg | jpg| png | pdf/;
//     const extname = fileTypes.test(
//       path.extname(fileTypes.originalname).toLowerCase()
//     );
//     const mimetype = fileTypes.test(fileTypes.mimetype);
//     if (extname && mimetype) {
//       return cd(null, true);
//     } else {
//       cb(new Error("Only Image or PDF allowed!"));
//     }
//   },
// });



app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
