import express from "express";
import { itemsController } from "../controllers/itemsController.js";

// Router Object
const router = express.Router();

// GET ALL ITEMS || GET
router.get("/get-all-items", itemsController);

export default router;

