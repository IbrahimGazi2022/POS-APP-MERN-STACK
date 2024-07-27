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
        const user = await userModel.findOne({
            userId: req.body.userId,
            password: req.body.password,
            verified: true,
        });
        if (user) {
            res.send(user);
        } else {
            res.status(400).json({ message: "Login failed", user });
        }
    } catch (error) {
        res.status(400).json(error);
    }
};