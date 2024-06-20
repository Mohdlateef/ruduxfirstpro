import counterReducer from "./reducres/CounterReducres";
import { createStore } from "redux";

const store=createStore(counterReducer);
export default store;