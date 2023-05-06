import React from 'react';
import Filters from './UI/Filters';
import SearchBar from './UI/SearchBar';
import style from './SearchPage.module.scss';

const SearchPage = () => {
  return (
    <>
      <div className={style.container}>
        <Filters />
        <SearchBar />
      </div>
    </>
  );
};

export default SearchPage;
