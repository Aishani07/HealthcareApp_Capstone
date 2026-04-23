import { useNavigate } from "react-router-dom";

function DoctorCard({ doctor }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />

      <h2 className="text-lg font-semibold">{doctor.name}</h2>
      <p className="text-gray-500">{doctor.specialty}</p>

      <div className="flex gap-2 mt-3">
        {/* ✅ Profile */}
        <button
          onClick={() => navigate(`/doctor/${doctor.id}`)}
          className="bg-green-400 text-white px-3 py-1 rounded"
        >
          View Profile
        </button>

        {/* ✅ Booking */}
        <button
          onClick={() => navigate(`/booking/${doctor.id}`)}
          className="bg-blue-400 text-white px-3 py-1 rounded"
        >
          Book
        </button>
      </div>
    </div>
  );
}

export default DoctorCard;