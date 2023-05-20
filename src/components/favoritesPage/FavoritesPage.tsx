import React, { useEffect, useState } from 'react';
import Cards from '../searchPage/UI/Cards';
import EmptyLayout from './UI/EmptyLayout';
import { getFavourits } from '../../app/localStorage';
import StyledPagination from '../searchPage/UI/StyledPagination';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setFavouritsCurrPage } from '../../app/slices/cardsSlice';
import styles from './FavoritesPage.module.scss';
import { TJobsDate } from '../../types/dataType';

const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  const [favourits, setFavourits] = useState<TJobsDate[]>([]);
  const page = useAppSelector((state) => state.cards.favouritsCurrPage);

  const ITEMS_ON_FAVORITE_PAGE = 5;
  const total = Math.ceil(getFavourits().length / ITEMS_ON_FAVORITE_PAGE);
  const start = (page - 1) * ITEMS_ON_FAVORITE_PAGE;
  const end = start + ITEMS_ON_FAVORITE_PAGE;

  useEffect(() => {
    setFavourits(getFavourits().slice(start, end));
  }, [end, favourits, start]);

  return (
    <div className={styles.wrapper}>
      {favourits.length > 0 ? (
        <>
          <Cards data={favourits} />
          <StyledPagination
            total={total}
            onChange={(e) => dispatch(setFavouritsCurrPage(e))}
            defaultPage={page}
            margin="6.5rem 0 2.75rem 0"
          />
        </>
      ) : (
        <EmptyLayout />
      )}
    </div>
  );
};

export default FavoritesPage;
