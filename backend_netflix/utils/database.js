import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "MERN_NETFLIX_CLONE",
    })
    .then(() => {
      console.log("Database connection established successfully");
    })
    .catch((error) => {
      console.log(`Error occured while connecting to database: ${error}`);
    });
};
