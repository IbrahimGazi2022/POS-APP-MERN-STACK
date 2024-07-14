import express from "express";
import { itemsController, addItemController} from "../controllers/itemsController.js";

// Router Object
const router = express.Router();

// GET ALL ITEMS || GET
router.get("/get-all-items", itemsController);

// ADD ITEM || POST 
router.post("/add-item", addItemController);

export default router;

