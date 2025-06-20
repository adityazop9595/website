import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ControlPanel from './Layout';
import Services from './Pages/Service';
import OrdersPage from './Pages/Orders';
import OrderDetails from './Pages/OrderDetails';

export default function App() {
  return (
    <Routes>
      {/* Main Admin Route with nested pages */}
      <Route path="/admin" element={<ControlPanel />}>
        <Route path="services" element={<Services />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="/admin/orders/:id" element={<OrderDetails />} />

      </Route>

      {/* Optional: Add a fallback or homepage */}
      <Route path="*" element={<div className="text-white p-10">404 - Not Found</div>} />
    </Routes>
  );
}
