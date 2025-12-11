import express from "express"
import upload from "../middleware/"
import { protect } from "../middleware/authMiddleware.js";

const roomRouter = express.Router();

roomRouter.post('/',upload.array("images",4),protect)