import mongoose from "mongoose";

// Define the schema
const itemsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
    }, { timestamps: true }
);

// Create the model
const ItemsModel = mongoose.model("items", itemsSchema);

// Export the model
export default ItemsModel;
