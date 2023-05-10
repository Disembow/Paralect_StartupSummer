import React, { Suspense, lazy, useEffect } from 'react';
import Filters from './UI/Filters';
import SearchBar from './UI/SearchBar';
import styles from './SearchPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchJobs } from '../../app/slices/cardsSlice';
import { Loader } from '@mantine/core';
const Cards = lazy(() => import('./UI/Cards'));

const SearchPage = () => {
  const dispatch = useAppDispatch();
  const jobsData = useAppSelector((state) => state.cards.jobsData);

  useEffect(() => {
    dispatch(fetchJobs(['', 1, 10]));
  }, [dispatch]);

  return (
    <>
      <div className={styles.container}>
        <Filters />
        <div className={styles.search}>
          <SearchBar />
          <Suspense fallback={<Loader size={64} />}>
            <Cards data={jobsData} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
