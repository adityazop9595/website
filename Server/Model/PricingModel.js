import mongoose from "mongoose";


const pricingSchema = new mongoose.Schema({
  PricingType: String,
  PlanType: String,
  Price: String,
  Duration:String,
  SuitableFor: String,
  FeaturesList: [{ feature: String }]
},{collection:'priceing'});

const PricingModel=mongoose.model('priceing', pricingSchema);
export default PricingModel;

