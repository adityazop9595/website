import React from "react";
import { FiGrid, FiBox, FiLogOut } from "react-icons/fi";
import { Link, NavLink, Outlet } from "react-router-dom";

const ControlPanel = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col sm:flex-row">
      {/* Sidebar */}
      <aside className="bg-[#111] sm:w-64 w-full sm:min-h-screen p-6 flex sm:flex-col sm:items-start items-center justify-between sm:justify-start border-r border-gray-800">
        <h1 className="text-2xl font-bold mb-8 hidden sm:block">Admin Panel</h1>

        <div className="flex sm:flex-col gap-6 w-full justify-center sm:justify-start">
          <NavLink
            to="/admin/services"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded transition ${
                isActive ? "bg-gray-800" : "hover:bg-gray-900"
              }`
            }
          >
            <FiBox />
            <span className="hidden sm:inline">Services</span>
          </NavLink>

          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded transition ${
                isActive ? "bg-gray-800" : "hover:bg-gray-900"
              }`
            }
          >
            <FiGrid />
            <span className="hidden sm:inline">Orders</span>
          </NavLink>
        </div>

        <button className="mt-auto hidden sm:flex items-center gap-2 text-red-500 hover:text-red-600 transition">
          <FiLogOut />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default ControlPanel;
