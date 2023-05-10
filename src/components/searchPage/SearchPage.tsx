import React, { useEffect } from 'react';
import Filters from './UI/Filters';
import SearchBar from './UI/SearchBar';
import styles from './SearchPage.module.scss';
import Cards from './UI/Cards';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchJobs } from '../../app/slices/cardsSlice';

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
          {jobsData.length > 0 && <Cards data={jobsData} />}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
