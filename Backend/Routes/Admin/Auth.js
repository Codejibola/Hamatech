import express from "express";
import db from "../../Config/db.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    const sql = "SELECT * FROM admins WHERE username = ?";
    db.query(sql, [username], async (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ message: "Internal server error" });
        }

        if (results.length === 0) {
            // No user found
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const user = results[0];
        try {
            // Compare plain password with hashed password
            const match = await bcrypt.compare(password, user.password);

            if (match) {
                return res.status(200).json({ message: "Login successful" });
            } else {
                return res.status(401).json({ message: "Invalid credentials" });
            }
        } catch (err) {
            console.error("Bcrypt error:", err);
            return res.status(500).json({ message: "Internal server error" });
        }
    });
});

export default router;
