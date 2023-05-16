import React, { useEffect } from 'react';
import Filters from './UI/Filters';
import SearchBar from './UI/SearchBar';
import styles from './SearchPage.module.scss';
import { useAppDispatch, useAppSelector, useJobsCount } from '../../app/hooks';
import { Center, Loader } from '@mantine/core';
import { fetchJobs, getURLString, setSearchValue } from '../../app/slices/cardsSlice';
import Cards from './UI/Cards';
import StyledPagination from './UI/StyledPagination';
import { fetchIndustries } from '../../app/slices/industriesSlice';

const SearchPage = () => {
  const jobsData = useAppSelector((state) => state.cards.jobsData);
  const isLoading = useAppSelector((state) => state.cards.isLoading);
  const searchParams = useAppSelector((state) => state.cards.searchParams);
  const { page } = searchParams;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const industriesURL = getURLString('industries');
    dispatch(fetchIndustries([industriesURL]));
  }, [dispatch]);

  useEffect(() => {
    const jobsURL = getURLString('filter', searchParams);
    dispatch(fetchJobs([jobsURL]));
  }, [dispatch, searchParams]);

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
          <StyledPagination
            total={useJobsCount()}
            defaultPage={page}
            onChange={(e) =>
              dispatch(
                setSearchValue({
                  ...searchParams,
                  ...{ page: e },
                })
              )
            }
            margin="2.5rem 0 2.75rem 0"
          />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
