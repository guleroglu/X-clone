import { _setCurrentAcoount } from ".";
import store from "..";

export const setCurrentAcoount = (data) =>
  store.dispatch(_setCurrentAcoount(data));
