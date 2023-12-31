import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice";
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const persistConfig = {
    key: 'root',
    storage,
  }
  
const persistedReducer = persistReducer(persistConfig, cartReducer)
export const store = configureStore({
  reducer: {
    allCart: persistedReducer,
  },
  middleware: [thunk]
});

export const persistor = persistStore(store)