// eslint-disable-next-line
import { motion } from "framer-motion";

function Dashboard() {
  return (
    <motion.div
      className="min-h-screen bg-white text-black p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-extrabold mb-6">Admin Dashboard</h1>
      <p className="text-lg text-gray-700 mb-8">
        Welcome back! This is your control panel where you can manage 
        <span className="font-semibold"> products</span>, 
        <span className="font-semibold"> services</span>, 
        and review customer <span className="font-semibold">messages</span>.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <motion.div
          className="p-6 bg-white text-black rounded-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-bold mb-2">Products</h2>
          <p>View, edit, and organize your product listings.</p>
        </motion.div>

        <motion.div
          className="p-6 bg-white text-black rounded-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-bold mb-2">Services</h2>
          <p>Manage and update the services you provide.</p>
        </motion.div>

        <motion.div
          className="p-6 bg-white text-black rounded-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-bold mb-2">Messages</h2>
          <p>Review messages and inquiries from customers.</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Dashboard;
