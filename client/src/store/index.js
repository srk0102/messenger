import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {configureStore, ConfigureStore} from "@reduxjs/toolkit";
// import rootReducer from "./reducers/index";
import {countReducer} from "../store/reducer/counter"

export default configureStore ({reducer:{
  LocalUserDetails : countReducer
}})

