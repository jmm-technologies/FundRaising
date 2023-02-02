import { configureStore } from "@reduxjs/toolkit";
import adminAuthSlice from "../features/auth/adminAuthSlice";
import eventSlice from "../features/showevents/showEventSlice";

const store = configureStore({
  reducer: {
    adminAuthSlice: adminAuthSlice,
    eventSlice: eventSlice,
  },
});

export default store;
