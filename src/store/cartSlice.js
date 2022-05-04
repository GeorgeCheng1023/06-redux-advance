import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addItem(state, action){
      const {id, price, title} = action.payload;
      const foundItem = state.items.find(item => item.id === id);
      if(!foundItem){
        state.items.push({id, price, title, quantity: 1, totalPrice: price})
      }else{
        foundItem.quantity++;
        foundItem.totalPrice += price;
      }
    },
    removeItem(state, action){
      const {id, price} = action.payload;
      const foundItem = state.items.find(item => item.id === id)
      if(foundItem.quantity === 1){
        state.items = state.items.filter(item => item.id !== id)
      }else{
        foundItem.quantity--;
        foundItem.totalPrice -= price;
      }
    }
  }
})
export const cartActions = cartSlice.actions;
export default cartSlice;