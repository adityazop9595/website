import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/orders/${id}`);
        setOrder(res.data);
      } catch (err) {
        console.error("Error fetching order details", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!order) return <div className="p-6 text-red-500">Order not found.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      <p><strong>Name:</strong> {order.name}</p>
      <p><strong>Email:</strong> {order.email}</p>
      <p><strong>Phone:</strong> {order.phone_no}</p>
      <p><strong>Message:</strong> {order.message}</p>
      <p><strong>Status:</strong> {order.status}</p>
    </div>
  );
}
