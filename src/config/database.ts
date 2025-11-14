import mongoose from "mongoose";

const MONGO_URI = "mongodb://127.0.0.1:27017/ts_taskmanager";

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("XOXO Conencted");
  } catch (error) {
    console.log("Database Connection failure:", error);
    process.exit(1);
  }
};
