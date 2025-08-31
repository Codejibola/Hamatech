// eslint-disable-next-line
import { motion } from "framer-motion";
import { useState } from "react";

const AddServiceForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:3500/api/admin/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description })
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to add service");
    }

    const result = await res.json();
    alert(result.message);
    setTitle("");
    setDescription("");
  } catch (error) {
    console.error("Error adding service:", error);
    alert(error.message || "Error adding service");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 p-8 rounded-xl w-full max-w-md shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Service</h2>

        <label className="block mb-2 font-semibold" htmlFor="title">
          Title
        </label>
        <motion.input
          type="text"
          id="title"
          name="title"
          placeholder="Enter service title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          whileFocus={{ scale: 1.02 }}
          className="w-full p-3 mb-4 bg-black border border-white rounded-lg text-white placeholder-gray-400 focus:outline-none"
          required
        />

        <label className="block mb-2 font-semibold" htmlFor="description">
          Description
        </label>
        <motion.textarea
          id="description"
          name="description"
          rows="5"
          placeholder="Enter service description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          whileFocus={{ scale: 1.02 }}
          className="w-full p-3 mb-6 bg-black border border-white rounded-lg text-white placeholder-gray-400 focus:outline-none"
          required
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-700 hover:text-white transition-colors duration-300"
        >
          Add Service
        </motion.button>
      </motion.form>
    </div>
  );
};

export default AddServiceForm;
