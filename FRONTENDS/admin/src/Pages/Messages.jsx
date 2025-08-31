// eslint-disable-next-line
import { motion } from "framer-motion";

function Messages() {
  return (
    <motion.div
      className="min-h-screen bg-white text-black p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-extrabold mb-6">Messages</h1>
      <p className="text-lg text-gray-800">
        View and respond to customer inquiries and messages.
      </p>
    </motion.div>
  );
}

export default Messages;
