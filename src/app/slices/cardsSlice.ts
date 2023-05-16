import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TData, TJobsDate } from '../../types/dataType';
import { afterAuthHeaders } from '../api';

export interface TFilters {
  select: number;
  salaryFrom: number | '';
  salaryTo: number | '';
  page: number;
  keyword: string;
}

interface IInitState {
  jobsData: TJobsDate[];
  isLoading: boolean;
  error: string;
  isBurgerOpen: boolean;
  jobsCount: number;
  searchParams: TFilters;
  favouritsCurrPage: number;
}

const initialState: IInitState = {
  jobsData: [],
  isLoading: false,
  error: '',
  isBurgerOpen: false,
  jobsCount: 0,
  favouritsCurrPage: 1,
  searchParams: {
    select: 0,
    salaryFrom: '',
    salaryTo: '',
    page: 1,
    keyword: '',
  },
};

const cardsSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setIsBurgerOpen(state) {
      state.isBurgerOpen = !state.isBurgerOpen;
    },
    setSearchValue(state, action) {
      state.searchParams = action.payload;
    },
    setFavouritsCurrPage(state, action) {
      state.favouritsCurrPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
        state.jobsData.length = 0;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.jobsCount = action.payload.total;
        state.jobsData.push(action.payload.objects);
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Невозможно получить данные с этого ресурса';
      });
  },
});

export const fetchJobs = createAsyncThunk<TData, [string]>(
  'card/fetchJobs',
  async ([URL], { rejectWithValue }) => {
    const response = await fetch(URL, {
      method: 'GET',
      headers: { ...afterAuthHeaders },
    });

    if (!response.ok) {
      return rejectWithValue('Невозможно получить данные с этого ресурса');
    }

    const data: TData = await response.json();
    return data;
  }
);

export const { setIsBurgerOpen, setSearchValue, setFavouritsCurrPage } = cardsSlice.actions;

export default cardsSlice.reducer;
