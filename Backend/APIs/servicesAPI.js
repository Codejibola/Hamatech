import db from "../Config/db.js";

const getProducts = async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM services");
    res.json(results);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default getProducts;
