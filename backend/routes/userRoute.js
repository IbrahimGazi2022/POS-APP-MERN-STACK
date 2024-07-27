import express from "express";
import { registerController, loginController } from "../controllers/userController.js";

// Router Object
const router = express.Router();

// REGISTER USER || POST
router.post("/register", registerController);

// LOGIN USER || POST
router.post("/login", loginController);


export default router;

