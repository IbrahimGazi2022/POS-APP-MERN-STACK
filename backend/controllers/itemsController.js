import ItemsModel from "../models/itemsModel.js";

// get all items
export const itemsController = async (req, res) => {
    try {
        const items = await ItemsModel.find();
        res.send(items)
    } catch (error) {
        res.status(400).json(error)
    }
}