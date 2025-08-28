//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar.jsx";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc: "We design and develop responsive, scalable websites tailored to your goals.",
    },
    {
      title: "Tech Consultancy",
      desc: "Guidance on technology adoption, digital strategies, and innovation.",
    },
    {
      title: "Product Support",
      desc: "Professional support to ensure your devices and software run smoothly.",
    },
    {
      title: "Training & Workshops",
      desc: "Equipping students and businesses with practical tech skills.",
    },
  ];

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
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-700 text-lg max-w-3xl mx-auto"
        >
          At HamaTech, we provide a wide range of professional services to help
          you achieve your personal and business goals in a fast-changing world.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="px-6 pb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, idx) => (
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

      {/* CTA Section */}
      <div className="px-6 py-16 bg-black text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Need a Custom Service?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 mb-8"
        >
          We’re always ready to work with you on unique projects. Contact us
          today and let’s build something amazing together.
        </motion.p>
        <a
          href="mailto:hamatech@example.com"
          className="px-6 py-3 rounded-2xl bg-white text-black font-semibold shadow-md hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Services;
