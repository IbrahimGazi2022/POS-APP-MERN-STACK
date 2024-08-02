import BillModal from "../models/billModal.js";

export const chargeBillController = async (req, res) => {
    try {
        const newbill = new BillModal(req.body);
        await newbill.save();
        res.send('Bill Charged Successfull');
    } catch (error) {
        res.status(400).json(error);
    }
};