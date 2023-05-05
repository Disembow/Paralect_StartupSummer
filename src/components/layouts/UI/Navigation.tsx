import React from 'react';
import { NavLink } from 'react-router-dom';
import './UI.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__item">
        Поиск Вакансий
      </NavLink>
      <NavLink to="favorites" className="navigation__item">
        Избранное
      </NavLink>
    </nav>
  );
};

export default Navigation;
