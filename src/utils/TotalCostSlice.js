import { createSlice } from "@reduxjs/toolkit";

const totalPriceSlice=createSlice({
    name:"totalPrice",
    initialState:{
        total:0
    },
    reducers:{
        addPrice:(state,action)=>{
            state.total+=action.payload;
        }
    }
})

export const{addPrice}=totalPriceSlice.actions
export default totalPriceSlice.reducer