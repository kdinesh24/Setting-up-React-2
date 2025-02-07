// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Personal Details</h1>
        
        <div className="space-y-4">
          <div>
           
            <p className="text-gray-700">Name: Dinesh </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold">Contact Details:</h2>
            <div className="text-gray-700">
              <p>Email: k.dinesh.s65@kalvium.community</p>
              <p>Phone:7780757556 </p>
              <p>Location: Punjab </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;