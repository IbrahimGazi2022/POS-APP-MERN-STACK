import express from "express";
import { chargeBillController } from "../controllers/billController.js";

// Router Object
const router = express.Router();

// CHARGE BILL || POST
router.post("/charge-bill", chargeBillController);

export default router;

