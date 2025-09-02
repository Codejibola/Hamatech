// routes/services.js
import express from "express";
import db from "../../Config/db.js";

const router = express.Router();

router.post("/services", async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const sql = "INSERT INTO Services (Title, Description) VALUES (?, ?)";
    const [result] = await db.execute(sql, [title, description]);

    res.status(201).json({
      message: "Service added successfully",
      serviceId: result.insertId,
    });
  } catch (err) {
    console.error("Error inserting service:", err);
    res.status(500).json({ message: "Database error" });
  }
});

export default router;
