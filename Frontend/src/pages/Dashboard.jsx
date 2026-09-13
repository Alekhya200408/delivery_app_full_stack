import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import DeliveryCard from "../components/DeliveryCard";


const Dashboard = () => {
    const [deliveries, setDeliveries] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

  useEffect(() => {
    const getDeliveries = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/deliveries",
          {
            withCredentials: true,
          }
        );

        setDeliveries(response.data.deliveries);
      } catch (error) {
        console.log(error.response?.data);
      }
    };

    getDeliveries();
  }, []);

  const handleCreateDelivery = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/deliveries",
      {
        title,
        description,
      },
      {
        withCredentials: true,
      }
    );

    setDeliveries((prev) => [...prev, response.data.delivery]);

    setTitle("");
    setDescription("");
    setShowForm(false);

  } catch (error) {
    console.log(error.response?.data);
  }
};

const handleComplete = async (id) => {
  try {
    const response = await axios.patch(
      `http://localhost:3000/api/deliveries/${id}`,
      {
        status: "completed",
      },
      {
        withCredentials: true,
      }
    );

    setDeliveries((prev) =>
      prev.map((delivery) =>
        delivery._id === id
          ? response.data.delivery
          : delivery
      )
    );
  } catch (error) {
    console.log(error.response?.data);
  }
};

const handleDelete = async (id) => {
  try {
    await axios.delete(
      `http://localhost:3000/api/deliveries/${id}`,
      {
        withCredentials: true,
      }
    );

    setDeliveries((prev) =>
      prev.filter((delivery) => delivery._id !== id)
    );

  } catch (error) {
    console.log(error.response?.data);
  }
};

  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              My Deliveries
            </h2>

            <p className="text-slate-500 mt-1">
              Manage your deliveries
            </p>
          </div>

          <button
          onClick={()=>setShowForm(true)}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            + Add Delivery
          </button>
        </div>

        <div className="grid gap-5">
          {deliveries.map((delivery) => (
            <DeliveryCard
              key={delivery._id}
              delivery={delivery}
              onComplete={handleComplete}
              onDelete={handleDelete}
            />
          ))}
        </div>
          {showForm && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4">

    <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl">

      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-slate-800">
          Add Delivery
        </h3>

        <button
          onClick={() => setShowForm(false)}
          className="text-slate-400 hover:text-slate-600 text-xl"
        >
          ✕
        </button>
      </div>

      <div className="space-y-4">

        <input
          type="text"
          placeholder="Delivery title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Delivery description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex gap-3">

          <button
            onClick={() => setShowForm(false)}
            className="flex-1 border border-slate-300 text-slate-600 py-3 rounded-lg"
          >
            Cancel
          </button>

          <button
          onClick={handleCreateDelivery}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Create
          </button>

        </div>

      </div>

    </div>

  </div>
)}
      </main>
    </div>
  );
};

export default Dashboard;