import { combineReducers } from "redux";
import authReducer from "./authReducer";
import jobReducer from "./jobReducer";

const rootReducer = combineReducers({
  authReducer,
  jobReducer,
});

export default rootReducer;
