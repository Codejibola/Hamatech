import db from "../Config/db.js";
const getServices = (req, res)=>{
   db.query("SELECT * FROM Services", (error, results)=>{
    if (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
    res.json(results);
   })
}
export default getServices;