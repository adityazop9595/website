// const PricingModel = require('../Model/PricingModel');

import PricingModel from "../Model/PricingModel.js";

const PriceingControler = async (req, res) => {
  const { service } = req.query;

  if (!service) {
    return res.status(400).json({ error: 'Service query is required' });
  }

  try {
    // Optional: case-insensitive search
    const plan = await PricingModel.find({ PricingType: { $regex: new RegExp(`^${service}$`, 'i') } });

    if (!plan) {
      return res.status(404).json({ error: 'No pricing found for this service' });
    }

    res.json(plan);
  } catch (err) {
    console.error('Error fetching pricing:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default PriceingControler;
