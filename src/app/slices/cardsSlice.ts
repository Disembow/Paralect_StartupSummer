import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TData, TJobsDate } from '../../types/dataType';
import { CLIENT_SECRET, X_SECRET_KEY } from '../api';
import { getAuthData } from '../localStorage';

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
  favouritsCount: number;
}

const initialState: IInitState = {
  jobsData: [],
  isLoading: false,
  error: '',
  isBurgerOpen: false,
  jobsCount: 0,
  favouritsCurrPage: 1,
  favouritsCount: 0,
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
      state.jobsData.length = 0;
    },
    setFavouritsCurrPage(state, action) {
      state.favouritsCurrPage = action.payload;
    },
    setFavouritsCount(state, action) {
      state.favouritsCount = action.payload;
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

export const fetchJobs = createAsyncThunk<TData, [string, string]>(
  'card/fetchJobs',
  async ([URL, key], { rejectWithValue }) => {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': X_SECRET_KEY,
        'X-Api-App-Id': CLIENT_SECRET,
        Authorization: getAuthData()
          ? `${getAuthData()?.token_type} ${getAuthData()?.access_token}`
          : `Bearer ${key}`,
      },
    });

    if (!response.ok) {
      return rejectWithValue('Невозможно получить данные с этого ресурса');
    }

    const data: TData = await response.json();
    return data;
  }
);

export const { setIsBurgerOpen, setSearchValue, setFavouritsCurrPage, setFavouritsCount } =
  cardsSlice.actions;

export default cardsSlice.reducer;
