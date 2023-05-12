import React from 'react';
import { setIsBurgerOpen } from '../../../app/slices/cardsSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

const Overlay = () => {
  const toggle = () => {
    dispatch(setIsBurgerOpen());
  };

  const dispatch = useAppDispatch();
  const isBurgerOpen = useAppSelector((state) => state.cards.isBurgerOpen);

  return (
    <div className={isBurgerOpen ? 'overlay_visible' : 'overlay_invisible'} onClick={toggle} />
  );
};

export default Overlay;
