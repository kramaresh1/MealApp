import { createSlice } from "@reduxjs/toolkit"; 

const FavSlice =createSlice({
    name:'FavItems',
    initialState :{ids:[]},
    reducers:{
        addFavItem:(state,action)=>{
            state.ids.push(action.payload.id);
        },
        removeFavItem:(state,action)=>{
            state.ids.splice(state.ids.indexOf(action.payload.id),1)
        },
    }

})
export default FavSlice.reducer;
export const addFavItem=FavSlice.actions.addFavItem
export const removeFavItem=FavSlice.actions.removeFavItem