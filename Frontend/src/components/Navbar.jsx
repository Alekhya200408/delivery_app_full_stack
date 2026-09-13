import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-xl font-bold text-slate-800">
          Delivery App
        </h1>

        <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-red-600 transition">
          Logout
        </button>

      </div>
    </nav>
  );
};

export default Navbar;