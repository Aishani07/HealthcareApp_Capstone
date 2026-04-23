import { configureStore } from "@reduxjs/toolkit";
import appointmentReducer from "../features/appointments/appointmentSlice";

const store = configureStore({
  reducer: {
    appointments: appointmentReducer,
  },
});

export default store;