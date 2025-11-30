import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});

const startServer = async () => {
  try {
    await connectDB();
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running on port: ${process.env.PORT} `);
    });
  } catch (error) {
    console.log("mongo db connection error: ", err);
  }
};

startServer();

// database password : NsK1ZPpB2W2Vblt9
// database username : akbarkrisna2208_db_user
