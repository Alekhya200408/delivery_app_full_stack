import React from "react";

const DeliveryCard = ({ delivery,onComplete,onDelete }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">

      <div className="flex items-start justify-between">

        <div>
          <h3 className="text-xl font-semibold text-slate-800">
            {delivery.title}
          </h3>

          <p className="text-slate-500 mt-2">
            {delivery.description}
          </p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            delivery.status === "completed"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {delivery.status}
        </span>

      </div>

      <div className="flex gap-3 mt-6">

        {delivery.status === "pending" && (
          <button 
          onClick={()=>onComplete(delivery._id)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
            Mark Complete
          </button>
        )}

        <button
        onClick={()=>onDelete(delivery._id)}
        className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm hover:bg-red-100 transition">
          Delete
        </button>

      </div>

    </div>
  );
};

export default DeliveryCard;