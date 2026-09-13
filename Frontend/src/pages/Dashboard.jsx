import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import DeliveryCard from "../components/DeliveryCard";


const Dashboard = () => {
  const [deliveries, setDeliveries] = useState([]);

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

          <button className="bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            + Add Delivery
          </button>
        </div>

        <div className="grid gap-5">
          {deliveries.map((delivery) => (
            <DeliveryCard
              key={delivery._id}
              delivery={delivery}
            />
          ))}
        </div>

      </main>
    </div>
  );
};

export default Dashboard;