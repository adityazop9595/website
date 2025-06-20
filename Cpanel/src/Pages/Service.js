import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function Services() {
  const [services, setServices] = useState([]);
  const form=useRef();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const res = await axios.get('http://localhost:5000/api/services');
    setServices(res.data.services);
    console.log(res.data)
  };

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    if (formData.image) data.append('image', formData.image);

    if (editingId) {
      await axios.put(`http://localhost:5000/api/services/${editingId}`, data);
      setEditingId(null);
    } else {
      const res = await axios.post('http://localhost:5000/api/services', data);
      setServices([...services, res.data]);
    }

    setFormData({ title: '', description: '', image: null });
    
    fetchServices(); // Refresh list
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/services/${id}`);
    setServices(services?.filter((s) => s._id !== id));
  };

  const handleEdit = (service) => {
    setFormData({
      title: service.title,
      description: service.description,
      image: null,
    });
    form.current.reset();
    setEditingId(service._id);
  };

  const selectedService = services.find((s) => s._id === editingId);

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        {editingId ? 'Edit Service' : 'Add Service'}
      </h1>

      {/* Add/Edit Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-10" ref={form}>
        <input
          type="text"
          name="title"
          placeholder="Service Title"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          value={formData.title}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-2 border rounded"
          rows="3"
          onChange={handleChange}
          value={formData.description}
          required
        />

        {/* Show current image when editing */}
        {selectedService && selectedService.image && (
          <div className="mb-2">
            <p className="text-sm text-gray-500 mb-1">Current Image:</p>
            <img
              src={`http://localhost:5000${selectedService.image}`}
              alt="Current"
              className="w-40 h-24 object-cover rounded border"
            />
          </div>
        )}

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="block"
        />

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            {editingId ? 'Update Service' : 'Add Service'}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setFormData({ title: '', description: '', image: null });
              }}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* List Services */}
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service._id}
            className="border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <img
              src={`http://localhost:5000${service.image}`}
              alt={service.title}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-3">{service.title}</h2>
            <p className="text-gray-700 text-sm mt-2">{service.description}</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => handleEdit(service)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(service._id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
