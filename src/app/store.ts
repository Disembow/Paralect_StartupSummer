import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './slices/cardsSlice';
import industriesSlice from './slices/industriesSlice';
import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cards: cardsSlice,
    industries: industriesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
