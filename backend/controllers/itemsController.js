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

// Edit Item
export const editItemController = async (req, res) => {
    try {
        await ItemsModel.findOneAndUpdate({ _id: req.body.itemId }, req.body);
        res.send("Item Edited Successfully");
    } catch (error) {
        res.status(400).json(error);
    }
};

// Delete Item
export const deleteItemController = async (req, res) => {
    try {
        await ItemsModel.findOneAndDelete({ _id: req.body.itemId });
        res.send("Item Deleted Successfully");
    } catch (error) {
        res.status(400).json(error);
    }
};