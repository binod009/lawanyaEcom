import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "../slice/carousel/index";
import eventReducer from "../slice/event/index";

export const store = configureStore({
  reducer: {
    carousel: carouselReducer,
    event: eventReducer,
  },
});
