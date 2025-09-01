import bcrypt from 'bcrypt';
import db from '../../Config/db.js';

async function createAdmin(username,password){
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = " INSERT INTO admins (username, password) VALUES (?, ?)";
    db.query(sql, [username, hashedPassword], (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return;
        }
        console.log("Admin created with hashed password");
    })
}


createAdmin("Hamatech", "superadmin1")