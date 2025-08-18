const Card = ({ title, value }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 text-center">
      <h3 className="text-lg font-medium text-gray-600">{title}</h3>
      <p className="text-2xl font-bold text-black mt-2">{value}</p>
    </div>
  );
};

export default Card;
