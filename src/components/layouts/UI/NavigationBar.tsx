import React from 'react';
import './Navigation.scss';
import Navigation from './Navigation';
import BurgerMenu from './BurgerMenu';
import classNames from 'classnames';

const NavigationBar = () => {
  return (
    <>
      <nav className={classNames('navigation', 'navigation__row')}>
        <Navigation />
      </nav>
      <BurgerMenu />
    </>
  );
};

export default NavigationBar;
