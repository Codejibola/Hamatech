import express from "express";
import multer from "multer";
import path from "path";
import db from "../../Config/db.js";

const router = express.Router();

// multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// route for adding product
router.post("/add", upload.single("image"), (req, res) => {
  const { name, price, description } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!name || !price || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "INSERT INTO Products (Productname, Productprice, Productimage,ProductDescription) VALUES (?, ? , ?, ?)";
  db.query(sql, [name, price, image, description], (err, result) => {
    if (err) {
      console.error("Error inserting product:", err);
      return res.status(500).json({ message: "Database error" });
    }

    res.status(201).json({
      message: "Product added successfully",
      productId: result.insertId,
    });
  });
});

export default router;
