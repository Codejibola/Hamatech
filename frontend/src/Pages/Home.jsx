//eslint-disable-next-line
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <div className="flex flex-col items-center justify-center px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-center"
        >
          Welcome to <span className="text-yellow-400">HamaTech</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-300 text-lg max-w-2xl text-center mb-10"
        >
          Your trusted destination for professional tech services and quality
          products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex gap-4"
        >
          <Link
            to="/services"
            className="px-6 py-3 rounded-2xl bg-yellow-400 text-black font-semibold shadow-lg hover:bg-yellow-500 transition"
          >
            View Services
          </Link>
          <Link
            to="/shop"
            className="px-6 py-3 rounded-2xl bg-gray-800 text-white font-semibold shadow-lg hover:bg-gray-700 transition"
          >
            Visit Shop
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
