import express from "express";
import { addFood ,listFood,removeFood,updateFood} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Image storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});


const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood);
foodRouter.get("/list",listFood);
foodRouter.delete("/remove/:id",removeFood);
// Update route
foodRouter.put("/update/:id", upload.single("image"), updateFood);
export default foodRouter;
