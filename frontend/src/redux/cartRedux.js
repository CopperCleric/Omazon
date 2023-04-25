import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
      products: [],
      quantity: 0,
      total: 0,
    },
    reducers: {
        //add product to our cart,calcultate total payment of single product
        addProduct: (state, action) => {
          state.quantity += 1;
          state.products.push(action.payload);
          state.total += action.payload.price * action.payload.quantity;
        },
      },
});

export const { addProduct } = cartSlice.actions;
//need default bcuz use it in store
export default cartSlice.reducer;