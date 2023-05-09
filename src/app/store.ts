import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './slices/cardsSlice';

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;