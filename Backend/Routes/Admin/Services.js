import express from "express";
import db from "../../Config/db.js";

const router = express.Router();

router.post("/services", (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const sql = "INSERT INTO Services (Title, Description) VALUES (?, ?)";
    db.query(sql, [title, description], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database error" });
        }

        res.status(201).json({ message: "Service added successfully", serviceId: result.insertId });
    });
});

export default router;
