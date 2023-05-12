import React from 'react';
import Navigation from './Navigation';
import './Navigation.scss';
import classNames from 'classnames';

const BurgerMenu = () => {
  return (
    <nav className={classNames('navigation', 'navigation__burger')}>
      <Navigation />
    </nav>
  );
};

export default BurgerMenu;
