import { createSlice } from '@reduxjs/toolkit';

interface IInitState {
  id: string;
}

const initialState: IInitState = {
  id: '',
};

const cardsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCard(state, action) {
      state.id = action.payload.id;
    },
  },
});

export const { setCard } = cardsSlice.actions;

export default cardsSlice.reducer;
