// NOTE: use this store variable to create a store.
import {createStore} from "redux";
import { reducer } from "./reducer";
const store = createStore(reducer);

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.reduxStore = store;
}
