import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "../slice/carousel/index";
import eventReducer from "../slice/event/index";
import partnerReducer from "../slice/partner/index";
import programReducer from "../slice/program/index";
import testomonialReducer from "../slice/testomonial/index";
import authReducer from "../slice/auth/index";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    carousel: carouselReducer,
    event: eventReducer,
    partner: partnerReducer,
    program: programReducer,
    testomonial: testomonialReducer,
  },
});
