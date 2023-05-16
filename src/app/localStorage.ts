import { TJobsDate } from '../types/dataType';
import { IInitState } from './slices/authSlice';

export const setFavourits = (array: TJobsDate[]): void => {
  localStorage.setItem('favorit_jobs', JSON.stringify(array));
};

export const getFavourits = (): TJobsDate[] => {
  const LS = localStorage.getItem('favorit_jobs');
  if (LS) return JSON.parse(LS);
  return [];
};

export const getOneFavorite = (id: number | string): TJobsDate[] => {
  return getFavourits()
    .filter((e) => e.id === Number(id))
    .flat();
};

type TAdditionaAuthData = {
  expires_in: number;
  ttl: number;
};

type TAuthData = Pick<IInitState, 'access_token' | 'refresh_token'>;

export const getAuthData = () => {
  const data = localStorage.getItem('paralect_data');

  if (data) {
    const authData: TAuthData & TAdditionaAuthData = JSON.parse(data);
    return authData;
  }

  return null;
};
