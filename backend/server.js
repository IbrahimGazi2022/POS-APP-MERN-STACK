import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

import itemsRoute from "./routes/itemsRoute.js";
import connectDB from "./config/Database.js";

// config env file
dotenv.config();

// Mongodb Connection
connectDB();

// rest object
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes ( test route)
app.use("/api/v1/items/", itemsRoute);

// port
const PORT = process.env.PORT || 8080;

// listen server
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
      .bgBlue.white
  );
});
