import React from 'react';

const Admin = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-red-600">Admin Panel</h1>
      <p className="text-lg mb-8">Manage users, content, etc.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">Users</h2>
          <p>Manage users</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">Products</h2>
          <p>Manage products</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">Analytics</h2>
          <p>View stats</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
