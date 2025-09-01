import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed z-50 top-0 left-0 h-full w-64 bg-black text-white
          transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0
        `}
      >
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-4 md:p-8 ml-0 md:ml-64">
        {/* Top Bar */}
        <header className="mb-6 flex items-center justify-between border-b pb-4 border-black">
          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-black text-2xl"
            onClick={() => setIsSidebarOpen(true)}
          >
            <HiMenu />
          </button>

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
      </main>
    </div>
  );
};

export default DashboardLayout;
