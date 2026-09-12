import mongoose from "mongoose";
import deliveryModel from "../model/delivery.model.js";

const createDelivery=async(req,res)=>{
    try {
    const {title,description}=req.body;
    const delivery=await deliveryModel.create({
        title,
        description,
        status:"pending",
        user:req.user.id
    })
    res.status(201).json({
        message:"Delivery Created successfully",
        delivery
    })
    } catch (error) {
        res.status(500).json({
            message:"Failed to create delivery",
            error:error.message
        });    
    }
}

const getDeliveries = async (req, res) => {
    try {
        const deliveries = await deliveryModel.find({
            user: req.user.id
        });

        res.status(200).json({
            deliveries
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to get deliveries",
            error: error.message
        });
    }
};


const updateDelivery = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const delivery = await deliveryModel.findOne({
            _id: id,
            user: req.user.id
        });

        if (!delivery) {
            return res.status(404).json({
                message: "Delivery not found"
            });
        }

        delivery.status = status;

        await delivery.save();

        res.status(200).json({
            message: "Delivery updated successfully",
            delivery
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update delivery",
            error: error.message
        });
    }
};


const deleteDelivery = async (req, res) => {
    try {
        const { id } = req.params;

        const delivery = await deliveryModel.findOneAndDelete({
            _id: id,
            user: req.user.id
        });

        if (!delivery) {
            return res.status(404).json({
                message: "Delivery not found"
            });
        }

        res.status(200).json({
            message: "Delivery deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete delivery",
            error: error.message
        });
    }
};


export default {
    createDelivery,
    getDeliveries,
    updateDelivery,
    deleteDelivery
};