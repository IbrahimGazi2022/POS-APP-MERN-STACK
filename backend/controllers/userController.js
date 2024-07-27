import userModel from "../models/userModel.js";

// New User Register 
export const registerController = async (req, res) => {
    try {
        const newuser = new userModel({ ...req.body, verified: false });
        await newuser.save();
        res.send("User Registered Successfully");
    } catch (error) {
        res.status(400).json(error);
    }
};

// Login User
export const loginController = async (req, res) => {
    try {
        await userModel.findOne(
            {
                userId: req.body.userId,
                password: req.body.password,
                verified: true
            }
        );
        res.send("Login Successfully");
    } catch (error) {
        res.status(400).json(error);
    }
};