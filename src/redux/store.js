import { configureStore } from "@reduxjs/toolkit";
import learnerReducer from "../redux/slices/learnerSlice";
import tutorReducer from "./slices/tutorSlice";
import  sessionReducer from "./slices/sessionSlice"

export const store = configureStore({
 reducer: {
  learner: learnerReducer,
  tutor: tutorReducer,
  session: sessionReducer,
},
});



