import { TCard } from '../components/searchPage/UI/Card';

export const setFavourits = (array: TCard[]): void => {
  localStorage.setItem('favorit_jobs', JSON.stringify(array));
};

export const getFavourits = (): TCard[] => {
  const LS = localStorage.getItem('favorit_jobs');
  if (LS) return JSON.parse(LS);
  return [];
};
