import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log(
      `mongodb connected!!, ${(await connectionInstance).connection.host}`
    );
  } catch (error) {
    console.log("mongo db connection failed !!", error);
    process.exit(1);
  }
};

export default connectDB;
