import React, { useEffect, useState } from 'react';
import Filters from './UI/Filters';
import SearchBar from './UI/SearchBar';
import styles from './SearchPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Center, Loader, Pagination } from '@mantine/core';
import { LAST_PAGE, fetchJobs } from '../../app/slices/cardsSlice';
import Cards from './UI/Cards';

const SearchPage = () => {
  const jobsData = useAppSelector((state) => state.cards.jobsData);
  const isLoading = useAppSelector((state) => state.cards.isLoading);
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchJobs(['', page]));
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
          <Pagination
            m={'2.5rem 0 2.75rem 0'}
            styles={{
              control: {
                borderRadius: '0.5rem',
                color: '#232134',
                '&[data-active]': {
                  backgroundColor: '#5e96fc',
                },
              },
            }}
            position="center"
            total={LAST_PAGE}
            onChange={setPage}
          />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
