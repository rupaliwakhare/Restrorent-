import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rupaliwakhre26_db_user:MYqCFv9nO2B5VnO3@cluster0.pr0ncla.mongodb.net/food-delivery"
    );
    console.log(" MongoDB connected successfully");
  } catch (error) {
    console.error(" MongoDB connection failed:", error.message);
    process.exit(1); 
  }
};
