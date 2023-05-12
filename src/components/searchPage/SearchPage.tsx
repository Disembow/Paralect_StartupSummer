import React, { Suspense, lazy } from 'react';
import Filters from './UI/Filters';
import SearchBar from './UI/SearchBar';
import styles from './SearchPage.module.scss';
import { useAppSelector } from '../../app/hooks';
import { Loader } from '@mantine/core';
import Pagination from './UI/Pagination';

const Cards = lazy(() => import('./UI/Cards'));

const SearchPage = () => {
  const jobsData = useAppSelector((state) => state.cards.jobsData);

  return (
    <>
      <div className={styles.container}>
        <Filters />
        <div className={styles.search}>
          <SearchBar />
          <Pagination />
          <Suspense fallback={<Loader size={64} />}>
            <Cards data={jobsData} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
