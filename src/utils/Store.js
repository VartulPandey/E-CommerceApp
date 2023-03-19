import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import TotalCostSlice from "./TotalCostSlice";


const store=configureStore({
    reducer:{
        cart:CartSlice,
        totalPrice:TotalCostSlice,
    }
})

export default store