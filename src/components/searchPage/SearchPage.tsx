import React, { useEffect, useState } from 'react';
import Filters from './UI/Filters';
import SearchBar from './UI/SearchBar';
import styles from './SearchPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Center, Loader } from '@mantine/core';
import { LAST_PAGE, fetchJobs, getURLString } from '../../app/slices/cardsSlice';
import Cards from './UI/Cards';
import StyledPagination from './UI/StyledPagination';
import { fetchIndustries } from '../../app/slices/industriesSlice';

const SearchPage = () => {
  const jobsData = useAppSelector((state) => state.cards.jobsData);
  const isLoading = useAppSelector((state) => state.cards.isLoading);
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(1);

  useEffect(() => {
    const jobsURL = getURLString('page', page);
    dispatch(fetchJobs(['', jobsURL]));

    const industriesURL = getURLString('industries');
    dispatch(fetchIndustries([industriesURL]));
  }, [page, dispatch]);

  return (
    <>
      <div className={styles.container}>
        <Filters />
        <div className={styles.search}>
          <SearchBar />
          {isLoading ? (
            <Center>
              <Loader size={64} />
            </Center>
          ) : (
            <Cards data={jobsData} />
          )}
          <StyledPagination total={LAST_PAGE} onChange={setPage} margin="2.5rem 0 2.75rem 0" />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
