import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import { polygenceInitialState } from "./reducers/spendings";

const preloadState = {
  polygenceInitialState: polygenceInitialState,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  preloadState,
});

export default store;
