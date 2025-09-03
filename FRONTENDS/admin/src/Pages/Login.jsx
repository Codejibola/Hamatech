// eslint-disable-next-line
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false); // 👈 loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // start loading

    try {
      const res = await fetch("https://hamatech.onrender.com/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: user, password: pwd }),
      });

      let data = {};
      try {
        data = await res.json();
      } catch {
        data = { message: "Unexpected server response" };
      }

      if (res.ok) {
        alert(data.message || "Login successful ✅");
        navigate("/dashboard");
      } else {
        alert(data.message || "Invalid credentials ❌");
        setUser("");
        setPwd("");
      }
    } catch (err) {
      console.error("Login request failed:", err);
      alert("Network error: Could not reach server ⚠️");
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Admin Login
        </h2>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              value={user}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              onChange={(e) => setUser(e.target.value)}
              disabled={loading} // disable input while loading
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={pwd}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              onChange={(e) => setPwd(e.target.value)}
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 disabled:opacity-60"
            disabled={loading} // disable button while loading
          >
            {loading ? "Connecting to server..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          &copy; {new Date().getFullYear()} HamaTech Admin
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
