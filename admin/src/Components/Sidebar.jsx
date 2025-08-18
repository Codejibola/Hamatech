import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-black text-white flex flex-col p-5">
      <h1 className="text-2xl font-bold mb-10">HamaTech Admin</h1>

      <nav className="flex flex-col space-y-4">
        <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
        <Link to="/messages" className="hover:text-gray-300">Messages</Link>
        <Link to="/products" className="hover:text-gray-300">Products</Link>
        <Link to="/services" className="hover:text-gray-300">Services</Link>
        <Link to="/settings" className="hover:text-gray-300">Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
