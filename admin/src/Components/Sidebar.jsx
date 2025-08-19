/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ShoppingBag, Wrench, MessageSquare } from "lucide-react";

const Sidebar = () => {
  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-64 bg-black text-white fixed top-0 left-0 flex flex-col shadow-xl"
    >
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        HamaTech Admin
      </div>
      <nav className="flex-1 p-4 space-y-4">
        <Link
          to="/dashboard"
          className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800"
        >
          <Home size={20} /> <span>Dashboard</span>
        </Link>
        <Link
          to="/products"
          className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800"
        >
          <ShoppingBag size={20} /> <span>Products</span>
        </Link>
        <Link
          to="/services"
          className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800"
        >
          <Wrench size={20} /> <span>Services</span>
        </Link>
        <Link
          to="/messages"
          className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800"
        >
          <MessageSquare size={20} /> <span>Messages</span>
        </Link>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
