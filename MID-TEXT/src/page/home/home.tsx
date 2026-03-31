import React from 'react';

const Home = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Home</h1>
      <p className="text-lg mb-8">This is the home page. Tailwind styling applied.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Services</h2>
          <p>Our services info.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">About</h2>
          <p>Learn more about us.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
