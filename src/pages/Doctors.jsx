import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../features/doctors/doctorSlice";
import DoctorCard from "../components/DoctorCard";

function Doctors() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.doctors);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  const filtered = data.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <input
        type="text"
        placeholder="Search doctors..."
        className="w-full p-3 mb-6 rounded-lg border focus:outline-none"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
}

export default Doctors;