import {
    applyMiddleware,
    combineReducers,
    createStore,
  } from "@reduxjs/toolkit";
  import thunk from "redux-thunk";
  //import { AdminLoginReducer } from "./AdminLoginReducer";
  //import { TimelineReducer } from "./TimelineReducer";
  
  import { CustomerLoginReducer } from "./CustomerLoginReducer";
import { CustomerProfileReducer } from "./CustomerProfileReducer";
  import { CustomerReducer } from "./CustomerReducer";
  
  const rootReducer = combineReducers({
    customerlogin: CustomerLoginReducer,
    customer: CustomerReducer,
    customerProfile: CustomerProfileReducer,
   // timeline: TimelineReducer,
  });
  
  const store = createStore(rootReducer, applyMiddleware(thunk));
  export { store };