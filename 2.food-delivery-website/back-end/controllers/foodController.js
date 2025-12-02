// import { log } from "console";
import foodModel from "../models/food_model.js";
// import fs from "fs";

// add food item
const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image file is missing. Please upload a food image.",
      });
    }

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.file.path
    });

   
      await food.save();
      res.status(201).json({ success: true, message: "Food Added" ,food});
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });

    }
  
};

export { addFood };
