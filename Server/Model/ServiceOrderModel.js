import mongoose from "mongoose";


const ServiceOrderSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone_no: String,
  message: String,
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
});


const ServiceOrderModel= mongoose.model('orders',ServiceOrderSchema);


export default ServiceOrderModel;