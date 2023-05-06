import React from 'react';
import Filters from './UI/Filters';
import SearchBar from './UI/SearchBar';
import styles from './SearchPage.module.scss';
import Cards from './UI/Cards';

const SearchPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Filters />
        <div className={styles.search}>
          <SearchBar />
          <Cards />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
