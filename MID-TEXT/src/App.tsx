import { Link, Route, Routes } from 'react-router-dom';
import Home from './page/home/home';
import User from './page/user/user';
import Admin from './page/admin/admin';
import './App.css';

function App() {
  return (
    <div className="app w-screen min-h-screen bg-[#F0F4F5]">
      <nav className="bg-blue-600 p-4 text-white flex gap-6 shadow-lg">
        <Link to="/" className="font-semibold hover:underline">Home</Link>
        <Link to="/services" className="hover:underline">Services</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/user" className="hover:underline">User</Link>
        <Link to="/admin" className="hover:underline">Admin</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
      <main className="p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold mb-4">Services</h1>
              <p>Our services using Tailwind.</p>
            </div>
          } />
          <Route path="/about" element={
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold mb-4">About</h1>
              <p>App information and team.</p>
            </div>
          } />
          <Route path="/contact" element={
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold mb-4">Contact</h1>
              <p>Contact form stub. Use Antd for real form.</p>
            </div>
          } />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
