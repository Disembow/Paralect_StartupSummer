import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authHeaders } from '../api';

export interface IInitState {
  access_token: string;
  refresh_token: string;
  isLoading: boolean;
  error: string;
}

const initialState: IInitState = {
  access_token: '',
  refresh_token: '',
  isLoading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.access_token = action.payload.access_token;
        state.refresh_token = action.payload.refresh_token;
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Ошибка авторизации';
      });
  },
});

export const fetchAuth = createAsyncThunk<IInitState, [string]>(
  'auth/fetchAuth',
  async ([URL], { rejectWithValue }) => {
    const response = await fetch(URL, {
      method: 'GET',
      headers: { ...authHeaders },
    });

    if (!response.ok) {
      return rejectWithValue('Ошибка авторизации');
    }

    const data: IInitState = await response.json();
    localStorage.setItem('paralect_data', JSON.stringify(data));

    return data;
  }
);

export default authSlice.reducer;
