import { createSlice } from "@reduxjs/toolkit";

const appointmentSlice = createSlice({
  name: "appointments",
  initialState: [],
  reducers: {
    addAppointment: (state, action) => {
      state.push({
        ...action.payload,
        status: "Booked",
      });
    },

    cancelAppointment: (state, action) => {
      const index = action.payload;
      if (state[index]) {
        state[index].status = "Cancelled";
      }
    },

    deleteAppointment: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const {
  addAppointment,
  cancelAppointment,
  deleteAppointment,
} = appointmentSlice.actions;

export default appointmentSlice.reducer;