import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-green-200 to-blue-200 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-green-800">
        HealthCare+
      </h1>

      <div className="space-x-6 text-blue-800 font-medium">
        <Link to="/" className="hover:text-green-700">Home</Link>
        <Link to="/doctors" className="hover:text-green-700">Doctors</Link>
        <Link to="/dashboard" className="hover:text-green-700">Dashboard</Link>
        <Link to="/symptom">Symptom Checker</Link>
      </div>
    </nav>
  );
}

export default Navbar;