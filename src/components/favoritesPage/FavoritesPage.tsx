import React from 'react';
import Cards from '../searchPage/UI/Cards';
import EmptyLayout from './UI/EmptyLayout';
import { getFavourits } from '../../app/localStorage';
import StyledPagination from '../searchPage/UI/StyledPagination';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setFavouritsCurrPage } from '../../app/slices/cardsSlice';

const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.cards.favouritsCurrPage);

  const ITEMS_ON_FAVORITE_PAGE = 5;

  const favourits = getFavourits();

  const total = Math.ceil(getFavourits().length / ITEMS_ON_FAVORITE_PAGE);

  const start = (page - 1) * ITEMS_ON_FAVORITE_PAGE;
  const end = start + ITEMS_ON_FAVORITE_PAGE;

  return (
    <>
      {favourits.length > 0 ? (
        <>
          <Cards data={favourits.slice(start, end)} />
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
    </>
  );
};

export default FavoritesPage;
