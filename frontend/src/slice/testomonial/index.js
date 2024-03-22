import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import testo_svc from "../../pages/TestomonialService";

const initialState = {
  testomonialData: [],
  response: null,
  error: null,
  btn_loading: false,
  loading: false,
};

const TestomonialSlice = createSlice({
  name: "testomonial",
  initialState,
  reducers: {
    clear_response: (state, action) => {
      state.response = null;
    },
  },

  extraReducers: (builders) => {
    builders
      .addCase(fetchTestoData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchTestoData.fulfilled, (state, action) => {
        state.testomonialData = action.payload;
        state.loading = false;
      })
      .addCase(fetchTestoData.rejected, (state, action) => {
        state.error = action.payload;
      });

    builders
      .addCase(createTestoAsync.pending, (state, action) => {
        state.btn_loading = true;
      })

      .addCase(createTestoAsync.fulfilled, (state, action) => {
        state.testomonialData.push(action.payload.result);
        state.response = action.payload.msg;
        state.btn_loading = false;
      })
      .addCase(createTestoAsync.rejected, (state, action) => {
        state.error = action.payload;
      });

    builders
      .addCase(deleteTestoById.fulfilled, (state, action) => {
        state.testomonialData = state.testomonialData.filter(
          (item) => item._id !== action.payload.id
        );
        state.response = action.payload.msg;
      })
      .addCase(deleteTestoById.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const fetchTestoData = createAsyncThunk(
  "testomonial/fetchTestoData",
  async ({ rejectWithValues }) => {
    try {
      let res = await testo_svc.getAllTestomonial();
      return res.result;
    } catch (error) {
      return rejectWithValues(error);
    }
  }
);
export const createTestoAsync = createAsyncThunk(
  "testomonial/createTestoAsync",
  async (data, rejectWithValue) => {
    try {
      let res = await testo_svc.createTestomonial(data);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteTestoById = createAsyncThunk(
  "testomonial/deleteTestoById",
  async (id, rejectWithValue) => {
    try {
      let res = await testo_svc.deleteTestomonialById(id);
      return { id: id, msg: res.msg };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

function arrayValueAssigner(state, payload) {
  if (payload.length === 0) return state;
  return payload;
}

export const { clear_response } = TestomonialSlice.actions;
export default TestomonialSlice.reducer;
