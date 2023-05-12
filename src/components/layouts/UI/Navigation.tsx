import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  return (
    <>
      <NavLink to="/" className="navigation__item">
        Поиск Вакансий
      </NavLink>
      <NavLink to="favorites" className="navigation__item">
        Избранное
      </NavLink>
    </>
  );
};

export default Navigation;
