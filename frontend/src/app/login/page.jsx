"use client"
import React, { useState } from 'react';
import Header from '../_components/Header2';
import { FcGoogle } from "react-icons/fc";

import TopBar from '../_components/Topbar2';

const Login = () => {
 

  return (
    <div>
      <TopBar />
      <Header />
      <div className="bg-gray-200 py-16"
      style={{
        background: 'linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)',
      }}>
        <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">  
          <h2 className="text-3xl font-semibold mb-6 text-center"> Secure Client Login</h2>

         

          <form  method="post" action="https://client.bluefoxhoster.com/dologin.php" className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-gray-600 mb-2">Email Address *</label>
              <input
                type="text"
                id="username"
                name="username"
                className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                
              />
              
            </div>

            <div className="flex items-center justify-between space-x-2"> 
              <label htmlFor="password" className="block text-gray-600 m-0"> 
                Password *
              </label>
              <a href="/forgot-password" className="text-blue-600 text-sm m-0"> 
                Forgot?
              </a>
            </div>

            <input
              type="password"
              id="password"
              name="password"
              className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              
            />
            

            <div className="flex items-center mt-3">
              <input
                type="checkbox"
                id="rememberMe"
                className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 text-gray-600">Remember me</label>
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
             
            >
              Login
            </button>

            <div className="flex items-center justify-center my-4">
              <hr className="flex-grow border-t border-gray-300" />
              <p className="mx-4 text-gray-600">or</p>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            <div className="flex justify-center space-x-4 mb-8">
              <button className="flex items-center px-4 py-2 bg-white text-gray-800 rounded-lg border border-gray-300 hover:bg-blue-50">
                <div className="mr-2">
                  <FcGoogle className="text-2xl" />
                </div>
                Sign in with Google
              </button>
            </div>

            <p className="text-center text-gray-600 mt-4">
              Don't have an account? <a href="/register" className="text-blue-600">Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
