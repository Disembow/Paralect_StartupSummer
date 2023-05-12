import React from 'react';
import Navigation from './Navigation';
import './Navigation.scss';
import classNames from 'classnames';
import { Burger } from '@mantine/core';
import { setIsBurgerOpen } from '../../../app/slices/cardsSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

const BurgerMenu = () => {
  const toggle = () => {
    dispatch(setIsBurgerOpen());
  };

  const dispatch = useAppDispatch();
  const isBurgerOpen = useAppSelector((state) => state.cards.isBurgerOpen);

  return (
    <>
      <div className={isBurgerOpen ? 'overlay' : ''} onClick={toggle} />
      <Burger
        className="burger__button"
        pos={'absolute'}
        right={0}
        opened={isBurgerOpen}
        onClick={toggle}
        size={30}
        m={'0.5rem 1rem'}
      />
      <div className={`burger__wrapper ${isBurgerOpen ? 'open' : ''}`}>
        <nav className={classNames('navigation', 'navigation__burger')}>
          <Navigation callback={toggle} />
        </nav>
      </div>
    </>
  );
};

export default BurgerMenu;
