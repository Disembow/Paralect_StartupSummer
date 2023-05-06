import React from 'react';
import Filters from './UI/Filters';
import SearchBar from './UI/SearchBar';
import styles from './SearchPage.module.scss';

const SearchPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Filters />
        <div className={styles.search}>
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
