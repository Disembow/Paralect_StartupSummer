import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TData, TJobsDate } from '../../types/dataType';

interface IInitState {
  jobsData: TJobsDate[];
  isLoading: boolean;
  error: string;
  isBurgerOpen: boolean;
  jobsCount: number;
}

const initialState: IInitState = {
  jobsData: [],
  isLoading: false,
  error: '',
  isBurgerOpen: false,
  jobsCount: 0,
};

const cardsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsBurgerOpen(state) {
      state.isBurgerOpen = !state.isBurgerOpen;
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

const API_LINK = 'https://startup-summer-2023-proxy.onrender.com/2.0/';
const API_VACANCIES = 'vacancies/';
export const JOBS_PER_PAGE = 10;
export const JOBS_COUNT = 500;
export const LAST_PAGE = Math.ceil(JOBS_COUNT / JOBS_PER_PAGE);

const CLIENT_SECRET =
  'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948'; //! remove into .env.local or .env.client

export const fetchJobs = createAsyncThunk<TData, [string, number]>(
  'auth/fetchJobs',
  async ([search, page = 1], { rejectWithValue }) => {
    if (!search || search === '') {
      const response = await fetch(
        `${API_LINK}${API_VACANCIES}?page=${page}&count=${JOBS_PER_PAGE}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            'X-Api-App-Id': CLIENT_SECRET,
            Authorization:
              'Bearer v3.r.137440105.598ef3d494612bd0415f785c6b338da125336009.c1d676d245a866973f96514e3771b2679bfd84c5',
          },
        }
      );

      if (!response.ok) {
        return rejectWithValue('Невозможно получить данные с этого ресурса');
      }

      const data: TData = await response.json();
      return data;
    } else {
      return {} as TData; // !update to search key from searchbar
    }
  }
);

export const { setIsBurgerOpen } = cardsSlice.actions;

export default cardsSlice.reducer;
