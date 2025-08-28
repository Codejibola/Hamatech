//eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // burger & close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white shadow-md fixed top-0 left-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 tracking-wide hover:text-gray-700 transition"
        >
          Hama<span className="text-black">Tech</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-gray-800 font-medium">
          <Link to="/" className="hover:text-black transition">Home</Link>
          <Link to="/services" className="hover:text-black transition">Services</Link>
          <Link to="/shop" className="hover:text-black transition">Shop</Link>
          <Link to="/contact" className="hover:text-black transition">Contact</Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/shop"
            className="px-5 py-2 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-inner"
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-gray-800 font-medium">
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
              <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-5 py-2 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition text-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
