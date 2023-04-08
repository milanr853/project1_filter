import { configureStore } from "@reduxjs/toolkit";
import ListReducer from "./ListSlice";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";



export const store = configureStore({
    reducer: {
        ListReducer
    }
})