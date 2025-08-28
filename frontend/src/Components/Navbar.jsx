import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-white px-6 py-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          HamaTech
        </Link>

        {/* Links */}
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition ${
                isActive ? "text-yellow-400 font-semibold" : "text-gray-300"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition ${
                isActive ? "text-yellow-400 font-semibold" : "text-gray-300"
              }`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition ${
                isActive ? "text-yellow-400 font-semibold" : "text-gray-300"
              }`
            }
          >
            Shop
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
