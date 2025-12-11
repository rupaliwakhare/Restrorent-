import { v2 as cloudinary } from "cloudinary";
import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

// API to create a new room for a hotel
export const createRoom = async (req, res) => {
  try {
    const { roomType, pricePerNight, amenities } = req.body;
    const hotel = await Hotel.findOne({ owner: req.auth.userId });

    if (!hotel) return res.json({ success: false, message: "No Hotel found" });

    // upload images to cloudinary
    const uploadImages = req.files.map(async (file) => {
      const response = await cloudinary.uploader.upload(file.path);
      return response.secure_url;
    });
    // Wait for all uploads to complete
   const images = await Promaise.all(uploadImages);


   await Room.create({
    hotel: hotel._id,
    roomType,
    pricePerNight: +pricePerNight,
    amenities: JSON.parse(amenities),
    images,
   })
   res.json({success: true, message: "Room created succesfully"})
  } catch (error) {
    res.json({ success: false, message: error.message});
  }
};

// API to get a all rooms for a hotel

export const getRooms = async (req, res) => {};

// API to get a all rooms for a specific hotel

export const getOwnerRooms = async (req, res) => {};

// API to toggle availability of a room

export const toggleRoomAvailability = async (req, res) => {};
