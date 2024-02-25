import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import event_svc from "../../pages/EventService";

let initialState = {
  eventdata: [],
  error: "",
  response: "",
  clearformfield: false,
};
export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    clear_response: (state, action) => {
      state.response = "";
    },
    delete_event: (state, action) => {
      state.values = state.values.filter((item) => item._id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEventAsync.fulfilled, (state, action) => {
        state.eventdata.push(action.payload.result);
        state.clearformfield = true;
        state.response = action.payload.msg;
      })
      .addCase(createEventAsync.rejected, (state, action) => {
        state.error = action.payload;
      });

    builder
      .addCase(fetchEventDataAsync.fulfilled, (state, action) => {
        state.eventdata = action.payload;
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
      const res = await event_svc.createEvent(data);
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

export const { add_event, delete_event } = eventSlice.actions;
export default eventSlice.reducer;
