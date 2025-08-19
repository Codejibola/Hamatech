// eslint-disable-next-line
import { motion } from "framer-motion";

function Messages() {
  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <p className="text-gray-600">
        View and respond to messages sent from the contact form on the website.
      </p>
    </motion.div>
  );
}

export default Messages;
