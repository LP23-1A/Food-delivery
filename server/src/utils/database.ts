import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    const MONGODB_URL = "mongodb://localhost:27017/food";
    await mongoose.connect(MONGODB_URL);
    console.log("Database connection is successful");
  } catch (error: unknown) {
    throw new Error("Database cannot connected");
  }
};
