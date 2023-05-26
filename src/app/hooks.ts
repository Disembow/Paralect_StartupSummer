import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { JOBS_PER_PAGE } from './api';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useJobsCount = () => {
  const count = useAppSelector((state) => state.cards.jobsCount);
  return count >= 500 ? 500 / JOBS_PER_PAGE : count / JOBS_PER_PAGE;
};
