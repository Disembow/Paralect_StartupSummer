import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { afterAuthHeaders } from '../api';

interface IInitState {
  industries: TIndustiesData[];
  industriesCount: number;
  error: string;
  isLoading: boolean;
}

type TIndustiesData = {
  title_rus: string;
  key: number;
};

const initialState: IInitState = {
  industries: [],
  industriesCount: 0,
  error: '',
  isLoading: false,
};

const industriesSlice = createSlice({
  name: 'industries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIndustries.pending, (state) => {
        state.industries.length = 0;
        state.isLoading = true;
      })
      .addCase(fetchIndustries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.industries = action.payload;
        state.industriesCount = action.payload.length;
      })
      .addCase(fetchIndustries.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Невозможно получить данные об отраслях с этого ресурса';
      });
  },
});

export const fetchIndustries = createAsyncThunk<TIndustiesData[], [string]>(
  'industries/fetch',
  async ([URL], { rejectWithValue }) => {
    const response = await fetch(URL, {
      method: 'GET',
      headers: { ...afterAuthHeaders },
    });

    if (!response.ok) {
      return rejectWithValue('Невозможно получить данные с этого ресурса');
    }

    const data: TIndustiesData[] = await response.json();
    return data;
  }
);

export default industriesSlice.reducer;
