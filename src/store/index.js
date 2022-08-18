import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import movieReducer from "./movieSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, movieReducer);

const store = configureStore({
  reducer: {
    movie: persistedReducer,
  },
});

export default store;
