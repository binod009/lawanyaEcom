import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import carousel_svc from "../../pages/CarouselService";

let initialState = {
  carouseldata: [],
  error: "",
  response: "",
  clearformfield: false,
};

export const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    clear_response: (state, action) => {
      state.response = "";
    },
    resetfield: (state, action) => {
      state.clearformfield = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createcarouselAsync.fulfilled, (state, action) => {
        state.carouseldata.push(action.payload.result);
        state.clearformfield = true;
        state.response = action.payload.msg;
      })
      .addCase(createcarouselAsync.rejected, (state, action) => {
        state.error = action.payload;
      });

    builder
      .addCase(fetchdataAsync.fulfilled, (state, action) => {
        state.carouseldata = action.payload;
      })
      .addCase(fetchdataAsync.rejected, (state, action) => {
        state.error = action.payload;
      });
    builder
      .addCase(carouseldeleteAsync.fulfilled, (state, action) => {
        let msg = action.payload.msg;
        state.response = msg;
        state.carouseldata = state.carouseldata.filter(
          (item) => item._id !== action.payload.id
        );
      })
      .addCase(carouseldeleteAsync.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const fetchdataAsync = createAsyncThunk(
  "carousel/fetchdataAsync",
  async () => {
    const res = await carousel_svc.getAllCarousel();
    return res.result;
  }
);

export const createcarouselAsync = createAsyncThunk(
  "carousel/createcarouselAsync",
  async (data, { rejectWithValue }) => {
    try {
      const res = await carousel_svc.CreateCarousel(data);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const carouseldeleteAsync = createAsyncThunk(
  "carousle/carouseldeleteAsync",
  async (id, { rejectWithValue }) => {
    try {
      let res = await carousel_svc.deleteCarouselById(id);
      return { id: id, msg: res.msg };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const { clear_response, resetfield } = carouselSlice.actions;
export default carouselSlice.reducer;
