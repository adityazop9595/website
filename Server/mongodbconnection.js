// const mongoose =require('mongoose');

import mongoose from "mongoose";
const main=async()=>{
    await mongoose.connect('mongodb+srv://zadeaditya084:adityazop959513@cluster0.ngvly7x.mongodb.net/website?retryWrites=true&w=majority&appName=Cluster0')
    console.log('connected to DB')
}

export default main;