// eslint-disable-next-line
import { motion } from "framer-motion";

function Dashboard() {
  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-gray-600">
        Welcome to the HamaTech admin dashboard. Here you can manage products,
        services, and view messages from customers.
      </p>
    </motion.div>
  );
}

export default Dashboard;
