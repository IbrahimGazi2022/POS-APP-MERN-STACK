import express from "express";
import { itemsController, addItemController, editItemController, deleteItemController } from "../controllers/itemsController.js";

// Router Object
const router = express.Router();

// GET ALL ITEMS || GET
router.get("/get-all-items", itemsController);

// ADD ITEM || POST 
router.post("/add-item", addItemController);

// EDIT ITEM || POST 
router.post("/edit-item", editItemController);

// DELETE ITEM || POST
router.post("/delete-item", deleteItemController)

export default router;

