//eslint-disable-next-line
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.jsx";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const API_BASE = "http://localhost:3500/uploads"

  useEffect(() => {
    fetch("http://localhost:3500/shop")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <div className="px-6 py-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Our Shop
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/20 transition"
            >
              <img
                src={`${API_BASE}/${product.ProductImage}`} 
                alt={product.ProductName}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                {product.ProductName}
              </h3>
              <p className="text-gray-300">{product.ProductDescription}</p>
              <p className="mt-3 font-semibold text-gray-400">
                ₦{product.ProductPrice}
              </p>
              <button className="mt-4 w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;



// import { useEffect, useState } from "react";

// export default function Shop() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3500/api/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);

//   return (
//     <div className="min-h-screen bg-white text-black p-10">
//       <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
//           >
//             <img
//               src={`http://localhost:3500/uploads/${product.Productimage}`}
//               alt={product.Productname}
//               className="h-40 w-full object-cover rounded-lg mb-4"
//             />
//             <h3 className="text-xl font-semibold">{product.Productname}</h3>
//             <p className="text-gray-700 mb-2">{product.ProductDescription}</p>
//             <span className="font-bold">₦{product.Productprice}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
