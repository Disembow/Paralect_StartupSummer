import React from 'react';
import Cards from '../searchPage/UI/Cards';
import EmptyLayout from './UI/EmptyLayout';
import { getFavourits } from '../../app/localStorage';
// import styles from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  const favourits = getFavourits();

  return <>{favourits.length > 0 ? <Cards data={favourits} /> : <EmptyLayout />}</>;
};

export default FavoritesPage;
