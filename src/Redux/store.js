import { configureStore } from "@reduxjs/toolkit";
import Auth from "Auth/Auth";
import modalReducer from "Store/modalStore";

export const store = configureStore({
  reducer: { auth: Auth, modal: modalReducer },
});
