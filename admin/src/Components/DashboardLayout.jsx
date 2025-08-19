// eslint-disable-next-line
import { motion } from "framer-motion";
import { Bell, LogOut, Search } from "lucide-react";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar with animation */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
        className="w-64 bg-white shadow-xl rounded-r-2xl flex flex-col"
      >
        <Sidebar />
      </motion.aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-50 flex items-center justify-between px-6 py-3"
        >
          {/* Title */}
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            HamaTech Admin
          </h1>

          {/* Search + Icons */}
          <div className="flex items-center space-x-5">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            {/* Notifications */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-2 rounded-full hover:bg-gray-100 transition"
            >
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </motion.button>

            {/* Profile Avatar */}
            <motion.img
              whileHover={{ scale: 1.1, rotate: 5 }}
              src="https://i.pravatar.cc/50"
              alt="Admin"
              className="w-10 h-10 rounded-full border-2 border-gray-300"
            />

            {/* Logout */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-black to-gray-700 text-white text-sm rounded-xl shadow"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </motion.button>
          </div>
        </motion.header>

        {/* Page Content */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 flex-1 overflow-y-auto"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
};

export default DashboardLayout;
