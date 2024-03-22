import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import partner_svc from "../../pages/PartnerService";

const initialState = {
  partnerdata: [],
  response: "",
  error: null,
  clearformfiled: false,
};

const partnerSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {
    clear_response: (state, action) => {
      state.response = "";
    },
    resetfield: (state, action) => {
      state.clearformfiled = false;
    },
  },


  extraReducers: (builders) => {
    builders
      .addCase(fetchpartnerDataAsync.fulfilled, (state, action) => {
        state.partnerdata = action.payload;
        state.clearformfiled = true;
      })
      .addCase(fetchpartnerDataAsync.rejected, (state, action) => {
        state.error = action.payload;
      });
    builders
      .addCase(createPartnerAsync.fulfilled, (state, action) => {
        state.partnerdata.push(action.payload.result);
        state.response = action.payload.msg;
        state.clearformfiled = true;
      })
      .addCase(createPartnerAsync.rejected, (state, action) => {
        state.error = action.payload;
      });

    builders
      .addCase(deletePartnerAsync.fulfilled, (state, action) => {
        state.partnerdata = state.partnerdata.filter(
          (data) => data._id != action.payload.id
        );

        state.response = action.payload.msg;
      })
      .addCase(deletePartnerAsync.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const fetchpartnerDataAsync = createAsyncThunk(
  "partner/fecthpartnerDataasync",
  async () => {
    let res = await partner_svc.getAllPartner();
    return res.result;
  }
);
export const createPartnerAsync = createAsyncThunk(
  "partner/createPartnerAsync",
  async (data, rejectWithValue) => {
    try {
      let res = await partner_svc.createPartner(data);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deletePartnerAsync = createAsyncThunk(
  "partner/deletePartnerAsync",
  async (id, { rejectWithValue }) => {
    try {
      let res = await partner_svc.deletePartnerById(id);
      return { id: id, msg: res.msg };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const { clear_response, resetfield } = partnerSlice.actions;
export default partnerSlice.reducer;
