import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

import itemsRoute from "./routes/itemsRoute.js";
import userRoute from "./routes/userRoute.js"
import billRoute from "./routes/billRoute.js"
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

// routes ( item route)
app.use("/api/v1/items/", itemsRoute);

// routes ( user route)
app.use("/api/v1/users/", userRoute);

// routes ( bill route)
app.use("/api/v1/bills/", billRoute);

// port
const PORT = process.env.PORT || 8080;

// listen server
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
      .bgBlue.white
  );
});
