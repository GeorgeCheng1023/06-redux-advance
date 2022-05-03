import {createSlice} from '@reduxjs/toolkit'

const initialState = {isShowCart : false}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers:{
    toggle(state){
      state.isShowCart = !state.isShowCart;
    }
  }
})

export const uiActions = uiSlice.actions

export default uiSlice