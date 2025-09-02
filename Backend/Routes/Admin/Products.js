import express from "express";
import multer from "multer";
import path from "path";
import db from "../../Config/db.js";

const router = express.Router();

// multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!name || !price || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const sql = `
      INSERT INTO products (Productname, Productprice, Productimage, ProductDescription)
      VALUES (?, ?, ?, ?)
    `;
    const [result] = await db.execute(sql, [name, price, image, description]);

    res.status(201).json({
      message: "Product added successfully",
      productId: result.insertId,
    });
  } catch (err) {
    console.error("Error inserting product:", err);
    res.status(500).json({ message: "Database error" });
  }
});

export default router;
