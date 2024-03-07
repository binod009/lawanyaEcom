import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import program_svc from "../../pages/service.Service";

const initialState = {
  programdata: [],
  response: "",
  error: "",
  loading: true,
  btn_loading: false,
};

const programSlice = createSlice({
  name: "program",
  initialState,
  reducers: {
    clear_response: (state, action) => {
      state.response = "";
    },
    set_btnloading: (state, action) => {
      state.btn_loading = !state.btn_loading;
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(fetchprogramDataAsync.fulfilled, (state, action) => {
        state.programdata = action.payload;
        state.loading = false;
      })
      .addCase(fetchprogramDataAsync.rejected, (state, action) => {
        state.error = action.payload;
      });

    builders
      .addCase(createProgramAsync.fulfilled, (state, action) => {
        state.programdata.push(action.payload.result);
        state.response = action.payload.msg;
        state.clearformField = true;
        state.btn_loading = false;
      })
      .addCase(createProgramAsync.rejected, (state, action) => {
        state.error = action.payload;
      });

    builders
      .addCase(deleteProgramAsync.fulfilled, (state, action) => {
        state.programdata = state.programdata.filter(
          (item) => item._id !== action.payload.id
        );
        state.response = action.payload.msg;
      })
      .addCase(deleteProgramAsync.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const fetchprogramDataAsync = createAsyncThunk(
  "program/fecthprogramDataasync",
  async () => {
    let res = await program_svc.getAllProgram();
    return res.result;
  }
);
export const createProgramAsync = createAsyncThunk(
  "program/createProgramAsync",
  async (data, rejectWithValue) => {
    try {
      let res = await program_svc.createProgram(data);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteProgramAsync = createAsyncThunk(
  "program/deleteProgramAsync",
  async (id, rejectWithValue) => {
    try {
      let res = await program_svc.deleteProgram(id);
      return { id: id, msg: res.msg };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const { clear_response, resetfield, set_btnloading } =
  programSlice.actions;
export default programSlice.reducer;
