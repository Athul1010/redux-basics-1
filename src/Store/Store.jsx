import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "./CountSlice";


const store = configureStore({
    reducer : {
        count : CountSlice // First Count
    }
})
export default store;