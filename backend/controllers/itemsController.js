import ItemsModel from "../models/itemsModel.js";

// get all items
export const itemsController = async (req, res) => {
    try {
        const items = await ItemsModel.find();
        res.send(items);
    } catch (error) {
        res.status(400).json(error);
    }
};

// Add Item
export const addItemController = async (req, res) => {
    try {
        const newItem = new ItemsModel(req.body);
        await newItem.save();
        res.send("Item Added Successfully");
    } catch (error) {
        res.status(400).json(error);
    }
};