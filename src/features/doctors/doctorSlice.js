import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDoctors } from "../../services/api";

export const getDoctors = createAsyncThunk(
  "doctors/getDoctors",
  async () => {
    return await fetchDoctors();
  }
);

const doctorSlice = createSlice({
  name: "doctors",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDoctors.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default doctorSlice.reducer;   // ✅ correct export