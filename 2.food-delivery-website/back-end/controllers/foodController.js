// import { log } from "console";
import foodModel from "../models/food_model.js";
import fs from "fs";
import path from "path"

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
      image: image_filename,
    });

    await food.save();
    res.status(201).json({ success: true, message: "Food Added", food });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove food item

const removeFood = async (req, res) => {
  try {
    const id = req.params.id;
    const food = await foodModel.findById(id);

    if (!food) {
      return res
        .status(404)
        .json({ success: false, message: "Food not Found" });
    }
   

     const imagePath = path.join("uploads",food.image);
     if (fs.existsSync(imagePath)) {
       fs.unlink(imagePath, (err) => {
         if (err) console.log("Image deletion error:", err);
       });
     }

    // Delete food item
    await foodModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// update food items
const updateFood = async (req, res) => {
  try {
    const id = req.params.id;
    const food = await foodModel.findById(id);

    if (!food) {
      return res.status(404).json({ success: false, message: "Food not Found" });
    }

    //  insert a new image
    if (req.file) {
      const oldImagePath = path.join("uploads", food.image);
      if (fs.existsSync(oldImagePath)) {
        fs.unlink(oldImagePath, (err) => {
          if (err) console.log("Old image deletion error:", err);
        });
      }
      food.image = req.file.path;
    }

  // update a field
    food.name = req.body.name || food.name;
    food.description = req.body.description || food.description;
    food.price = req.body.price || food.price;
    food.category = req.body.category || food.category;

    await food.save();

    res.json({ success: true, message: "Food Updated", food });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};



export { addFood, listFood, removeFood, updateFood };
