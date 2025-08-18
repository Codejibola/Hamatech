const Topbar = ({ title }) => {
  return (
    <div className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex items-center space-x-3">
        <span className="text-gray-700">Admin</span>
        <img
          src="https://via.placeholder.com/40"
          alt="Admin avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Topbar;
