import express from "express";
import { addFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Multer config for image upload
const storage = multer.memoryStorage(); // or use diskStorage for saving to disk
const upload = multer({ storage });

// Route to add food with image
foodRouter.post("/add", upload.single("image"), addFood);

export default foodRouter;
