// eslint-disable-next-line
import { motion } from "framer-motion";

function Products() {
  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <p className="text-gray-600">
        This page will allow you to add, edit, and remove auto parts & devices.
      </p>
    </motion.div>
  );
}

export default Products;
