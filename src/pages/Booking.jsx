import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAppointment } from "../features/appointments/appointmentSlice";
import { useParams } from "react-router-dom";

function Booking() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = () => {
    if (!date || !time) {
      alert("Please select date and time");
      return;
    }

    dispatch(
      addAppointment({
        doctorId: id,
        date: date,
        time: time,
      })
    );

    alert("Appointment Booked!");
  };

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <h2 className="text-2xl mb-4">Book Appointment</h2>

      <p className="mb-4">Doctor ID: {id}</p>

      <div className="flex flex-col gap-3 max-w-xs">
        <input
          type="date"
          className="border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          className="border p-2 rounded"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button
          onClick={handleBooking}
          className="bg-teal-500 text-white py-2 rounded"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default Booking;