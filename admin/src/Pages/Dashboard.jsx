/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
      <p className="text-gray-600">
        Welcome to the HamaTech Admin Panel. Here you can manage products,
        services, and customer messages.
      </p>
    </motion.div>
  );
};

export default Dashboard;
