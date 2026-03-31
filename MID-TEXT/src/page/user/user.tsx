import React from 'react';

const User = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">User Dashboard</h1>
      <p className="text-lg mb-8">Welcome user! Your profile and settings.</p>
      <ul className="space-y-2">
        <li>Profile info</li>
        <li>Orders</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default User;
