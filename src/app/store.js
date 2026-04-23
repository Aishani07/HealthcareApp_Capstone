import { configureStore } from "@reduxjs/toolkit";
import appointmentReducer from "../features/appointments/appointmentSlice";
import doctorReducer from "../features/doctors/doctorSlice";

const store = configureStore({
  reducer: {
    appointments: appointmentReducer,
    doctors: doctorReducer,
  },
});

export default store;   // ✅ THIS LINE IS REQUIRED