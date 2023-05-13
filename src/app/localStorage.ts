import { TJobsDate } from '../types/dataType';

export const setFavourits = (array: TJobsDate[]): void => {
  localStorage.setItem('favorit_jobs', JSON.stringify(array));
};

export const getFavourits = (): TJobsDate[] => {
  const LS = localStorage.getItem('favorit_jobs');
  if (LS) return JSON.parse(LS);
  return [];
};
