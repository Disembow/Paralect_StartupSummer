import React from 'react';
import Cards from '../searchPage/UI/Cards';
import { useAppSelector } from '../../app/hooks';
import EmptyLayout from './UI/EmptyLayout';
// import styles from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  // const numberOfCards = useAppSelector((state) => state.cards.cardsId.length);
  // console.log(numberOfCards);

  // return <>{numberOfCards > 0 ? <Cards data={tempData} /> : <EmptyLayout />}</>;
  return <div>Favorit Page</div>;
};

export default FavoritesPage;
