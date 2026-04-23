import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function DoctorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const doctors = useSelector((state) => state.doctors.data);
  const doctor = doctors.find((d) => d.id == id);

  if (!doctor) return <p>Doctor not found</p>;

  return (
    <div className="p-6">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-48 rounded mb-4"
      />

      <h2 className="text-2xl font-bold">{doctor.name}</h2>
      <p>{doctor.specialty}</p>

      <p className="mt-2">Experience: 10+ years</p>
      <p>Rating: ⭐⭐⭐⭐☆</p>

      {/* ✅ Booking from profile */}
      <button
        onClick={() => navigate(`/booking/${id}`)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Book Appointment
      </button>
    </div>
  );
}

export default DoctorProfile;