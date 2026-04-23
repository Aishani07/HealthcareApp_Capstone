import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";
import DoctorProfile from "./pages/DoctorProfile";
import Symptom from "./pages/Symptom";

function App() {
  return (
    <div>
      {/* ✅ Navbar always visible */}
      <Navbar />

      {/* ✅ Pages change below */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/symptom" element={<Symptom />} />
      </Routes>
    </div>
  );
}

export default App;