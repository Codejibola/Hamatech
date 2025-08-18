import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-6 flex-1 bg-white min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
