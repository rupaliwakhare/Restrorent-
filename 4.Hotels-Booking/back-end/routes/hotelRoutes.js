import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { resisterHotel } from "../controllers/hotelController.js";

const hotelRouter = express.Router();



hotelRouter.post('/',protect, resisterHotel);

export default hotelRouter;
