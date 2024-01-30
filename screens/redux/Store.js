import { configureStore } from "@reduxjs/toolkit"; 
import  FavSliceReducer  from "./Fav";

export const Store =configureStore({
    reducer :{ favItems:FavSliceReducer}
});  

