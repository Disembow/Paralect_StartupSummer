import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './slices/cardsSlice';
import industriesSlice from './slices/industriesSlice';

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
    industries: industriesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
