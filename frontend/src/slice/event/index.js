import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import event_svc from "../../pages/EventService";

let initialState = {
  eventdata: [],
  error: "",
  response: "",
  table_Loading: true,
  btn_loading: false,
};
export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    clear_response: (state, action) => {
      state.response ="";
    },
    set_btnloading: (state, action) => {
      state.btn_loading = !state.btn_loading;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEventAsync.fulfilled, (state, action) => {
        state.eventdata.push(action.payload.result);
        state.response = action.payload.msg;
        state.btn_loading = false;
      })
      .addCase(createEventAsync.rejected, (state, action) => {
        state.error = action.payload;
      });

    builder
      .addCase(fetchEventDataAsync.fulfilled, (state, action) => {
        state.eventdata = action.payload;
        state.table_Loading = false;
      })
      .addCase(fetchEventDataAsync.rejected, (state, action) => {
        state.error = action.payload;
      });
    builder
      .addCase(eventdeleteAsync.fulfilled, (state, action) => {
        let msg = action.payload.msg;
        state.response = msg;
        state.eventdata = state.eventdata.filter(
          (item) => item._id !== action.payload.id
        );
      })
      .addCase(eventdeleteAsync.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const fetchEventDataAsync = createAsyncThunk(
  "event/fetchEventDataAsync",
  async () => {
    const res = await event_svc.getAllEvents();
    return res.result;
  }
);

export const createEventAsync = createAsyncThunk(
  "event/createEventAsync",
  async (data, { rejectWithValue }) => {
    try {
      let res = await event_svc.createEvent(data);
      console.log("fromredux", res);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const eventdeleteAsync = createAsyncThunk(
  "event/eventdeleteAsync",
  async (id, { rejectWithValue }) => {
    try {
      let res = await event_svc.deleteEventById(id);
      return { id: id, msg: res.msg };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const { clear_response, set_btnloading } = eventSlice.actions;
export default eventSlice.reducer;
