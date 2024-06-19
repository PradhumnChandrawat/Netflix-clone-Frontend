import mongoose from "mongoose";

// DB connection
export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "NETFLIX_DATABASE",
    })
    .then(() => {
      console.log("Database connection established successfully");
    })
    .catch((error) => {
      console.log(`Error occured while connecting to database: ${error}`);
    });
};
