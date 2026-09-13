import React, { useState } from "react";
import axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handlelogin=async(e)=>{
        e.preventDefault();

        try {
            const response=await axios.post(
                "http://localhost:3000/api/auth/login",
                {
                    email,
                    password,
                },
                {
                    withCredentials:true
                }
            );

            console.log(response.data);

            const profile=await axios.get(
                "http://localhost:3000/api/auth/profile",
                {
                    withCredentials:true,
                }
            );
            console.log(profile.data);
            
            
        } catch (error) {
            console.log(error.response?.data);
            
        }
    }

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Welcome Back
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Login to manage your deliveries
                    </p>
                </div>

                <form onSubmit={handlelogin} className="space-y-5">

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center text-sm text-slate-500 mt-6">
                    Don't have an account?{" "}
                    <span className="text-blue-600 font-medium cursor-pointer">
                        Register
                    </span>
                </p>

            </div>

        </div>
    );
};

export default Login;