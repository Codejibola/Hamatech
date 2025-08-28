//eslint-disable-next-line
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.jsx";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/Shop")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Hero */}
      <div className="px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Shop Our Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-700 text-lg max-w-3xl mx-auto"
        >
          Discover quality gadgets and tech products available at unbeatable
          prices.
        </motion.p>
      </div>

      {/* Products Grid */}
      <div className="px-6 pb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.length > 0 ? (
          products.map((product, idx) => (
            <motion.div
              key={product.ProductID}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-white border border-gray-300 rounded-2xl p-6 shadow hover:shadow-lg transition flex flex-col"
            >
              <img
                src={`http://localhost:3500/uploads/${product.ProductImage}`}
                alt={product.ProductName}
                className="h-48 w-full object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">
                {product.ProductName}
              </h3>
              <p className="text-gray-600 mb-2">
                {product.ProductDescription || "No description available"}
              </p>
              <span className="font-bold text-lg mb-4">
                ₦{product.ProductPrice}
              </span>
              <button className="mt-auto px-4 py-2 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition">
                Buy Now
              </button>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">
            No products available at the moment.
          </p>
        )}
      </div>

      {/* CTA */}
      <div className="px-6 py-16 bg-black text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Can’t Find What You’re Looking For?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 mb-8"
        >
          Reach out to us and let us help you get the right product for your
          needs.
        </motion.p>
        <a
          href="mailto:hamatech@example.com"
          className="px-6 py-3 rounded-2xl bg-white text-black font-semibold shadow-md hover:bg-gray-200 transition"
        >
          Contact Sales
        </a>
      </div>
    </div>
  );
};

export default Shop;
