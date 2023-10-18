import { combineReducers } from "redux";
import { votesReducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    votes: votesReducer,
});

const store = configureStore({ reducer: rootReducer});

export default store;