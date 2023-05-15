import { TJobsDate } from '../types/dataType';

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

console.log(!getOneFavorite(34797524));
