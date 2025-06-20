import ServiceOrderModel from "../Model/ServiceOrderModel.js";

// Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await ServiceOrderModel.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error fetching orders" });
  }
};

// Mark order as completed
export const markOrderCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await ServiceOrderModel.findByIdAndUpdate(
      id,
      { status: "completed" },
      { new: true }
    );
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Error updating order" });
  }
};

// Add new order
export const addOrder = async (req, res) => {
  try {
    const { name, email, phone_no, message } = req.body;

    if (!name || !email || !phone_no || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newOrder = new ServiceOrderModel({
      name,
      email,
      phone_no,
      message,
    });

    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ message: "Error adding order", error: err.message });
  }
};
