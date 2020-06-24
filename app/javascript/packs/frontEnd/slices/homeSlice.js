import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: [],
  reducers: {
    getSomething: state => state.something,
  },
});

export const { getSomething } = homeSlice.actions;

export default homeSlice.reducer;
