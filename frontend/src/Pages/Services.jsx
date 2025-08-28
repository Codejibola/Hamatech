//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar.jsx";

const Services = () => {

  const services = [
    {
      name: "Web Development",
      description: "We build modern, responsive, and scalable websites tailored to your needs.",
      price: "150,000",
    },
    {
      name: "Mobile App Development",
      description: "Cross-platform apps with sleek UI and fast performance.",
      price: "250,000",
    },
    {
      name: "UI/UX Design",
      description: "Clean and engaging designs that enhance user experience.",
      price: "100,000",
    },
    {
      name: "SEO Optimization",
      description: "Boost your website’s visibility and rank higher on search engines.",
      price: "80,000",
    },
    {
      name: "Cloud Hosting",
      description: "Secure and reliable hosting solutions for your business applications.",
      price: "50,000",
    },
    {
      name: "IT Consulting",
      description: "Expert advice and strategies to grow your digital presence.",
      price: "120,000",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <div className="px-6 py-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Our Services
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/20 transition"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-300">{service.description}</p>
              <p className="mt-3 font-semibold text-gray-400">
                ₦{service.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
