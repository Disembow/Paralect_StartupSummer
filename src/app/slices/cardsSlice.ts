import { createSlice } from '@reduxjs/toolkit';

interface IInitState {
  cardsId: string[];
}

const initialState: IInitState = {
  cardsId: [],
};

const cardsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCard(state, action) {
      state.cardsId.push(action.payload);
    },
  },
});

export const { setCard } = cardsSlice.actions;

export default cardsSlice.reducer;
