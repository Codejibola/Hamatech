//eslint-disable-next-line
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-center"
        >
          Welcome to <span className="text-gray-900">HamaTech</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-700 text-lg max-w-2xl text-center mb-10"
        >
          Your trusted destination for professional tech services and quality
          products. We combine innovation and expertise to deliver value to
          individuals and businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex gap-4"
        >
          <Link
            to="/services"
            className="px-6 py-3 rounded-2xl bg-black text-white font-semibold shadow-md hover:bg-gray-800 transition"
          >
            View Services
          </Link>
          <Link
            to="/shop"
            className="px-6 py-3 rounded-2xl border-2 border-black text-black font-semibold hover:bg-gray-100 transition"
          >
            Visit Shop
          </Link>
        </motion.div>
      </div>

      {/* Services Preview */}
      <div className="px-6 py-16 bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          What We Offer
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            
             { title: "Device Sales", desc: "Get the latest digital devices and gadgets at competitive prices." },
             { title: "Repairs & Maintenance", desc: "Fast and reliable repair services for phones, laptops, and other devices." },
             { title: "Spare Parts", desc: "High-quality replacement parts for all kinds of digital devices." },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-white border border-gray-300 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="px-6 py-16 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Why Choose HamaTech?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-700 text-lg leading-relaxed"
        >
          <p className="text-lg text-black-350 leading-relaxed">
  At <span className="font-semibold text-black-400">HamaTech</span>, we don’t just fix and sell devices — we keep your digital world alive.  
  Our mission is to make technology simple, reliable, and within reach for everyone.  
  Whether you’re a student needing affordable gadgets, a professional looking for quick repairs,  
  or a business searching for the right parts and accessories — <span className="font-semibold">we’ve got you covered</span>.  
  With HamaTech, your devices aren’t just tools — they’re a lifestyle we help you power every day.  
</p>

        </motion.p>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-16 bg-black text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 mb-8"
        >
          Explore our services or shop for quality products today.
        </motion.p>
        <div className="flex justify-center gap-4">
          <Link
            to="/services"
            className="px-6 py-3 rounded-2xl bg-white text-black font-semibold shadow-md hover:bg-gray-200 transition"
          >
            Get Services
          </Link>
          <Link
            to="/shop"
            className="px-6 py-3 rounded-2xl border-2 border-white text-white font-semibold hover:bg-gray-900 transition"
          >
            Visit Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
