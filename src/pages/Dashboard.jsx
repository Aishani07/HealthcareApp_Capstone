import { useSelector, useDispatch } from "react-redux";
import {
  cancelAppointment,
  deleteAppointment,
} from "../features/appointments/appointmentSlice";

function Dashboard() {
  const appointments = useSelector((state) => state.appointments);
  const dispatch = useDispatch();

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <h2 className="text-2xl mb-4">Your Appointments</h2>

      {appointments.length === 0 ? (
        <p>No appointments yet</p>
      ) : (
        appointments.map((a, i) => (
          <div
            key={i}
            className="bg-white p-4 mb-3 rounded shadow flex justify-between items-center"
          >
            <div>
              <p>Doctor: {a.doctorId}</p>
              <p>
                {a.date || "No date"} | {a.time}
              </p>

              <p>
                Status:{" "}
                <span
                  className={
                    a.status === "Booked"
                      ? "text-green-600"
                      : "text-red-500"
                  }
                >
                  {a.status}
                </span>
              </p>
            </div>

            <div className="flex gap-2">
              {/* Cancel */}
              {a.status === "Booked" && (
                <button
                  onClick={() => dispatch(cancelAppointment(i))}
                  className="bg-yellow-400 px-3 py-1 rounded"
                >
                  Cancel
                </button>
              )}

              {/* Delete */}
              <button
                onClick={() => dispatch(deleteAppointment(i))}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;