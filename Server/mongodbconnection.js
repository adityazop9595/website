// const mongoose =require('mongoose');
import {configDotenv} from "dotenv"
configDotenv();
import mongoose from "mongoose";
const main=async()=>{
    await mongoose.connect(process.env.DB_URL)
    console.log('connected to DB')
}

export default main;