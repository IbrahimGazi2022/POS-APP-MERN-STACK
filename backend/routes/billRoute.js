import express from "express";
import { chargeBillController, getAllBillsController } from "../controllers/billController.js";

// Router Object
const router = express.Router();

// CHARGE BILL || POST 
router.post("/charge-bill", chargeBillController);

// GET ALL BILL || GET
router.get("/get-all-bills", getAllBillsController);

export default router;

