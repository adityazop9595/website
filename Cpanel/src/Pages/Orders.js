import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("all");

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/orders");
      setOrders(res.data);
    } catch (err) {
      console.error("Failed to fetch orders", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleMarkCompleted = async (id) => {
    try {
      await axios.put(`http://localhost:5000/orders/${id}/complete`);
      fetchOrders();
    } catch (err) {
      console.error("Error updating order:", err);
    }
  };

  const filteredOrders =
    tab === "all"
      ? orders.filter((order) => order.status !== "completed")
      : orders.filter((order) => order.status === tab);

  return (
    <section className="min-h-screen px-4 py-10 sm:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Orders</h1>

        {/* Tabs */}
        <div className="mb-6 flex gap-4 text-sm font-medium">
          {["all", "pending", "completed"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-full ${
                tab === t ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        {loading ? (
          <div className="text-gray-500">Loading...</div>
        ) : filteredOrders.length === 0 ? (
          <div className="text-gray-500">No orders in this tab.</div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {filteredOrders.map((order) => (
              <Link
                to={`/admin/orders/${order._id}`}
                key={order._id}
                className="block"
              >
                <div className="bg-white shadow rounded-lg p-5 space-y-2 hover:bg-gray-50 transition cursor-pointer">
                  <h3 className="text-lg font-semibold text-black">{order.name}</h3>
                  <p className="text-sm text-gray-600">{order.email}</p>
                  <p className="text-sm text-gray-600">{order.phone_no}</p>
                  <p className="text-gray-700 line-clamp-2">{order.message}</p>
                  <div className="flex justify-between items-center pt-3">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        order.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                    {order.status !== "completed" && (
                      <button
                        onClick={(e) => {
                          e.preventDefault(); // prevent link navigation
                          handleMarkCompleted(order._id);
                        }}
                        className="text-sm text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
                      >
                        Mark as Completed
                      </button>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
