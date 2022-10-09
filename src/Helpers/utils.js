import { store } from "Redux/store";
import { setCredentials, logout } from "Auth/Auth";
export const handleUser = (data) => {
  if (data) {
    store.dispatch(setCredentials(data));
  } else {
    store.dispatch(logout(data));
  }
};
