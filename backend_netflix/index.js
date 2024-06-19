import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

dotenv.config({
  path: ".env",
});

const app = express();

app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

dbConnection();

app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});
