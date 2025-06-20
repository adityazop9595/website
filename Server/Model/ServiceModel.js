import mongoose from "mongoose";


const servicesSchema= new mongoose.Schema({
    title:String,
    description:String,
    image:String
})

const ServicesModel = mongoose.model('services',servicesSchema);


export default ServicesModel;