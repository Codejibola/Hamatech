import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./Components/DashboardLayout";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import Services from "./Pages/Services";
import Messages from "./Pages/Messages";

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
