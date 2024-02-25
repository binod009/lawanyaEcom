import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: [],
};

const partnerSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {
    add_partner: (state, value) => {
      state.values.push(action.payload);
    },
    delete_partner: (state, value) => {
      state.values = state.values.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { add_partner, delete_partner } = partnerSlice.actions;
export default partnerSlice.reducer;
