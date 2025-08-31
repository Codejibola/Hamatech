import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white">
        <Sidebar />
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Top bar */}
          <header className="mb-6 flex items-center justify-between border-b pb-4 border-black">
            <h1 className="text-2xl font-extrabold">HamaTech Admin</h1>

            <div className="flex items-center gap-3">
              
              <img
                src="https://i.pravatar.cc/48"
                alt="Admin"
                className="w-10 h-10 rounded-full border border-black"
              />
            </div>
          </header>

          {/* Page content */}
          <section className="bg-white text-black rounded-2xl p-6 border border-black shadow">
            <Outlet />
          </section>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
